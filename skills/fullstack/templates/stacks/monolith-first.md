# Monolith-first backends

**Composition:** Laravel + Inertia/Livewire, Rails 8 + Hotwire, or Django + HTMX

**Best fit:** Small teams shipping CRUD-heavy products fast with one deployable and conventions built in.

**When NOT:** Teams that must share a TypeScript type system end-to-end, or that need an edge runtime.

## Start

```bash
composer create-project laravel/laravel app   # or: rails new app / django-admin startproject app
```

Commands change between releases. Check the tool's current docs and pin the versions you choose.

## Layout

framework conventions (app/, config/, database/migrations, tests/)

## First steps

1. Use the framework's auth, CSRF, validation and migration tooling; do not rebuild them.
2. Queue and scheduler from day one for email and slow work.
3. Still apply the Doctrine: authz on every action, parameterized queries, secrets out of the repo, tests in CI.

## Read before building

- ../../references/backend.md
- ../../references/security.md
- ../../references/testing.md

## Always copy from templates/

tsconfig.strict.json (TypeScript projects) · npmrc · renovate.json · ci-github-actions.yml · env.ts · errors.ts · webhook-verify.ts · test configs.
