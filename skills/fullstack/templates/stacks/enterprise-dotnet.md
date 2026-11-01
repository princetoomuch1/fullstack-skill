# Enterprise .NET

**Composition:** React + ASP.NET Core + SQL Server + Azure + Docker

**Best fit:** Microsoft-ecosystem organizations and corporate IT.

**When NOT:** Teams with no .NET experience and no Azure commitment.

## Start

```bash
dotnet new webapi -n Api
pnpm create vite@latest web --template react-ts
```

Commands change between releases. Check the tool's current docs and pin the versions you choose.

## Layout

src/Api/ (minimal APIs, endpoints) · src/Domain · src/Infrastructure (EF Core) · web/

## First steps

1. EF Core migrations reviewed as SQL; policy-based authorization.
2. OpenTelemetry via the .NET SDK; Azure Key Vault for secrets; managed identity instead of keys.
3. xUnit + Testcontainers; Playwright for the React front end.

## Read before building

- ../../references/backend.md
- ../../references/security.md
- ../../references/devops-deploy.md

## Always copy from templates/

tsconfig.strict.json (TypeScript projects) · npmrc · renovate.json · ci-github-actions.yml · env.ts · errors.ts · webhook-verify.ts · test configs.
