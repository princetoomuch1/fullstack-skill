// RFC 9457 Problem Details helpers for Web-standard Request/Response runtimes
// (Next.js route handlers, Hono, Cloudflare Workers, Node 18+).
import type { ZodError } from "zod";

export interface ProblemDetails {
  type: string; // URI identifying the problem type; "about:blank" if no more specific type
  title: string; // short, stable, human-readable summary
  status: number;
  detail?: string; // explanation specific to this occurrence
  instance?: string; // URI of this occurrence (request id, etc.)
  [extension: string]: unknown;
}

export function problem(
  status: number,
  title: string,
  extra: Omit<Partial<ProblemDetails>, "status" | "title"> = {},
): Response {
  const body: ProblemDetails = { type: "about:blank", title, status, ...extra };
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/problem+json" },
  });
}

export function validationProblem(error: ZodError, instance?: string): Response {
  return problem(422, "Validation failed", {
    type: "https://example.com/problems/validation",
    ...(instance === undefined ? {} : { instance }),
    errors: error.issues.map((i) => ({ path: i.path.join("."), message: i.message, code: i.code })),
  });
}

// Never put stack traces, SQL, or internal identifiers in `detail`. Log them, return a request id.
export const internalError = (requestId: string): Response =>
  problem(500, "Internal Server Error", { instance: `urn:request:${requestId}` });
