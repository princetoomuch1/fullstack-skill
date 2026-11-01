# MERN

**Composition:** MongoDB + Express + React + Node.js

**Best fit:** Roles and codebases that explicitly ask for MERN; document-shaped data.

**When NOT:** Relational data with many joins and strict integrity (use Postgres); new projects with no MERN requirement.

## Start

```bash
pnpm create vite@latest web --template react-ts
pnpm add express zod mongoose   # then validate env and add helmet-style headers
```

Commands change between releases. Check the tool's current docs and pin the versions you choose.

## Layout

web/ (Vite + React) · api/src/{routes,services,models} · api/test · e2e/

## First steps

1. Use Express 5 (native async error handling); validate every request body with Zod.
2. Model embed-vs-reference deliberately; add indexes for every query; enable schema validation.
3. Server-side authz on every route; rate limit auth endpoints.

## Read before building

- ../../references/backend.md
- ../../references/database.md
- ../../references/security.md

## Always copy from templates/

tsconfig.strict.json (TypeScript projects) · npmrc · renovate.json · ci-github-actions.yml · env.ts · errors.ts · webhook-verify.ts · test configs.
