// Idempotency-Key handling for mutating endpoints. Web-standard Request/Response.
// Contract: same key + same request => replay the first response. Same key + different request => 422.
// Same key while the first request is still running => 409. Back the store with Redis/Postgres in production.
import { problem } from "./errors";

export interface StoredResponse {
  status: number;
  headers: [string, string][];
  body: string;
}

export type BeginResult =
  | { state: "new" }
  | { state: "in_flight" }
  | { state: "mismatch" }
  | { state: "done"; response: StoredResponse };

export interface IdempotencyStore {
  begin(key: string, fingerprint: string, ttlSeconds: number): Promise<BeginResult>;
  complete(key: string, response: StoredResponse): Promise<void>;
  abort(key: string): Promise<void>;
}

async function sha256Hex(input: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export function withIdempotency(
  handler: (req: Request) => Promise<Response>,
  store: IdempotencyStore,
  ttlSeconds = 24 * 60 * 60,
) {
  return async (req: Request): Promise<Response> => {
    const key = req.headers.get("idempotency-key");
    if (!key) return problem(400, "Idempotency-Key header is required");
    if (key.length > 255) return problem(400, "Idempotency-Key is too long");

    // Scope the key to the caller in real code (user id / API key id) to prevent cross-tenant replay.
    const bodyText = await req.clone().text();
    const fingerprint = await sha256Hex(`${req.method} ${new URL(req.url).pathname}\n${bodyText}`);

    const begun = await store.begin(key, fingerprint, ttlSeconds);
    if (begun.state === "mismatch") return problem(422, "Idempotency-Key reused with a different request");
    if (begun.state === "in_flight") return problem(409, "A request with this Idempotency-Key is in progress");
    if (begun.state === "done") {
      const { status, headers, body } = begun.response;
      return new Response(body, { status, headers: [...headers, ["idempotent-replayed", "true"]] });
    }

    try {
      const res = await handler(req);
      // Do not cache 5xx: let the client retry with the same key.
      if (res.status >= 500) {
        await store.abort(key);
        return res;
      }
      const body = await res.clone().text();
      await store.complete(key, { status: res.status, headers: [...res.headers], body });
      return res;
    } catch (err) {
      await store.abort(key);
      throw err;
    }
  };
}

// In-memory store for tests and local dev only (single process, not durable).
export class MemoryIdempotencyStore implements IdempotencyStore {
  private entries = new Map<string, { fingerprint: string; response?: StoredResponse; expires: number }>();

  async begin(key: string, fingerprint: string, ttlSeconds: number): Promise<BeginResult> {
    const now = Date.now();
    const existing = this.entries.get(key);
    if (existing && existing.expires > now) {
      if (existing.fingerprint !== fingerprint) return { state: "mismatch" };
      return existing.response ? { state: "done", response: existing.response } : { state: "in_flight" };
    }
    this.entries.set(key, { fingerprint, expires: now + ttlSeconds * 1000 });
    return { state: "new" };
  }
  async complete(key: string, response: StoredResponse): Promise<void> {
    const e = this.entries.get(key);
    if (e) e.response = response;
  }
  async abort(key: string): Promise<void> {
    this.entries.delete(key);
  }
}
// Redis sketch for begin(): SET idem:{key} {fingerprint} NX EX {ttl}; if it already exists, GET and compare.
