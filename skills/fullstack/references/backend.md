# Backend

- Node version map, frameworks, API implementation rules, background work, resilience, email, multi-tenancy.
- Timeouts everywhere; no unbounded awaits.
- At-least-once delivery plus idempotent consumers is the practical exactly-once.
- Never leak ORM entities; validate at the boundary.

> Part of the `fullstack` skill. Tier tags: [Core] baseline, [Senior] mid/senior, [Situational] on demand. Numbered citations [n] resolve in [SOURCES.md](SOURCES.md). Items tagged `[unverified — confirm source]` could not be re-verified; do not present them as fact.

## Current as of November 2026

- Node 20 EOL 30 Apr 2026; Node 22 maintenance to 30 Apr 2027; Node 24 LTS to 30 Apr 2028; Node 26 LTS promotion scheduled 28 Oct 2026.
- Node 27 onward: one major per year, every release LTS.
- Type stripping stable in Node 25.2 / 24.12; erasable syntax only.

## 3. Backend

**Runtime & version map [Core]:** **Node.js** (90% usage in State of JS 2025 [5]) · Node 20 reached end of life on 30 April 2026; Node 22 is in maintenance until 30 April 2027; **Node 24 "Krypton"** is LTS to 30 April 2028; **Node 26** (released 5 May 2026; Temporal unflagged, V8 14.6, Undici 8) was scheduled for LTS promotion on 28 October 2026 and runs to April 2029 [21][22] · release model changes from Node 27: one major per year (April), every release becomes LTS, alpha from October 2026 [23][21] · pin base images to a major line, not `latest` [23] · **native TypeScript:** type stripping is stable in Node 25.2 and 24.12, enabled by default since 23.6/22.18; only erasable syntax (no enums, namespaces, parameter properties), no type-checking (run `tsc --noEmit`), `type` keyword required on type imports, Node refuses to strip TS under `node_modules` [7] · `--experimental-transform-types` removed in Node 26 [7] · permission model (`--permission`) is a seat belt, not a sandbox [21] · **[Situational]** Bun (21% usage, +4pp, S-tier satisfaction [5]; Anthropic acquired Bun on 2 December 2025, stays MIT-licensed [24]) · Deno 2 (11% [5])

