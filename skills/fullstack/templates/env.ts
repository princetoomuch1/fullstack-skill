// Boot-time environment validation. Fails fast with a readable error instead of failing at 3am.
// Install: pnpm add @t3-oss/env-core zod
// Next.js: use @t3-oss/env-nextjs instead and declare client vars with the NEXT_PUBLIC_ prefix.
// Remember: anything NEXT_PUBLIC_* ships to the browser. Never put a secret there.
import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
    DATABASE_URL: z.url(),
    SESSION_SECRET: z.string().min(32),
    STRIPE_WEBHOOK_SECRET: z.string().min(1),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
