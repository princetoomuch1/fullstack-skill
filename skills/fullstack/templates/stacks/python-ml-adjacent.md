# Python data/ML adjacent

**Composition:** FastAPI + Pydantic + SQLAlchemy/Alembic + PostgreSQL + Celery/Arq + React

**Best fit:** APIs that feed ML pipelines, analytics products, internal tools around models.

**When NOT:** Pure CRUD web apps with no Python-specific libraries (TypeScript end-to-end is simpler).

## Start

```bash
uv init api && uv add fastapi uvicorn pydantic sqlalchemy alembic psycopg[binary]   # plus: uv add --dev pytest ruff
```

Commands change between releases. Check the tool's current docs and pin the versions you choose.

## Layout

api/app/{routers,services,models,schemas} · api/migrations · web/

## First steps

1. Pydantic models at every boundary; Alembic migrations reviewed as SQL.
2. Background jobs for anything slow; idempotent task design.
3. Generate an OpenAPI client for the React app instead of hand-writing types.

## Read before building

- ../../references/backend.md
- ../../references/database.md
- ../../references/api-integration.md

## Always copy from templates/

tsconfig.strict.json (TypeScript projects) · npmrc · renovate.json · ci-github-actions.yml · env.ts · errors.ts · webhook-verify.ts · test configs.
