# Next.js full-stack

**Composition:** Next.js 16 (App Router, RSC, Cache Components) + TypeScript + Tailwind v4 + shadcn/ui + Drizzle or Prisma + PostgreSQL + Better Auth or Clerk + Vercel

**Best fit:** Default modern web app; SaaS, dashboards, content + app hybrids; best hiring depth.

**When NOT:** Pure content site (use Astro); heavy realtime collaboration (consider a sync engine); team that cannot operate RSC security patching.

## Start

```bash
pnpm create next-app@latest --ts --tailwind --app --turbopack
pnpm dlx shadcn@latest init   # Base UI is the default primitive layer; use `-b radix` to keep Radix
pnpm add drizzle-orm pg zod @t3-oss/env-core better-auth && pnpm add -D drizzle-kit vitest @playwright/test msw
```

Commands change between releases. Check the tool's current docs and pin the versions you choose.

## Layout

app/ (routes) · app/api/ (route handlers) · src/db/ (schema, migrations) · src/server/ (services, authz) · src/lib/ · e2e/ · test/

## First steps

1. Copy templates/tsconfig.strict.json, npmrc, pnpm-workspace.yaml, env.ts, errors.ts.
2. Enable Cache Components deliberately (`cacheComponents: true`) or stay on explicit fetch/route caching; do not mix by accident.
3. Auth + authorization on every Server Action and route handler; write the authz test first.
4. Add proxy.ts only if you need request interception; it runs on Node.
5. Wire CI from templates/ci-github-actions.yml; add Sentry and web-vitals reporting.

## Read before building

- ../../references/frontend.md
- ../../references/backend.md
- ../../references/database.md
- ../../references/security.md
- ../../references/performance.md

## Always copy from templates/

tsconfig.strict.json (TypeScript projects) · npmrc · renovate.json · ci-github-actions.yml · env.ts · errors.ts · webhook-verify.ts · test configs.
