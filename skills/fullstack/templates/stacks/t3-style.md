# T3-style

**Composition:** Next.js + tRPC + Tailwind + Drizzle + Better Auth + Zod

**Best fit:** Type-safe SaaS for solo developers and small teams where every client is TypeScript.

**When NOT:** Public API for third parties (use OpenAPI); non-TypeScript clients; mobile apps in other languages.

## Start

```bash
pnpm create t3-app@latest   # review the generated auth/ORM choices against the Doctrine
pnpm add drizzle-orm zod better-auth
```

Commands change between releases. Check the tool's current docs and pin the versions you choose.

## Layout

src/server/api/routers/ (tRPC) · src/server/db/ · src/app/ · src/trpc/ · e2e/

## First steps

1. Replace any default next-auth setup with Better Auth for new projects (Auth.js is in maintenance mode).
2. Input schemas with Zod on every procedure; authorization middleware on every protected procedure.
3. Keep tRPC internal; expose a separate REST/OpenAPI surface if third parties appear.

## Read before building

- ../../references/api-integration.md
- ../../references/security.md
- ../../references/database.md

## Always copy from templates/

tsconfig.strict.json (TypeScript projects) · npmrc · renovate.json · ci-github-actions.yml · env.ts · errors.ts · webhook-verify.ts · test configs.
