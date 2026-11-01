# Edge-first

**Composition:** Hono + Cloudflare Workers + D1/Turso + Drizzle + TypeScript

**Best fit:** Latency-critical, globally distributed APIs; small bundles; low cold-start tolerance.

**When NOT:** Long-running CPU work, large native dependencies, or heavy relational workloads (use regional Postgres).

## Start

```bash
pnpm create hono@latest api   # choose cloudflare-workers
pnpm add drizzle-orm zod && pnpm add -D drizzle-kit wrangler
```

Commands change between releases. Check the tool's current docs and pin the versions you choose.

## Layout

src/index.ts (Hono app) · src/db/ · wrangler.jsonc · test/

## First steps

1. Use only Web-standard APIs; check every dependency for Workers compatibility.
2. Bindings for secrets and storage (D1, KV, R2, Queues); never hardcode.
3. Migrations through drizzle-kit/wrangler with review; read replicas and consistency model understood before launch.

## Read before building

- ../../references/backend.md
- ../../references/database.md
- ../../references/devops-deploy.md

## Always copy from templates/

tsconfig.strict.json (TypeScript projects) · npmrc · renovate.json · ci-github-actions.yml · env.ts · errors.ts · webhook-verify.ts · test configs.