**Node internals — the junior/senior separator [Senior]:** event loop phases, libuv, non-blocking I/O · **Streams (Readable/Writable/Transform, `pipeline()`, backpressure)** · Web Streams interop · Buffers, EventEmitter · worker threads vs cluster vs child_process · **AsyncLocalStorage** (request-scoped context; how correlation IDs propagate) · undici (Node's fetch, connection pooling, timeouts) · **node:test** built-in runner · graceful shutdown (SIGTERM drain) · memory: heap snapshots, leak sources (unbounded caches, listener buildup), `--max-old-space-size` · CPU profiling (`--cpu-prof`, flame graphs, clinic.js)

**Frameworks [Core]:** Express 5 (baseline; async error handling now native) · **Fastify 5** (schema-first validation/serialization, plugin encapsulation, TypeBox) · **NestJS** (modules, DI, guards, interceptors, pipes; enterprise TS demand) · **Hono** (Web Standards API, ~14KB, runs on Node/Bun/Deno/Workers unchanged; S-tier satisfaction in State of JS 2025 [5]) · Elysia (Bun), Nitro, AdonisJS · Next.js route handlers/Server Actions as backend surface

**Cross-language [Situational]:** Python — **FastAPI** (14.8% usage, +5pp YoY, the AI-backend default [25]), Pydantic v2, Django/DRF, Flask, **uv + ruff** (Astral tooling), pytest, Celery/Dramatiq/Arq · Java — Spring Boot 3, Spring Security, JPA/Hibernate, Maven/Gradle, JUnit 5, Testcontainers · Go — net/http, chi/Gin, **sqlc**, pgx, goroutines/channels, context · C# — ASP.NET Core minimal APIs, EF Core, Dapper, **SignalR**, xUnit (ASP.NET Core ranks 4th among web technologies at 19.9% in Stack Overflow 2026, behind Node.js, React and Next.js [26]) · PHP — Laravel (Eloquent, queues, Octane), Livewire, Pest · Ruby — Rails 8, Hotwire, Sidekiq · Rust — Axum/Tokio/sqlx · Elixir — Phoenix LiveView

**API implementation concerns [Core]:** middleware pipeline ordering · validation at the boundary (Zod v4, Valibot, ArkType, TypeBox — Standard Schema interop) · serialization discipline (never leak ORM entities; DTOs) · **Problem Details RFC 9457** error format · error taxonomy (domain vs infra), error codes vs messages · idempotency keys on mutating endpoints (`Idempotency-Key` header) · **cursor vs offset pagination** (cursor for scale; keyset) · filtering/sorting conventions · bulk endpoints · optimistic concurrency (`ETag`/`If-Match`, version columns) · long-running ops: `202 Accepted` + polling or webhook callback · file upload (multipart, **tus resumable**, presigned direct-to-S3) · request size limits · **timeouts everywhere — no unbounded awaits** · config: 12-factor, env validation at boot (`@t3-oss/env-*` + Zod), feature flags

**Background work [Core]:** BullMQ (Redis), SQS, RabbitMQ, Cloudflare Queues · producer/consumer anatomy · retry with exponential backoff + jitter · delayed/scheduled/repeatable jobs · cron (node-cron, croner, Vercel Cron, Cloudflare Cron Triggers, EventBridge Scheduler) · job observability (queues depth, age, failure rate) · **at-least-once delivery + idempotent consumers = the practical "exactly-once"** · dead-letter queues

**Durable execution & messaging [Senior]:** **Temporal** (durable execution); TS-native: **Inngest, Trigger.dev**, Vercel Workflow DevKit, Cloudflare Workflows (step functions with retries/replay) · Kafka/NATS/Redis Streams/Pub/Sub (event streaming) · **outbox pattern** (DB → broker reliability), inbox/dedup table · saga: orchestration vs choreography · exactly-once myths, ordering keys, partitions

**Resilience [Senior]:** timeouts, bounded jittered retries, circuit breaker, bulkheads, load shedding, backpressure · rate limiting (token bucket, sliding window; Redis/Upstash) · `/healthz` liveness vs `/readyz` readiness · graceful shutdown + connection draining · **cursor pagination under writes**, retry budgets · degradation modes

**Email, notifications & files [Core]:** transactional email (Resend, Postmark, SendGrid, AWS SES) + React Email/MJML templates · **email deliverability: SPF, DKIM, DMARC, BIMI, bounce/complaint webhooks, suppression lists, dedicated IP warm-up, one-click unsubscribe (RFC 8058)** · SMS/WhatsApp (Twilio, Vonage, MSG91) [Situational] · in-app/push notification services (Novu, FCM, APNs) [Situational] · object storage patterns (S3/R2, presigned URLs, lifecycle rules, antivirus scan on upload, content-type sniffing defense) · image/video pipelines (sharp, libvips, Cloudflare Images, Mux) [Situational] · PDF/CSV import-export, streaming exports

**Multi-tenancy & domain features [Senior]:** tenancy models — shared schema + `tenant_id` + RLS vs schema-per-tenant vs database-per-tenant · noisy-neighbor controls, per-tenant rate limits and quotas · tenant-aware caching keys · organizations/teams/invitations/roles · audit logs (append-only, who/what/when/where) · soft delete vs hard delete vs retention · data residency · usage-based billing/metering · feature entitlements · webhooks as a product feature · API keys (hashed at rest, prefix + checksum, scoped, rotatable)


## Definition of done

- [ ] Every [Core] item above that applies to this change was checked.
- [ ] Every decision rule ("X → Y when Z", "when NOT") that applies was followed or the deviation is written down.
- [ ] No `[unverified]` claim was stated as fact in code comments, docs, or the PR description.
