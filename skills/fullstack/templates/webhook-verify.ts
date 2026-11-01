// Generic HMAC-SHA256 webhook verification: RAW body, timing-safe compare, timestamp tolerance.
// Header format assumed: "t=<unix seconds>,v1=<hex hmac of `${t}.${rawBody}`>" (Stripe-style).
// For Stripe itself, prefer stripe.webhooks.constructEvent(rawBody, signatureHeader, secret).
import { createHmac, timingSafeEqual } from "node:crypto";

export function verifyWebhook(
  rawBody: string, // the exact bytes received, as a string. NOT JSON.stringify(parsedBody).
  signatureHeader: string | null,
  secret: string,
  toleranceSeconds = 300,
  nowSeconds = Math.floor(Date.now() / 1000),
): boolean {
  if (!signatureHeader) return false;
  const parts = Object.fromEntries(
    signatureHeader.split(",").map((kv) => {
      const i = kv.indexOf("=");
      return [kv.slice(0, i).trim(), kv.slice(i + 1).trim()];
    }),
  );
  const t = Number(parts["t"]);
  const provided = parts["v1"];
  if (!Number.isFinite(t) || !provided) return false;
  if (Math.abs(nowSeconds - t) > toleranceSeconds) return false; // replay protection

  const expected = createHmac("sha256", secret).update(`${t}.${rawBody}`).digest("hex");
  const a = Buffer.from(expected, "utf8");
  const b = Buffer.from(provided, "utf8");
  return a.length === b.length && timingSafeEqual(a, b); // length check first: timingSafeEqual throws on mismatch
}

// Next.js route handler usage:
//   export async function POST(req: Request) {
//     const raw = await req.text(); // read the raw body BEFORE any JSON parsing
//     if (!verifyWebhook(raw, req.headers.get("x-signature"), env.WEBHOOK_SECRET)) return new Response("invalid", { status: 400 });
//     const event = JSON.parse(raw);
//     // 1. dedupe by event.id  2. enqueue for async processing  3. return 2xx fast
//     return new Response(null, { status: 204 });
//   }
