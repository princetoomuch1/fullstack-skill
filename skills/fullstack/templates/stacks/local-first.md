# Local-first

**Composition:** React + Zero or ElectricSQL + PostgreSQL (+ TanStack DB)

**Best fit:** Linear-style instant UX, offline-first apps, real-time collaboration, large datasets with partial sync.

**When NOT:** Simple CRUD apps: TanStack Query is enough and far cheaper to operate.

## Start

```bash
pnpm add @rocicorp/zero   # or @electric-sql/client
# set up logical replication on Postgres; deploy zero-cache or Electric per vendor docs
```

Commands change between releases. Check the tool's current docs and pin the versions you choose.

## Layout

src/zero/ (schema, queries, mutators) · src/db/ · server/ (authoritative mutators)

## First steps

1. Decide authority model first: server-authoritative (Zero) vs CRDT merge (Yjs/Automerge).
2. Permissions are enforced on the server for every mutator and query.
3. Test offline, reconnect, and conflict scenarios in Playwright.

## Read before building

- ../../references/realtime-sync.md
- ../../references/database.md
- ../../references/security.md

## Always copy from templates/

tsconfig.strict.json (TypeScript projects) · npmrc · renovate.json · ci-github-actions.yml · env.ts · errors.ts · webhook-verify.ts · test configs.
