# BaaS rapid build

**Composition:** Next.js or Vite + Supabase (Auth, RLS, Storage, Realtime) or Firebase or Convex

**Best fit:** MVPs, prototypes, small teams with standard CRUD + auth.

**When NOT:** Complex domain logic, strict data-residency/compliance, heavy background processing, or cost control at scale.

## Start

```bash
pnpm add @supabase/supabase-js   # then `supabase init` for local dev and migrations
```

Commands change between releases. Check the tool's current docs and pin the versions you choose.

## Layout

supabase/migrations/ · src/lib/supabase/ (server and browser clients) · e2e/

## First steps

1. Enable RLS on EVERY exposed table and write policies before writing UI.
2. The service_role key never reaches the client.
3. Keep migrations in git (`supabase db diff`), not only in the dashboard.

## Read before building

- ../../references/database.md
- ../../references/security.md
- ../../references/api-integration.md

## Always copy from templates/

tsconfig.strict.json (TypeScript projects) · npmrc · renovate.json · ci-github-actions.yml · env.ts · errors.ts · webhook-verify.ts · test configs.
