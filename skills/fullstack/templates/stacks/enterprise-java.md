# Enterprise Java

**Composition:** Angular or React + Spring Boot 3 + PostgreSQL/Oracle + Docker + Kubernetes

**Best fit:** Banking, healthcare, government, large organizations with Java teams.

**When NOT:** Small teams shipping quickly without existing JVM expertise.

## Start

```bash
spring init --dependencies=web,data-jpa,security,actuator,postgresql api
pnpm create vite@latest web --template react-ts   # or ng new web
```

Commands change between releases. Check the tool's current docs and pin the versions you choose.

## Layout

api/src/main/java/... (controller, service, repository, domain) · web/ · k8s/ · docker/

## First steps

1. Spring Security with method-level authorization; Flyway or Liquibase migrations.
2. Actuator health endpoints for liveness/readiness; structured logs with correlation IDs.
3. Testcontainers for integration tests; contract tests at service boundaries.

## Read before building

- ../../references/backend.md
- ../../references/security.md
- ../../references/devops-deploy.md
- ../../references/testing.md

## Always copy from templates/

tsconfig.strict.json (TypeScript projects) · npmrc · renovate.json · ci-github-actions.yml · env.ts · errors.ts · webhook-verify.ts · test configs.
