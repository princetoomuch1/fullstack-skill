# Full-Stack Developer Keyword Master Reference — 2026

**Tier key:** **[Core]** non-negotiable baseline (high posting frequency or assumed knowledge) · **[Senior]** mid/senior expectation · **[Situational]** learn on demand for a specific stack or role.

**Scope:** every keyword a full-stack developer needs across frontend, backend, data, APIs, real-time, cloud/DevOps, observability, testing, security, architecture, performance, AI, tooling, compliance. **As of 1 November 2026.** Survey numbers carry their year; figures from the older drafts that could not be re-verified are tagged `[unverified — confirm source]`.

**Notation:** `·` separates items on a line · **bold** = highest-frequency ATS keyword · "X → Y when Z" = decision rule · "when NOT" = counter-rule.

---

## 1. Web Fundamentals

**Network & HTTP [Core]:** DNS record types (A, AAAA, CNAME, TXT, MX, NS, CAA), TTL, propagation · TCP handshake, **TLS 1.3** handshake, SNI, certificate chain · HTTP/1.1 vs **HTTP/2** multiplexing vs **HTTP/3** (QUIC/UDP) · keep-alive, connection reuse · compression (gzip, Brotli, Zstandard) · HTTP methods + idempotency/safety semantics · status codes used precisely: 200/201/202/204, 301 vs 302 vs 307 vs 308, 400/401/403/404/409/410/422/429, 500/502/503/504 · headers: Cache-Control (`max-age`, `s-maxage`, `no-store`, `no-cache`, `immutable`, `stale-while-revalidate`, `stale-if-error`), ETag + If-None-Match conditional requests, Last-Modified, Vary, Accept content negotiation, Retry-After, Sunset/Deprecation, Location, Range requests, Content-Disposition · cookies: HttpOnly, Secure, SameSite (Lax/Strict/None), `__Host-` prefix, partitioned cookies (CHIPS), Domain/Path scoping · CORS mechanics (preflight, credentials, `Vary: Origin`) · WebSocket upgrade handshake · CDN origin vs edge, anycast

**Browser rendering [Core]:** parse → DOM/CSSOM → render tree → layout → paint → composite · reflow vs repaint · critical rendering path · render-blocking resources · main thread vs compositor thread · event loop, microtasks vs macrotasks, `requestAnimationFrame`, `requestIdleCallback`, `scheduler.postTask`

**HTML [Core]:** semantic elements, landmarks, heading hierarchy · forms + Constraint Validation API · `<dialog>`, Popover API, `inert`, details/summary, template/slot · `<picture>`, `srcset`/`sizes`, `loading="lazy"`, `decoding="async"`, `fetchpriority` · meta/Open Graph/Twitter cards · `autocomplete` tokens, `inputmode`, `enterkeyhint`

**CSS [Core]:** cascade, specificity, `@layer` cascade layers · custom properties, `@property` · Flexbox, Grid + subgrid · container queries (`@container`, cqi/cqw units) · `:has()`, `:is()`/`:where()`, native nesting · `clamp()`/`min()`/`max()` · logical properties (`margin-inline`, `padding-block`) · oklch, `color-mix()`, `light-dark()`, `accent-color`, `aspect-ratio`, `text-wrap: balance/pretty` · `content-visibility`, `contain` · scroll-driven animations, View Transitions API, `@starting-style` · `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast`, `forced-colors` · **[Situational]** anchor positioning, `@scope`, `field-sizing`, `interpolate-size` — check Baseline status before use

**JavaScript ES2023+ [Core]:** closures, prototypes, `this` binding · iterators/generators, async iterators · `Promise.all/allSettled/any/race`, `Promise.withResolvers`, async/await · AbortController, `AbortSignal.timeout/any` · `structuredClone`, `Object.groupBy`, `Array.prototype.findLast/at/toSorted/toSpliced` · ES2025: iterator helpers, Set methods (`union`, `intersection`), `Promise.try`, `RegExp.escape` · ESM vs CJS interop, dynamic import, import attributes (JSON modules), `require(esm)` · debounce/throttle, event delegation, passive listeners · BroadcastChannel, MessageChannel · IntersectionObserver/ResizeObserver/MutationObserver · storage: localStorage/sessionStorage/cookies/IndexedDB/Cache API/Origin Private File System · **Intl API** (NumberFormat, DateTimeFormat, RelativeTimeFormat, PluralRules, ListFormat, Collator, Segmenter) — the i18n backbone · **Temporal API:** reached TC39 Stage 4 in March 2026 (ES2026) [1]; native in Chrome 144, Firefox 139, and unflagged in Node.js 26 [2][3]; Safari only in Technology Preview, MDN still lists it as Limited availability, so ship `@js-temporal/polyfill` for browser targets [3] — Date replacement with `PlainDate`, `ZonedDateTime`, `Instant`, `Duration` · fetch with streaming response bodies, FormData, URL/URLSearchParams, `URLPattern`, Clipboard, Notifications, Geolocation, Web Share, Wake Lock **[Situational]**

**Compatibility [Core]:** **web.dev Baseline** (Newly / Widely available) as the browser-support reference · feature detection (`@supports`, `CSS.supports`) over UA sniffing · progressive enhancement · browserslist · polyfill vs ponyfill decision · know the iOS rule: every iOS browser uses WebKit, so Safari support gates iPhone support [2]

**TypeScript [Core]:** TypeScript is the default, not a differentiator: 40% of State of JS 2025 respondents write only TypeScript, ~6% only plain JS `[unverified — confirm source]` [4][5] · Stack Overflow 2026 ranks TypeScript 6th among languages [6] · tsconfig strict suite (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax`) · generics + constraints · conditional/mapped types, template literal types, `infer` · discriminated unions, exhaustive `never` checks, narrowing (typeof/instanceof/in, user-defined guards, assertion functions) · `satisfies` · utility types, branded types · declaration files, `moduleResolution: bundler` · `erasableSyntaxOnly` era (const objects over enums, no parameter properties) — required for Node type stripping [7] · project references · type inference from Zod via **Standard Schema** · **TypeScript 7.0** (GA July 2026, native Go compiler, 8–12x faster full builds, `strict` on by default; TypeScript 6.0 was the bridge release) [8][9][10] · **when NOT to move to 7 yet:** Vue, Svelte, Astro, MDX and Angular template type-checking stay on TypeScript 6 until a stable programmatic API ships (7.1), and webpack loaders lack an API surface in 7.0 [10][8]

**[Situational]** Web Components (Custom Elements, Shadow DOM, declarative shadow DOM), Web Workers + Comlink, SharedWorker, WebAssembly (Figma/Photoshop-class workloads), SharedArrayBuffer + Atomics, WebGPU, WebTransport

---

## 2. Frontend

**Rendering vocabulary [Core]:** CSR, SSR, SSG, ISR, streaming SSR, **Partial Prerendering (PPR)**, islands architecture, resumability, hydration (partial/lazy/progressive), hydration mismatch, server components vs client boundaries — choose **per route**, not per app · edge rendering vs regional rendering · SPA vs MPA vs hybrid

**React 19 / 19.2 [Core]** (83.6% usage in State of JS 2025 [4]): Server Components (RSC payload), Server Actions/Functions (`"use server"`), `"use client"` boundary discipline · `use()`, `useOptimistic`, `useActionState`/`useFormStatus`, `useTransition`, `useDeferredValue` · React 19.2 additions: `useEffectEvent()`, `<Activity/>` [11] · Suspense boundaries, error boundaries, portals, context, `ref` as prop (forwardRef legacy), document metadata hoisting · **React Compiler v1.0** (stable October 2025, auto-memoization; Next.js 16 ships stable support [11]); manual `useMemo`/`useCallback` is now review-level knowledge, not default practice; eslint-plugin-react-hooks v6 flags compiler-incompatible code [12] · React Profiler / DevTools · **Security hygiene:** treat RSC/Server Function endpoints as public attack surface; **React2Shell (CVE-2025-55182, CVSS 10, unauthenticated RCE via Flight deserialization; Next.js CVE-2025-66478)**, disclosed 3 December 2025, patched in React 19.0.1/19.1.2/19.2.1 and listed in CISA KEV on 5 December [13][14] — pin and patch `react-server-dom-*` and Next.js promptly

**Next.js 16 App Router [Core]** (59% usage in State of JS 2025, most comments of any project, 21% positive / 17% negative [5]): file conventions (layout/template/page/loading/error/not-found/default), route handlers, parallel + intercepting routes, dynamic segments, async `params`/`searchParams` · metadata API (`generateMetadata`), next/image, next/font, next/script · **Cache Components model (Next.js 16, October 2025):** `cacheComponents: true`, the `"use cache"` directive (also `"use cache: private"`), `cacheLife()` profiles, `cacheTag()`, `revalidateTag(tag, profile)` (SWR semantics), `updateTag()` (read-your-writes in Server Actions), PPR as the underlying rendering model, `unstable_cache` replaced by `"use cache"` [11][15] · constraints: no `cookies()`/`headers()`/`searchParams` inside `"use cache"` (pass as arguments), Node.js runtime required for Cache Components, no static export [15] · **`proxy.ts` replaces `middleware.ts`** (Node.js runtime; `middleware.ts` kept only for Edge use cases and deprecated) [11] · Turbopack stable and default bundler, file-system caching, Next.js DevTools MCP [11] · **legacy codebases (Next 13–15):** know the older "four cache layers" (request memoization, data cache, full route cache, client router cache), `fetch` cache options, `export const dynamic/revalidate` — they are what you will meet in existing repos · draft mode, `instrumentation.ts` (OTel hook), `after()` for post-response work · **Sentiment anchor:** know when Astro or Vite + React is the honest answer [5]

**[Situational] alternatives:** TanStack Start (fastest write-in growth), React Router 7 framework mode, Astro (content sites, islands; 39pp satisfaction lead over Next.js [16]), Svelte 5 runes + SvelteKit, Vue 3 + Nuxt (Nitro), Angular (signals, zoneless, standalone), Solid (5-year satisfaction leader), Qwik, htmx/Alpine, **Inertia.js** (monolith + React/Vue on Laravel/Rails)

**Styling & UI foundation [Core]:** **Tailwind CSS v4** (CSS-first `@theme` config, Oxide engine, container-query variants) · design tokens, dark-mode strategy (class vs media), `cn()`/`clsx`/`tailwind-merge`, `cva` variants · **shadcn/ui:** copy-owned components via CLI; **Base UI became the default primitive layer for new projects in July 2026**, Radix stays fully supported (`npx shadcn init -b radix` keeps Radix), existing apps need no migration; Base UI reached stable 1.0 in December 2025 [17][18] · Radix UI (single `radix-ui` package since February 2026) / Base UI / Headless UI / Ark UI / React Aria primitives · CSS Modules · design systems, Figma variables → tokens handoff, Storybook · **[Situational]** Mantine, MUI, Ant Design (enterprise), Chakra, DaisyUI (CSS-only), vanilla-extract/Panda, Bootstrap/Sass (legacy) · **when NOT:** do not write "shadcn/ui (Radix)" by default any more — name the primitive layer (Base UI or Radix) because APIs differ (`asChild` vs `render`) [17]

**Component patterns [Core]:** composition over inheritance, compound components, render props, slots, controlled vs uncontrolled, polymorphic `as`/`asChild`, headless/unstyled, skeleton/empty/error/loading states, optimistic UI, error boundaries per region

**State — the taxonomy is the keyword [Core]** [19][12]:
- **Server state → TanStack Query:** queryKey discipline, invalidation, optimistic updates, infinite queries, dependent queries, prefetch-on-intent, hydration/dehydration with RSC, `select` (~80% of what Redux historically carried) [19]
- **Client state → Zustand** (overtook Redux in monthly downloads 2025→2026; no provider, selector-based re-renders, persist/devtools/immer middleware) [12] · Jotai (atoms, derived state) · XState (state machines for complex workflows) · Redux Toolkit = legacy/enterprise (still ~75.5% usage, declining; stay if invested) [12] · Recoil archived by Meta — migrate off [12]
- **URL state → nuqs** (typed query params as state), router-native search params
- **Form state → React Hook Form + zodResolver**; TanStack Form; Conform for progressive enhancement with Server Actions
- 34% of React devs use no state library — hooks + context are often enough [12]
- **Rule:** server state ≠ client state ≠ URL state ≠ form state; mixing them is the #1 architecture smell

**Data fetching [Core]:** fetch + AbortController · request deduping, waterfall avoidance (parallel fetch, prefetch, RSC colocation) · SWR · GraphQL clients (urql/Apollo; Relay situational) + graphql-codegen · REST codegen: **openapi-typescript, openapi-fetch, Orval, Kubb, Hey API** · Server Actions for mutations, route handlers for external clients

**UI library keywords (ATS-visible) [Core/Situational labels per item]:** **TanStack Table** [Core] (headless tables) · **AG Grid** [Situational] (enterprise data grids; frequent in enterprise postings) · Recharts/Tremor (dashboards), visx/D3 (custom viz), ECharts/Nivo [Situational] · **Tiptap/Lexical/Slate** [Situational] (rich text; ProseMirror under Tiptap) · **dnd-kit** · **cmdk** · sonner · react-day-picker · **TanStack Virtual** (list virtualization) · Embla/Swiper · React Aria · react-pdf / PDF generation (Puppeteer/Playwright print, `@react-pdf/renderer`) [Situational] · Leaflet/MapLibre/Mapbox (maps) [Situational]

**Animation [Situational]:** Motion (formerly Framer Motion), GSAP + ScrollTrigger, View Transitions, scroll-driven animations, Lottie/Rive, spring physics, FLIP, reduced-motion fallbacks

**Frontend performance [Core]:** budget discipline (~≤200KB gzip initial JS as a rule of thumb) · bundle analysis (@next/bundle-analyzer, rollup-plugin-visualizer, source-map-explorer), **size-limit in CI** · tree shaking + `sideEffects`, route/component code splitting, dynamic import, prefetch-on-intent · images (AVIF/WebP, srcset/sizes, LCP image priority, blur placeholder, image CDN) · fonts (subsetting, preload, `font-display: swap`, metric-matched fallbacks) · third-party script audit + facade pattern · resource hints (preconnect, dns-prefetch, preload, modulepreload, fetchpriority) · **Speculation Rules API** (prefetch/prerender), 103 Early Hints · service workers/Workbox · long-task and INP debugging (Long Animation Frames API, `scheduler.yield()`)

**Web Vitals [Core]:** LCP ≤ 2.5s · **INP ≤ 200ms** (replaced FID in March 2024) [20] · CLS ≤ 0.1 · TTFB ≤ 0.8s · web-vitals lib, Lighthouse CI, CrUX (field) vs lab data, RUM

**Accessibility [Core]:** **WCAG 2.2 AA** · **EAA — European Accessibility Act, enforceable since 28 June 2025: a legal requirement for EU-facing products and services** · EN 301 549 · ARIA + APG patterns (combobox, dialog, tabs, menu), focus management, focus-visible, skip links, `aria-live` regions, contrast 4.5:1 text / 3:1 UI, target size ≥ 24px (WCAG 2.2) · screen reader testing (NVDA, JAWS, VoiceOver, TalkBack) · eslint-plugin-jsx-a11y, axe-core, VPAT/ACR documentation [Situational]

**Technical SEO [Core]:** metadata API, Open Graph/Twitter cards, **JSON-LD structured data (schema.org)**, sitemap.xml, robots.txt, canonical URLs, hreflang, SSR/SSG for crawlability, redirect discipline, Core Web Vitals as ranking signal · **[Situational]** `llms.txt`, AI-crawler policy in robots.txt (GPTBot, ClaudeBot, Google-Extended), answer-engine optimization

**i18n/l10n [Core for product roles]:** next-intl, react-i18next, **Paraglide JS (inlang)**, Lingui, FormatJS · **ICU MessageFormat** (plurals/gender/select) · locale routing, locale negotiation (`Accept-Language`), RTL (`dir=rtl` + logical properties) · Intl API formatting · translation management (Crowdin, Lokalise), pseudo-localization

**PWA [Situational]:** manifest, install prompts, Workbox, offline fallback, background sync, Web Push (iOS requires installed PWA), share target

**[Situational]** Micro-frontends (Module Federation w/ webpack or **Rspack**, single-spa, import maps, Web Components interop) · browser extensions (WXT, Plasmo, Manifest V3) · Canvas/SVG/WebGL/WebGPU, Three.js/React Three Fiber · desktop (Tauri 2, Electron) · mobile-adjacent: React Native + Expo/EAS, NativeWind, Flutter/Dart, Capacitor — full-stack postings increasingly list React Native

---

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

---

## 4. Databases & Data Layer

**PostgreSQL [Core]** — 57.9% usage in Stack Overflow 2026, #1 database [6]; SQLite 42.1%, MySQL 35.1%, Redis 28.3%, SQL Server 27.1%, MariaDB 20.3%, MongoDB 19.0%, Elasticsearch 14.8% [6]: types (uuid, **timestamptz always**, jsonb, arrays, generated columns, enums vs lookup tables) · PostgreSQL 18 (native `uuidv7()`, async I/O) · normalization 1NF–3NF + deliberate denormalization · constraints (FK, CHECK, UNIQUE, EXCLUDE, NOT NULL discipline) · **indexes: B-tree, composite column order (leftmost prefix), partial, expression, covering (INCLUDE), GIN (jsonb/FTS), GiST, BRIN, pg_trgm fuzzy, HNSW/IVFFlat (vectors)** · **`EXPLAIN (ANALYZE, BUFFERS)`** reading · **`pg_stat_statements`** (slow-query source of truth) · N+1 detection/fixes (joins, IN-batching, DataLoader) · **transactions + isolation levels** (read committed / repeatable read / serializable; dirty, non-repeatable, phantom reads, write skew) · locking: optimistic version columns vs `SELECT ... FOR UPDATE [SKIP LOCKED]`, advisory locks, deadlock + serialization-failure retries · CTEs, window functions, `LATERAL`, `UPSERT` (`ON CONFLICT`) · full-text search (tsvector/tsquery) · LISTEN/NOTIFY · partitioning (range/list/hash) · materialized views · **Row-Level Security (RLS) — the multi-tenancy primitive** · logical replication + CDC (Debezium situational) · connection pooling (PgBouncer, RDS Proxy, pool-size math) · **PITR backups + restore drills** · autovacuum/bloat awareness, `VACUUM`, `ANALYZE` · extensions: pgvector, PostGIS, pg_cron, pg_trgm, pg_partman

**Scaling [Senior]:** read replicas + replication lag handling · Citus sharding · connection ceiling math · queue-based write smoothing · hot-row contention · online schema change tools · caching in front of reads · zero-downtime failover/HA (Patroni, managed multi-AZ)

**Data modeling hygiene [Core]:** ID strategy (UUIDv7/ULID vs bigserial vs UUIDv4 index-bloat tradeoff) · **money as integer minor units or `numeric`, never float** · UTC storage + IANA time zone name for user-facing time · soft delete columns + partial unique indexes · created_at/updated_at triggers · idempotency/unique business keys · enums evolution · JSONB vs relational columns decision · audit/history tables

**Redis [Core]** (28.3% usage in Stack Overflow 2026, #4 database [6]): data structures (hashes, sorted sets, streams, HyperLogLog) · cache-aside, write-through, session store, rate limiter patterns, pub/sub · distributed locks (`SET NX PX` + fencing token; know the Redlock debate) · eviction (allkeys-lru), TTL discipline, hot keys, big keys, cache stampede protection · persistence (RDB/AOF) tradeoffs · **[Situational]** Upstash (serverless), Valkey (open fork), Dragonfly

**MongoDB [Core]:** embed vs reference, schema validation, aggregation pipeline, indexes, change streams, transactions · 19.0% usage in Stack Overflow 2026 (7th) [6]; Postgres + JSONB absorbs many document use cases, but MongoDB remains a MERN staple in postings → learn it when the posting says MERN; default to Postgres otherwise

**ORM/query layer [Core]:** **Drizzle** (TS-first schema, SQL-like API, ~7.4KB gzip, zero dependencies, edge-native; now ahead of Prisma in weekly npm downloads — sources disagree on the crossover date and exact figures, but all agree on the direction [27][28]; still pre-1.0 numbering at 0.45.x with a 1.0 RC track as of October 2026 [27] · **hazard: in strict/interactive modes a renamed column can be generated as drop+add = data loss; always read generated SQL** `[unverified — confirm source]`) · **Prisma** (Prisma 7: pure-TypeScript client, Rust engine removed, ~1.6MB bundle, edge support `[unverified — confirm source]`; Prisma 8 is a release candidate and the npm `latest` tag pointed at `8.0.0-rc.23` on 19 October 2026, so pin to the last stable 7.x in production [27]; schema-first `.prisma`, `prisma generate`, Prisma Migrate, Prisma Studio) · Kysely (typed SQL builder) · TypeORM (legacy/NestJS, 1.1.x line [27]) / Sequelize (legacy) · SQLAlchemy 2 + Alembic (Python) · sqlc (Go) · **decision rule:** Drizzle → edge/serverless, SQL-literate teams, small bundles; Prisma → teams that prioritize DX and a polished migrate/Studio workflow and do not need the smallest bundle; raw SQL/Kysely → complex reporting queries

**Migration discipline [Core]:** versioned files, **never `db push` in prod**, review generated SQL, **expand-and-contract (zero-downtime) migrations**, backward-compatible deploys, lock-aware DDL (`CREATE INDEX CONCURRENTLY`, `NOT VALID` constraints then `VALIDATE`), staging rehearsal at prod volume, roll-forward preference, seed vs fixture data, schema drift detection

**Vector/AI data [Senior]:** **pgvector** (HNSW), Pinecone, Qdrant, Weaviate, Chroma, Turbopuffer · hybrid search (vector + FTS/BM25), reranking, metadata filtering · embedding model versioning + re-embed plan · when NOT: below ~1M vectors, pgvector in your existing Postgres is usually enough

**Search [Situational]:** Postgres FTS, **ParadeDB pg_search**, Meilisearch, Typesense, Algolia, Elasticsearch/OpenSearch · relevance concepts (typo tolerance, faceting, synonyms, BM25, analyzers)

**Analytics & warehouse [Situational]:** ClickHouse, **DuckDB** (local analytics), BigQuery, Snowflake, TimescaleDB, dbt, ETL/ELT (Airbyte, Fivetran), event pipelines (Segment, RudderStack), OLTP vs OLAP separation

**[Situational]** MySQL/PlanetScale (Vitess), SQLite + Turso/libSQL (edge), Cloudflare D1, DynamoDB (single-table design), CockroachDB, Neon (branching, scale-to-zero), PostGIS (geospatial), graph (Neo4j), serverless Postgres cold-start behavior

**Data governance [Senior]:** backups + tested restores (RPO/RTO) · encryption at rest/in transit, column-level encryption for PII · data retention + deletion jobs (GDPR erasure) · PII tagging, masking in non-prod · least-privilege DB roles, no superuser from the app · secrets rotation

---

## 5. APIs & Integration

**REST [Core]:** used by 85% of organizations `[unverified — confirm source]` · resource modeling, URL structure, HTTP methods, status codes, versioning (URL, header, query param), pagination (cursor vs offset), HATEOAS awareness, conditional requests, partial responses, rate-limit headers (`RateLimit-*`, `Retry-After`)

**GraphQL [Core]:** schema design, type system, resolvers, N+1 problem and DataLoader, subscriptions, persisted queries, depth/complexity limiting, Apollo Server/Client, Yoga, federation awareness · **when NOT:** simple CRUD with one client → REST or tRPC is cheaper

**tRPC [Core]:** end-to-end type safety in TypeScript monorepos — the types ARE the API contract, no code generation, Zod input validation · **when NOT:** public APIs or non-TS clients → OpenAPI

**OpenAPI/Swagger [Core]:** OpenAPI 3.1, JSON Schema, API documentation (Scalar, Redoc, Swagger UI), contract-first development, codegen from spec (openapi-typescript, Orval, Kubb, Hey API), linting (Spectral), breaking-change detection (oasdiff)

**Webhooks [Core]:** inbound (Stripe, GitHub) and outbound (event delivery) · **signature verification (HMAC, timing-safe compare, raw body)**, timestamp tolerance/replay protection, retry with backoff, idempotency/dedup by event ID, return 2xx fast and process async, dead-letter + replay UI

**Third-party integration [Core]:**
- **Payments:** **Stripe** (PaymentIntents, Checkout Sessions, webhooks, idempotency keys, subscriptions/Billing, customer portal, Connect for marketplaces, Radar, tax) · PayPal, Adyen · **[Situational] India/regional:** Razorpay, Cashfree, PayU, UPI flows, Paddle/Lemon Squeezy (merchant of record)
- **Auth providers:** Clerk, **Better Auth** (TypeScript-native; the team now maintains Auth.js and recommends Better Auth for new projects, with stateless DB-less sessions being the main gap [29]), Auth.js v5/NextAuth (maintenance/security fixes only [29]), Auth0, WorkOS (SSO/SCIM), Supabase Auth, Firebase Auth, Keycloak (self-hosted), Lucia (deprecated → sessions guide)
- **Email:** Resend, SendGrid, AWS SES, Postmark
- **File storage:** S3, Cloudflare R2, presigned URLs, multipart upload
- **OAuth flows:** Google sign-in, GitHub sign-in, social auth integration
- **Headless CMS [Situational]:** Sanity, Strapi, Payload (Next.js-native), Contentful, Directus, Storyblok · preview mode/draft content, webhooks → revalidation, structured content modeling
- **Other [Situational]:** Algolia/Meilisearch (search), Twilio (SMS/voice), Mapbox/Google Maps, Segment/PostHog (events), Slack/Discord bots, calendar APIs (Google Calendar, Cal.com), e-signature, KYC providers

**Senior API topics [Senior]:** API gateway patterns (Kong, AWS API Gateway, Cloudflare), rate limiting strategies, contract testing (Pact), API monetization, developer experience (DX) for public APIs, SDK generation (Stainless, Speakeasy, Fern), API deprecation policy (`Sunset` header), BFF (backend-for-frontend) pattern, idempotent retries across services

**[Situational]** gRPC (internal service-to-service, Protocol Buffers, Connect-RPC), SOAP (legacy enterprise), WebSub, oRPC, AsyncAPI (event-driven contracts), JSON:API, OData

---

## 6. Real-Time, Async & Local-First

A distinct skill cluster — not just "WebSockets."

**WebSockets [Core]:** Socket.IO (rooms, namespaces, middleware, acknowledgements), `ws` library, connection lifecycle, heartbeat/ping-pong, authentication over sockets (token in first message or cookie; never in URL), authorization per message · alternatives: Pusher/Ably/PartyKit/Cloudflare Durable Objects for managed fan-out

**Server-Sent Events (SSE) [Core]:** server→client streaming, `EventSource` API, reconnection with `Last-Event-ID`, `text/event-stream`, proxy buffering pitfalls (disable response buffering) · **SSE is the standard transport for streaming LLM responses** — every AI chat UI streams tokens this way; the Vercel AI SDK `useChat` consumes it

**Long polling [Core]:** when WebSockets are blocked (corporate proxies, serverless)

**Real-time concerns [Core]:** reconnection handling (exponential backoff + jitter), message ordering, delivery guarantees (at-most/at-least-once), backpressure, presence (online/offline status), fan-out, scaling WebSocket servers (Redis adapter, sticky sessions, pub/sub backplane), serverless limits on long-lived connections

**[Situational]** WebRTC (peer-to-peer media, data channels, STUN/TURN, SFU such as LiveKit), WebTransport, push notifications (Web Push API, service workers, FCM/APNs)

**Local-first sync engines [Senior for product roles]:** **ElectricSQL** (Postgres-native read-path sync, shapes, PGlite, CDN-cacheable, Apache 2.0) [30] · **Zero** (Rocicorp; query-driven sync, zero-cache, ZQL, server-authoritative, Postgres logical replication; **reached 1.0 in June 2026** — a near-symbolic bump from 0.26.2 with no breaking changes; SSR still on the roadmap) [31] · **PowerSync** (mobile-first, sync rules, SQLite on device) [30] · **LiveStore** (event-log sync, pre-v1) [30] · **TanStack DB** (client-side reactive collections, differential dataflow, pluggable sync backends, beta) [32] · **CRDTs:** Automerge, Yjs (collaborative editing), cr-sqlite [33] · **when to use:** Linear/Figma-class instant UX, offline-first mobile, collaborative editing, partial sync over large datasets · **when NOT:** simple CRUD → TanStack Query is enough [32] · specifics such as latency numbers and pricing from the older drafts are `[unverified — confirm source]`

---

## 7. Cloud, DevOps & Deployment

Core full-stack scope in 2026, not an optional extra [16].

**Source control & delivery [Core]:**
- **Git:** branching strategies (trunk-based, GitFlow), rebase vs merge, squash, cherry-pick, bisect, reflog, conflict resolution, conventional commits, PR workflows, CODEOWNERS, branch protection, signed commits, semantic versioning, changesets/semantic-release
- **CI/CD — GitHub Actions** (dominant CI; 62% personal / 41% org usage `[unverified — confirm source]`): lint → typecheck → test → build → deploy pipelines, matrix builds, caching, reusable workflows, secrets management, environment protection rules, preview deployments, environment promotion (dev → staging → prod), concurrency groups, path filters, artifact attestation · **harden the pipeline:** pin third-party Actions to a commit SHA, least-privilege `permissions:`, avoid `pull_request_target` with untrusted code, **OIDC federation to cloud (no long-lived cloud keys in CI)** — the Mini Shai-Hulud payloads harvest GitHub tokens, npm tokens and cloud credentials from CI and developer machines [34][35] · GitLab CI, CircleCI [Situational]

**Containers [Core]:** **Docker** — 71.1% usage in Stack Overflow 2025, largest single-year jump (+17pp) of any technology that year `[unverified — confirm source]` [25][36] · multi-stage builds, Docker Compose, image optimization (layer caching, `.dockerignore`, alpine/slim/distroless bases, BuildKit cache mounts), non-root user, read-only root filesystem, healthchecks, pin base image digests, container registries (Docker Hub, ECR, GHCR, Artifact Registry), image scanning (Trivy, Grype) · Dev Containers

**Deployment targets [Core]:**
- **Vercel:** Next.js native, preview deployments, edge/Fluid compute functions, analytics, AI Gateway (10.6% cloud-platform usage in SO 2025) `[unverified — confirm source]`
- **Netlify**, **Railway**, **Render**, **Fly.io** (global machines), Cloud Run, Azure Container Apps
- **Cloudflare Workers/Pages:** edge compute on V8 isolates, near-zero cold starts, D1 (SQLite), KV, R2, Durable Objects, Queues, Workflows, Hyperdrive (20.1% platform usage in SO 2025) `[unverified — confirm source]`
- **AWS basics** (43.3% in SO 2025 `[unverified — confirm source]`): EC2, S3, Lambda, RDS/Aurora, ECS/Fargate, CloudFront, IAM, Route 53, SQS/SNS, EventBridge, Secrets Manager, VPC basics (public/private subnets, security groups, NAT)
- **Serverless vs container vs VM decision:** serverless → spiky traffic, event handlers, small teams; containers → steady load, long-lived connections, predictable cost; VMs → legacy/stateful or GPU

**Ops fundamentals [Core]:** Linux/terminal (bash, ssh, process management, systemd, journalctl, `curl`, `jq`, `lsof`, `dig`) · environment variables (type-safe validation with `@t3-oss/env-*` + Zod) · secrets management (Doppler, AWS Secrets Manager, Vault, SOPS, 1Password; never commit `.env`) · TLS/HTTPS (Let's Encrypt, ACME, certificate renewal), DNS configuration, CDN + WAF + DDoS protection (Cloudflare, CloudFront), reverse proxy (Nginx, Caddy, Traefik) · rollback strategy · backups and restore drills

**Infrastructure & scale [Senior]:**
- **Kubernetes** (28.5% usage in SO 2025 `[unverified — confirm source]`): pods, deployments, services, ingress/Gateway API, Helm, HPA, probes, resource requests/limits, namespaces, RBAC, managed offerings (EKS/GKE/AKS) · **when NOT:** small team, few services → managed container platform is cheaper to operate
- **Infrastructure as Code:** **Terraform** (17.8% in SO 2025 `[unverified — confirm source]`) / OpenTofu, Pulumi, AWS CDK, SST — declarative state, remote state + locking, modules, drift detection, plan-in-PR/apply-on-merge · **GitOps:** Argo CD, Flux
- **Release strategies:** feature flags (LaunchDarkly, Flagsmith, GrowthBook, OpenFeature, Vercel Flags SDK, simple DB flags), canary, blue-green, progressive delivery, dark launches, kill switches, database-compatible rollbacks
- **Cost-aware architecture (FinOps):** right-sizing, spot instances, serverless vs container cost tradeoffs, egress costs, budgets + alerts, tagging, cost per tenant/request
- **Multi-environment strategy:** dev, staging, production parity, ephemeral preview environments, branch databases (Neon/PlanetScale branching), seed data
- **Reliability:** multi-AZ, multi-region failover, RTO/RPO, disaster-recovery runbooks, load testing before launch, capacity planning
- **Platform engineering awareness** [Senior for platform roles]: Backstage (CNCF; reported ~89% IDP market share, 3,400+ adopters), Port, Cortex, OpsLevel, Humanitec · service catalogs, golden paths, scorecards, self-service provisioning · DORA metrics (deployment frequency, lead time, change failure rate, MTTR) · reported 94% of orgs adopting or planning platform teams `[unverified — confirm source]` [37][38][39] · **caveat:** Backstage demands React/TypeScript expertise, 6–12 months to stand up, ~10% internal adoption outside Spotify `[unverified — confirm source]` [38] → managed (Roadie, Port) beats DIY for small platform teams

**[Situational]** Azure (26.3% in SO 2025 `[unverified — confirm source]`), GCP (24.6%), Firebase, DigitalOcean/Hetzner, Nix, Packer, Ansible, service mesh (Istio, Linkerd), Vagrant/Colima

---

## 8. Observability & Monitoring

Once code ships, "what is breaking for real users right now?" is the only question that matters.

**Baseline [Core]:**
- **Sentry:** error monitoring with stack traces, source-map upload, release tracking, **session replay** (privacy masking), breadcrumbs, performance tracing, suspect commits, alert rules, ~3.2M weekly npm downloads `[unverified — confirm source]` [40]
- **Structured logging:** Pino (Node.js JSON logger), Winston, JSON log format, **correlation/request IDs via AsyncLocalStorage**, log levels (debug/info/warn/error/fatal), log aggregation, **PII scrubbing in logs**, no secrets in logs
- **Uptime monitoring:** Better Stack, UptimeRobot, Checkly (synthetic checks), status pages
- **Health endpoints:** `/healthz`, `/readyz`, dependency checks

**Instrumentation & operations [Senior]:**
- **OpenTelemetry (OTel):** vendor-neutral standard, CNCF · instrument once, export anywhere (Jaeger, Tempo, Datadog, Honeycomb, Grafana Cloud) · traces, metrics, logs · auto-instrumentation (Express, Fastify, Hono, PostgreSQL, Redis, fetch, HTTP) · manual spans for business logic · **W3C Trace Context** (`traceparent`, `tracestate`, `baggage`) propagation · OTel Collector, OTLP · sampling (head-based, tail-based) · cardinality control · semantic conventions · **GenAI semantic conventions for LLM calls** · ~4.8M weekly downloads `[unverified — confirm source]` [40] · Next.js `instrumentation.ts` hook [11] · MCP 2026-07-28 standardizes trace-context keys in `_meta` [41]
- **Real-user monitoring (RUM):** Core Web Vitals from actual users (CrUX, web-vitals, Vercel Speed Insights, Datadog RUM), not lab tests
- **Dashboards & alerting:** Grafana, Datadog, Prometheus metrics (RED and USE methods, histograms, p95/p99), **SLIs/SLOs/error budgets**, burn-rate alerts, alert fatigue hygiene, on-call rotation, PagerDuty/Opsgenie, runbooks
- **Distributed tracing:** context propagation across services and queues, span attributes, error tracking in traces
- **Incident response:** severity levels, incident commander, blameless postmortems, status communication

**[Situational]** Product analytics (PostHog, Mixpanel, Amplitude), log aggregation (Loki, Elasticsearch/OpenSearch), continuous profiling (Pyroscope), APM suites (New Relic, Dynatrace), feature-flag + experiment platforms, LLM observability (§13), cost observability

---

## 9. Testing & Quality Assurance

The 2026 JavaScript testing stack consolidated around Vitest, Playwright, and MSW.

**Unit & integration [Core]:**
- **Vitest 4** (October 2025): Jest-compatible API, ESM-native, Vite-fast, TypeScript-first; **Browser Mode stable** (real browser via `@vitest/browser-playwright`/`-webdriverio`/`-preview` providers), **built-in visual regression (`toMatchScreenshot`)**, Playwright trace generation, `expect.schemaMatching` for Standard Schema validators; weekly downloads grew from 7M to 17M in a year [42][43] · Largest relative usage increase in State of JS 2025 (+14pp, tied with Playwright) `[unverified — confirm source]` [4]
- **Testing Library** (`@testing-library/react`, `user-event`) — test behavior via roles, not implementation; mocking (`vi.mock`, `vi.fn`, `vi.spyOn`, fake timers); snapshot testing used sparingly; coverage (`vitest --coverage`, v8/istanbul) with thresholds
- **Jest** (legacy/React Native), node:test (built-in)

**End-to-end [Core]:**
- **Playwright:** the default for new projects — ~33–35M weekly npm downloads in early 2026 versus Cypress ~5–6.5M and selenium-webdriver ~1.7M [44]; the `playwright` package was reported near 52M weekly by May 2026 [45] (figures vary by snapshot and by which package is counted) · auto-waiting and web-first assertions, multi-browser (Chromium, Firefox, WebKit), **trace viewer**, native parallelization and sharding (free), multi-language (JS/TS, Python, Java, .NET), device emulation, `APIRequestContext` for API + UI hybrid tests, `storageState` auth reuse, Page Object / fixtures, codegen, component testing (experimental) · reported 94% retention and 92% vs 72% stability vs Selenium `[unverified — confirm source]` [46]
- **Network mocking — MSW (Mock Service Worker):** intercepts at the network level; one handler layer shared across unit tests (Vitest), E2E (Playwright), Storybook, and dev; scenario-based mocking

**Quality gates [Core]:** ESLint flat config + typescript-eslint (or **Oxlint**, Rust-based, reported 50–100x faster `[unverified — confirm source]` [47]) · Prettier (or **Oxfmt**, Biome) · TypeScript strict mode in CI (`tsc --noEmit`) · code coverage thresholds (meaningful, not 100%) · Husky pre-commit hooks, lint-staged, commitlint · unused-code detection (knip), dependency boundaries (dependency-cruiser) · size-limit · PR required checks

**Practices [Core]:** test pyramid vs trophy · test naming and Arrange-Act-Assert · deterministic tests (no real time, network, randomness) · test data factories and fixtures · isolation (no shared state) · flaky-test handling (retries only with trace capture, quarantine, root-cause) · TDD/BDD where it pays · exploratory testing, bug reproduction before fix

**[Situational]**
- Cypress: valid for existing suites (mature component testing, time-travel debugging); not the default for new projects [44][46]
- Selenium (+ Appium for native mobile): enterprise legacy, multi-language [46]
- pytest (Python), JUnit/TestNG (Java), xUnit (.NET), **Testcontainers** (real Postgres/Redis in Docker for integration tests)
- Storybook interaction tests + test runner (Vitest integration), Chromatic/Percy visual review
- Mutation testing (Stryker), property-based testing (fast-check, Hypothesis), fuzzing
- LLM evals (promptfoo, Braintrust, LangSmith datasets) → §13

**[Senior]**
- Testing strategy: smoke suite per PR, full regression nightly, sharded CI, trace-on-first-retry, test impact analysis, environment parity
- Contract testing (Pact, schema-based), consumer-driven contracts
- Visual regression testing (Chromatic, Percy, Playwright screenshots, Vitest `toMatchScreenshot`) [42]
- Accessibility testing automation (axe-core with Playwright/Vitest browser mode; manual screen-reader passes)
- Load, stress, soak, spike testing: k6 (Grafana), Locust, Artillery, Gatling — latency/throughput budgets (p50/p95/p99), error rate thresholds
- Security testing in CI: SAST (CodeQL, Semgrep), DAST (OWASP ZAP), SCA, secrets scanning (gitleaks, TruffleHog) → §10
- Chaos/resilience testing, game days, disaster-recovery drills
- Performance regression gates: Lighthouse CI, bundle-size budgets, DB query-plan checks

---

## 10. Security

Security moved into implementation, not post-deployment review. Average data-breach cost reached $4.44M in 2025 `[unverified — confirm source]` [16].

**OWASP Top 10:2025 [Core]** (announced November 2025 at Global AppSec, final release January 2026; 248 CWEs across the ten categories) [48][49]:
A01 **Broken Access Control** (SSRF folded in) · A02 **Security Misconfiguration** · A03 **Software Supply Chain Failures** (new) · A04 **Cryptographic Failures** · A05 **Injection** (SQLi, XSS, command, NoSQL, template) · A06 **Insecure Design** · A07 **Authentication Failures** · A08 **Software or Data Integrity Failures** · A09 **Logging & Alerting Failures** · A10 **Mishandling of Exceptional Conditions** (new; improper error handling, fail-open) [48][50][49] · the 2021 list is what older postings still cite — know both labels

**Authentication [Core]:** password hashing (**argon2id**, **bcrypt**, scrypt; never MD5/SHA alone), JWT lifecycle (signing, `alg` pinning, verification, expiration, refresh rotation + reuse detection), OAuth 2.0 / OIDC flows (authorization code + **PKCE**; OAuth 2.1 direction), session management (server-side sessions, `__Host-` cookies, rotation on privilege change, idle + absolute timeouts), MFA (TOTP, WebAuthn; SMS is weakest), **Passkeys/WebAuthn** (FIDO2, phishing-resistant, platform authenticators — standard practice), account recovery hardening, credential-stuffing defense (rate limits, breached-password check), SSO (SAML, OIDC), SCIM provisioning [Situational], magic links

**Authorization [Core]:** RBAC (role-based access control), permission checks enforced server-side on **every** endpoint and Server Action, least privilege, object-level checks (**BOLA/IDOR**), ABAC awareness, ReBAC (OpenFGA, SpiceDB, Zanzibar-style) and policy engines (OPA, Cedar) [Senior], tenant isolation checks, deny by default

**Web & API threats [Core]:** XSS (stored, reflected, DOM-based — output encoding, CSP with nonces/`strict-dynamic`, Trusted Types) · CSRF (SameSite cookies, CSRF tokens, double-submit, Origin checks on Server Actions) · SQL injection (parameterized queries, prepared statements — never string concatenation) · SSRF (validate URLs, block internal/metadata IPs, egress allowlists) · unsafe deserialization (**React2Shell is the 2025 case study** [13][14]) · path traversal, open redirect, clickjacking (`frame-ancestors`), prototype pollution, ReDoS, mass assignment, file-upload risks (type sniffing, size limits, AV scan, storage outside web root), XXE · **OWASP API Security Top 10 (2023):** BOLA, broken authentication, BOPLA, unrestricted resource consumption, BFLA, unrestricted access to sensitive business flows, SSRF, security misconfiguration, improper inventory management, unsafe consumption of APIs

**Input & transport [Core]:** server-side validation on every input (Zod, Joi, class-validator), output encoding, sanitization (DOMPurify) · CORS (allowed origins, credentials, preflight) · security headers: CSP, HSTS (+ preload), X-Content-Type-Options, Referrer-Policy, Permissions-Policy, COOP/COEP/CORP, Subresource Integrity · TLS everywhere, secure cookie attributes · rate limiting / abuse prevention

**Secrets & data protection [Core]:** no secrets in code or client bundles (`NEXT_PUBLIC_*` is public) · rotation policies, vault management, short-lived credentials · encryption at rest/in transit, field-level encryption for PII, KMS · secrets scanning pre-commit and in CI

**Software supply chain — a Core competency after the 2025–2026 npm worm waves [Core]:**
- **Timeline:** Shai-Hulud worm (September 2025, 500+ packages) and Shai-Hulud 2.0 (November 2025, ~800 packages) `[unverified — confirm source]` [51][52][53] · **Mini Shai-Hulud (TeamPCP), May 2026:** 11–12 May wave hit 160–172 npm/PyPI packages including @tanstack/react-router (~12M weekly downloads), Mistral, UiPath and Guardrails AI, and was the first npm worm to ship **validly attested** malicious packages — provenance alone does not prove safety [35] · 19 May wave compromised the `atool` maintainer account (314 of 547 packages, 637 malicious versions in under an hour, ~16M weekly downloads) [34] · campaign total to date: 1,055 compromised versions across 502 packages on npm, PyPI and Composer [54]
- **Mechanism:** malicious `preinstall`/`postinstall`/`prepare` hooks steal npm tokens, GitHub PATs and cloud credentials, then republish through the victim's packages [34][54]
- **Practices:** disable install scripts by default (`ignore-scripts=true`; pnpm 10+ blocks dependency build scripts unless allowlisted via `onlyBuiltDependencies`) · `npm ci`/frozen lockfile in CI, never `npm install` · lockfile review and lockfile-lint · **dependency cooldown** (pnpm `minimumReleaseAge`, Renovate `minimumReleaseAge`, Dependabot cooldown: wait 7–14 days before adopting new versions) · pin exact versions for critical deps · npm 2FA with WebAuthn, **trusted publishing (OIDC)** with scoped tokens, provenance attestations (necessary, not sufficient) · SBOM generation (CycloneDX/SPDX; Syft) · real-time blocking (Socket, Snyk, Aikido, npq pre-install audit) · dev containers / sandboxing for untrusted installs · rotate every credential reachable from an affected machine [55][56]
- **Regulation:** EU Cyber Resilience Act — vulnerability and incident reporting obligations apply from **11 September 2026** (early warning within 24 hours, fuller notification within 72 hours), main obligations including SBOM-backed technical documentation from 11 December 2027 [57][58]

**Operational security [Senior]:** threat modeling (STRIDE), security review in PR, dependency risk (`npm audit`, Snyk, Dependabot, Renovate), SAST/DAST/SCA in CI, container and IaC scanning (Trivy, Checkov), WAF + bot management, CAPTCHA/Turnstile, audit logging, incident response plan, vulnerability disclosure policy (security.txt), penetration test remediation, CIS benchmarks

**AI-specific security [Senior]:** OWASP Top 10 for LLM Applications 2025 (prompt injection ranked first, then sensitive information disclosure, then supply chain) [59] · prompt-injection defense, tool permission boundaries, output validation, secrets isolation from model context, MCP server auth (OAuth 2.1 + PKCE) → §13

**[Situational]** Zero Trust architecture, compliance frameworks (GDPR, SOC 2, ISO 27001, HIPAA, PCI-DSS 4.0, India DPDP Act depending on market) → §17, penetration testing, bug bounty, HSM/KMS key management, mTLS

---

## 11. Architecture & System Design

**Foundations [Core]:**
- **Monolith vs microservices:** start with a **modular monolith**; extract services only when team size, deploy cadence or scaling profile demands it
- **Layered architecture:** presentation → application/service → domain → infrastructure; separation of concerns; ports and adapters at the edges
- **SOLID principles:** Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
- **Design patterns:** MVC, service layer, repository pattern, dependency injection, factory, observer, strategy, middleware/chain-of-responsibility, adapter, unit of work
- **Monorepos:** **pnpm workspaces + Turborepo** (standard for multi-package JS/TS), Nx (full-framework alternative), task orchestration, remote caching, affected-only builds, shared config packages, internal packages vs published packages
- **Clean code:** naming, function length, single level of abstraction, DRY (not dogmatic), KISS, YAGNI, feature-folder structure, colocation
- **12-factor app:** config in env, stateless processes, disposable processes, dev/prod parity, logs as streams

**System design [Senior]:** load balancing (L4 vs L7), caching strategies (multi-level), database schema design for scale, CAP theorem, PACELC, consistency models (strong, eventual, read-your-writes), event-driven architecture, message queues, pub/sub, API gateway, CQRS (awareness), event sourcing (awareness), idempotency everywhere, ADRs (architecture decision records), RFCs, capacity estimation (QPS, storage, bandwidth), SLAs/SLOs, failure-mode analysis · scalability patterns: horizontal vs vertical scaling, statelessness, sharding/partitioning, read replicas, CDN strategy, rate limiting, back-of-envelope math · multi-tenancy models (§3) · BFF, strangler-fig migration, anti-corruption layer, feature toggles for migration

**[Situational]** Micro-frontends, server-driven UI, composable/headless architecture, domain-driven design (bounded contexts, aggregates, ubiquitous language), hexagonal architecture, event storming, serverless architectures, multi-region active-active, cell-based architecture

---

## 12. Performance Optimization

**Frontend [Core]:** Core Web Vitals budgets (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1) [20], bundle analysis, code splitting (route-based, component-based), lazy loading (images, components, routes), image optimization (AVIF/WebP, responsive `srcset`, CDN), font loading strategy (`font-display: swap`, preload critical fonts, subset fonts), service workers, prefetch/prerender (Speculation Rules), avoiding layout shift (reserved dimensions), reducing main-thread work (web workers, `scheduler.yield()`), minimizing third-party JavaScript

**Backend [Core]:** database query optimization (indexes, query rewriting, N+1 elimination), connection pooling, response caching (HTTP caching headers: `Cache-Control`, `ETag`, `Last-Modified`), compression, pagination, background processing for slow operations (do not make users wait for emails, PDF generation, image processing), streaming responses, avoiding synchronous CPU work on the event loop

**Caching strategy [Core]:** multi-level — browser cache → CDN/edge cache → application cache (Redis) → database cache. TTLs, cache invalidation (the hard problem), tag-based invalidation (`cacheTag`/`revalidateTag` in Next.js 16 [11]), stale-while-revalidate, stampede protection, cache warming, cache keys per tenant/locale/auth state

**CDN & network [Senior]:** edge caching, cache purging, geographic distribution, HTTP/2 multiplexing, HTTP/3 (QUIC) benefits, Early Hints, connection coalescing, TLS session resumption

**Measurement [Senior]:** application profiling (Chrome DevTools Performance panel, Node `--cpu-prof`, flame graphs), load testing with latency/throughput budgets (p50, p95, p99, RPS capacity), tail-latency analysis, RUM vs synthetic, Lighthouse CI, performance budgets enforced in CI, query plan review (`EXPLAIN ANALYZE`)

**[Situational]** sustainable web practices (ship less JavaScript, reduce unused code, carbon-aware hosting), WebAssembly hot paths, SQLite-at-edge latency design, GPU/worker offloading

---

## 13. AI Integration & Agentic Development

AI fluency is baseline, not emerging. In Stack Overflow 2026, only 17.2% of respondents do not use AI tools; 73% of those using AI coding assistants or agents use them daily; 62% view AI at least somewhat positively; but nearly half trust output only when they can verify it and just 6.6% trust it for important decisions [60][61]. Claude Code (66%) and GitHub Copilot (59%) are the most-used agents among agent users [60][26]. Stack Overflow 2025 data points still cited in postings: 84% used or planned to use AI tools, 51% of professionals daily, 66% said output is "almost right but not quite" `[unverified — confirm source]` [36]. Job postings increasingly require proof of building AI features `[unverified — confirm source]` [62].

**AI-assisted development [Core]:** Copilot, Cursor, **Claude Code**, Codex, Windsurf, ChatGPT, v0 · prompt engineering for code generation, refactoring, review, test writing, documentation · context engineering · **the critical skill: reviewing, verifying and owning AI-generated code** — treat AI output as a draft, not a deliverable; run it, test it, read the diff · **agent instruction files:** `AGENTS.md` (plain Markdown, no schema, closest file to the edited file wins; stewarded by the Agentic AI Foundation under the Linux Foundation since December 2025, alongside MCP) [63][64], `CLAUDE.md`, Cursor rules · reusable agent skills (`SKILL.md` packages) · spec-driven development · AI code review tooling [Situational] · guardrails: sandboxing, least-privilege tokens for agents, no production credentials in agent context

**LLM API integration [Core]:** OpenAI API, **Anthropic API (Claude)**, Google Gemini API, Mistral, open-weight models via Ollama/vLLM · prompt design, system prompts, **structured outputs** (JSON schema / JSON mode), **function/tool calling**, **streaming via SSE**, token counting and cost budgeting, context-window management, model selection (capability vs cost vs latency), temperature/parameters, extended thinking/reasoning controls, retries/timeouts/fallbacks across providers, rate-limit handling, gateway layers (Vercel AI Gateway, OpenRouter, LiteLLM)

**Vercel AI SDK 6 [Core for TS roles]** (`ai` 6.x is the current stable line [65]; adoption figures `[unverified — confirm source]` [66][67]): `streamText`/`generateText`/`streamObject` server primitives · `useChat` (message-parts model: text, tool-call, tool-result, reasoning, source) · tool calling with Zod `inputSchema` + `execute` · `ToolLoopAgent` agent abstraction, `stopWhen: stepCountIs(N)` to prevent runaway loops · `needsApproval` (human-in-the-loop) · `Output.object()` structured output · `rerank()` · MCP client (`@ai-sdk/mcp`) · DevTools (`@ai-sdk/devtools`) · multi-provider behind one interface, `providerOptions` per provider (e.g. Anthropic thinking) [66][67] · **always verify against the installed version's bundled docs — APIs move quickly** [65]

**Model Context Protocol (MCP) [Senior]:** open standard for connecting models to tools and data · **spec revision 2026-07-28 (final 28 July 2026) is the largest since launch:** stateless core — the `initialize` handshake and `Mcp-Session-Id` are gone, every request carries protocol version, client info and capabilities in `_meta`; `server/discover` for capability negotiation; Streamable HTTP now requires `Mcp-Method`/`Mcp-Name` headers so gateways and load balancers can route without parsing bodies; W3C Trace Context keys (`traceparent`, `tracestate`, `baggage`) standardized in `_meta`; Tasks lifecycle for long-running calls; MCP Apps extension (tool-declared UI templates); Roots, Sampling and Logging deprecated (annotation-only: still work for at least twelve months); authorization hardened around OAuth 2.0/OIDC practice; `cacheScope` on responses [68][69][41] · previous revision 2025-11-25 (stdio + Streamable HTTP, OAuth 2.1 + PKCE for remote servers) · server design: tool schemas, idempotent tools, per-user auth, least-privilege scopes, audit logging · **when NOT:** an in-process function call or a plain REST client is simpler when only one app consumes the capability

**RAG (Retrieval-Augmented Generation) [Senior]:** embeddings (text-embedding models, dimension/cost tradeoffs), chunking (fixed-size, recursive, semantic, structure-aware), vector databases (pgvector, Pinecone, Qdrant, Weaviate), similarity search (cosine, dot product), **hybrid search (vector + BM25/keyword)**, **reranking** (cross-encoder, Cohere), metadata filtering, query rewriting, retrieval evaluation (precision/recall, recall@k, MRR, nDCG), citations/grounding, corpus versioning, re-embed plans, freshness/invalidations · **when NOT:** small corpora that fit in context → long context with prompt caching

**AI agents [Senior]:** tool-use patterns, planning/ReAct loops, permission boundaries, **prompt-injection defense** (treat retrieved text and tool output as untrusted), **human-in-the-loop for sensitive/irreversible actions**, agent orchestration (LangGraph, CrewAI, Claude Agent SDK, OpenAI Agents SDK), durable execution for long-running agents (Temporal, Inngest, Workflow DevKit), sandboxed code execution, memory (short/long-term), multi-agent handoffs, computer-use agents (vision-action loops, sandboxing, kill switches) [Situational]

**Evals [Senior]:** measuring LLM output quality, regression testing for prompts, LLM-as-judge (with calibration), golden datasets, online + offline evals, error analysis, tracing-driven datasets — widely cited as the strongest signal that someone has actually shipped LLM features `[unverified — confirm source]` [62]

**Cost & reliability [Senior]:** prompt caching (cached-prefix discounts), model routing (large → small by task difficulty), batch APIs, response caching, token/cost-per-task tracking, spend caps per key/user, timeouts + fallbacks, streaming UX, cost reduction of 40–70% reported for production workloads `[unverified — confirm source]` [62]

**LLM observability [Senior]:** LangSmith, Langfuse, Helicone, Braintrust, Arize/Phoenix, OTel GenAI semantic conventions, trace-per-request, span-per-tool-call, prompt/version tracking, PII redaction in traces

**[Situational]** LangChain, LlamaIndex, local models (Ollama, llama.cpp, vLLM), fine-tuning awareness (LoRA), embeddings fine-tuning, speech/vision/multimodal APIs, image generation APIs, AI app builders (v0, Lovable, Bolt, Replit — awareness), EU AI Act awareness

---

## 14. Tooling & Developer Experience

**Package managers & runtimes [Core]:** **pnpm** (workspace protocol, content-addressable store, strict node_modules, build scripts blocked unless allowlisted) — the 2026 default for monorepos; npm and yarn fluency for existing projects · Corepack / `packageManager` field · Node version managers (fnm, mise, Volta, nvm) · `.nvmrc`/`engines` pinning

**Build tools [Core]:** **Vite 8** (stable 12 March 2026; Rolldown replaces both esbuild and Rollup as the single Rust bundler; ~65M weekly downloads; requires Node 20.19+ or 22.12+; built-in Devtools option; `@vitejs/plugin-react` v6 uses Oxc, no Babel) [70] · **Rolldown 1.0** (stable 7 May 2026; Rollup-compatible plugin API; watch mode and some features still experimental) [71] · migrate via `rolldown-vite` on Vite 7 first for large projects [70] · Turbopack (Next.js default bundler) [11] · esbuild, SWC, Oxc (Rust compiler/linter/formatter toolchain), tsup/tsdown, webpack (legacy, still present), Rspack · env handling (`import.meta.env`, `node --env-file`, dotenv)

**Runtime tools [Core]:** tsx / Node type stripping for running TypeScript without a build step [7], Nodemon/`--watch`, concurrently/npm-run-all, Turborepo/Nx task graph · Husky/lint-staged · Docker Compose for local services · mkcert/local HTTPS · ngrok/Cloudflare Tunnel for webhooks

**Editors [Core]:** VS Code (70.9% IDE usage in Stack Overflow 2026 [26]) — extensions, debugging config (launch.json), workspace settings, tasks · Cursor, Zed, JetBrains (WebStorm/IntelliJ) · AI-native editors (Cursor, Windsurf), terminal agents (Claude Code) [60][26]

**Terminal [Core]:** bash/zsh fundamentals, SSH keys/agent, process management, piping, scripting, `jq`, ripgrep, `fd`, tmux, git aliases

**Documentation & DX [Senior]:** README standards, ADRs, Storybook, Docusaurus/Starlight/Nextra, API docs (Scalar), changelogs, onboarding scripts (`make setup`, devcontainers), CONTRIBUTING, PR templates, internal developer portals

**[Situational]** **Bun** (21% usage, +4pp, S-tier satisfaction [5]; runtime + bundler + package manager + test runner in one binary), Deno (11% [5]), Zed, Nix, AI-native editors, Biome (lint + format in one tool)

---

## 15. Soft Skills & Delivery Practices

91.2% of employers rank problem-solving above any specific technology `[unverified — confirm source]` [72]. Stack Overflow 2026: developers endorse technologies first for reliability, performance and stability (17.3%), then productivity (15.9%), then community/ecosystem (12.9%) — AI features rank near 2% [61][6].

**[Core]**
- **Debugging methodology:** systematic isolation (reproduce, narrow, fix, verify), browser DevTools (Elements, Network, Console, Performance, Application tabs), log analysis, bisecting (`git bisect`), rubber-duck debugging, reading stack traces, minimal reproductions
- **Technical communication:** explaining trade-offs to non-technical stakeholders, writing clear PRs, READMEs, ADRs, API documentation, asynchronous written communication
- **Agile/Scrum:** sprint planning, standups, retrospectives, estimation (story points, t-shirt sizing), kanban, backlog grooming, definition of done · 82% of listings require Agile/Scrum experience `[unverified — confirm source]` [73]
- **Code review culture:** constructive feedback, knowledge transfer, catching bugs before production, small PRs, reviewing AI-generated diffs
- **Collaboration:** pair/mob programming, cross-functional work with design/QA/product, conflict resolution, working with a Figma file (Dev Mode, variables)
- **Ownership:** shipping end-to-end, on-call readiness, reading production metrics, closing the loop with users
- **Learning agility:** reading changelogs and specs, evaluating libraries (maintenance, bus factor, security, bundle size), judgment about when to adopt vs wait

**[Senior]**
- Mentoring junior developers, technical writing (blog posts, internal docs, RFCs)
- Incident response participation: on-call, postmortems, blameless culture
- Prioritization: balancing tech debt vs features, ROI-driven engineering decisions, scoping and cutting
- Stakeholder management, requirements clarification, estimation under uncertainty
- Data visualization literacy (appears repeatedly in job postings) `[unverified — confirm source]` [74]
- Portfolio/open-source evidence: shipped projects with live URLs, README quality, commit hygiene

---

## 16. Backend-as-a-Service (BaaS) Platforms

Full-stack developers increasingly ship on managed backends. Know when to use them, and when a custom backend is cheaper.

**[Core]**
- **Supabase:** Postgres-native BaaS — Auth (RLS-integrated), Storage (S3-compatible), Realtime (Postgres changes / broadcast / presence over WebSocket), Edge Functions (Deno), pgvector, database branching, auto-generated REST (PostgREST) and GraphQL APIs, TypeScript type generation, self-hostable (Apache 2.0) · **when:** SQL-comfortable teams, relational data, AI apps (pgvector), EU data residency, predictable cost at scale · **caveats:** every exposed table needs RLS policies; the `service_role` key never ships to the client; business logic splits awkwardly between SQL functions and Edge Functions · adoption and pricing figures from the older drafts (4M+ developers, valuation, 45% of Vercel Next.js deployments, 40–60% cheaper than Firebase) are `[unverified — confirm source]` [75][76]
- **Firebase:** Google's BaaS — Firestore (NoSQL), Auth, Cloud Functions, FCM push, Analytics, Crashlytics, Remote Config, App Check, Security Rules · **when:** mobile-first apps (best iOS/Android SDKs), Google Cloud ecosystem, rapid prototyping, push/analytics/crash in one SDK · **caveats:** vendor lock-in, per-operation pricing surprises at scale, NoSQL query limits [75][76]
- **Convex:** TypeScript-native reactive backend — `query()`/`mutation()`/`action()` server functions, end-to-end types without codegen, reactive queries (live subscriptions by default), built-in vector search, optimistic updates, scheduling/cron, file storage; open source with self-hosting · **when:** TS-only stacks where real-time collaboration is core, small teams optimizing velocity · **caveats:** smaller community, non-Postgres data model, managed cloud region limits [76][77]
- **Decision rule:** BaaS → prototype, MVP, small team, standard CRUD + auth; custom backend → complex domain logic, strict compliance/residency, heavy background processing, cost control at scale

**[Situational]** Neon (serverless Postgres, branching), Turso (SQLite at edge), PlanetScale (MySQL/Vitess, Postgres), Upstash (serverless Redis/Kafka/QStash), Appwrite, PocketBase, Nhost, Xata, AWS Amplify

---

## 17. Compliance, Privacy & Product Infrastructure

**Privacy law mechanics [Core]:** GDPR — lawful basis, data minimization, DPA/processor agreements, DSAR handling (access, portability), **right to erasure** (deletion jobs across DB, backups policy, search index, analytics, vendors), breach notification (72 hours), cross-border transfers (SCCs), records of processing · **cookie consent / ePrivacy:** consent management platform (CMP), granular opt-in, no pre-ticked boxes, consent logging, Google Consent Mode v2, cookieless analytics (Plausible, PostHog) · privacy policy, ToS, DPA pages · CCPA/CPRA, children's privacy (COPPA) [Situational] · India DPDP Act 2023 [Situational]

**Accessibility law [Core]:** EAA (EU, enforceable 28 June 2025), ADA/Section 508 (US), WCAG 2.2 AA, EN 301 549, accessibility statement page → §2

**Cyber law & standards [Senior]:** **EU Cyber Resilience Act** — reporting of actively exploited vulnerabilities and severe incidents from 11 September 2026 (24-hour early warning, 72-hour notification), SBOM-backed technical documentation and full obligations from 11 December 2027; SBOM readiness is needed before the formal mandate to meet the 24-hour window [57][58] · SOC 2 Type II, ISO 27001, HIPAA, PCI DSS 4.0 (use hosted fields/Checkout to stay in SAQ A scope), vendor security questionnaires, security.txt · audit trails, access reviews, change management evidence

**Product infrastructure [Core]:** transactional email deliverability (SPF/DKIM/DMARC) §3, billing and invoicing (Stripe Billing, tax automation, GST/VAT handling), webhooks as events, feature flags and entitlements, audit logs, admin panels/back-office tooling (Retool, Refine, React Admin) [Situational], customer support tooling (Intercom, Crisp), analytics events taxonomy (tracking plan), data export, status page

**AI regulation [Situational]:** EU AI Act awareness, model/data provenance, user disclosure of AI output, human review of consequential decisions

---

## 18. Common Stack Combinations

| Stack | Composition | Best fit |
|---|---|---|
| **Next.js full-stack** | Next.js 16 (App Router, RSC, Cache Components) + TypeScript + Tailwind v4 + shadcn/ui (Base UI or Radix) + Drizzle or Prisma + PostgreSQL + Better Auth/Clerk + Vercel | Default modern web app; safest 2026 pick for hiring depth and ecosystem maturity [16][11] |
| **T3-style** | Next.js + tRPC + Tailwind + Drizzle + Better Auth + Zod | Type-safe SaaS for solo and small teams; community moved from Prisma to Drizzle for new projects [27][28] |
| **AI product** | Next.js + Vercel AI SDK 6 + FastAPI (Python AI layer) + PostgreSQL + pgvector + Redis + Anthropic/OpenAI APIs + SSE streaming + MCP | AI-powered products; Python for AI/LLM services, TypeScript for the web layer [25][65] |
| **MERN** | MongoDB + Express + React + Node.js | Legacy demand; still appears in postings [25] |
| **Enterprise Java** | Angular or React + Spring Boot + PostgreSQL/Oracle + Docker + Kubernetes | Banking, healthcare, government, large orgs; Java full-stack remains a top in-demand role `[unverified — confirm source]` [78] |
| **Enterprise .NET** | React + ASP.NET Core + SQL Server + Azure + Docker | Microsoft ecosystem, corporate IT; ASP.NET Core ranks 4th among web technologies in SO 2026 [26] |
| **Edge-first** | Hono + Cloudflare Workers + D1/Turso + Drizzle + TypeScript | Latency-critical, globally distributed APIs; near-zero cold starts [5] |
| **Content / Astro** | Astro + Tailwind + headless CMS (Strapi, Sanity, Payload, Contentful) + Vercel/Netlify | Marketing sites, blogs, docs; Astro leads meta-framework satisfaction [16] |
| **Local-first** | React + Zero or ElectricSQL + PostgreSQL (+ TanStack DB) | Linear-style instant UX, collaborative apps [31][32] |
| **BaaS rapid build** | Next.js/Vite + Supabase (Auth, RLS, Storage, Realtime) or Firebase or Convex | MVPs, small teams, prototypes [75][76] |
| **Monolith-first backends** | Laravel + Inertia/Livewire, Rails 8 + Hotwire, Django + HTMX | Small teams shipping CRUD-heavy products fast |
| **Python data/ML adjacent** | FastAPI + Pydantic + SQLAlchemy/Alembic + PostgreSQL + Celery/Arq + React | APIs feeding ML pipelines, analytics products [25] |

---

## Complete Master Keyword List

Copy-ready for resumes, job descriptions, ATS optimization, curriculum design, or skill tracking. Regenerated from the body above. **Bold** = highest-frequency in 2026 job postings [73][78][79][74]. Comma-separated; categories mirror section order.

### 1. Web Fundamentals
**HTML5**, **CSS3**, **JavaScript**, **TypeScript**, ES2023+, ES2025, DOM, HTTP/HTTPS, HTTP/2, HTTP/3, QUIC, TLS 1.3, DNS, CDN, REST, browser rendering, critical rendering path, event loop, microtasks, semantic HTML, forms validation, Popover API, dialog element, Flexbox, CSS Grid, subgrid, container queries, cascade layers, CSS nesting, `:has()`, custom properties, `clamp()`, logical properties, oklch, `color-mix()`, View Transitions API, scroll-driven animations, responsive design, ES modules, async/await, promises, AbortController, closures, prototypes, iterators, generators, structuredClone, IntersectionObserver, Intl API, Temporal API, Temporal polyfill, web.dev Baseline, fetch API, streaming fetch, Web APIs, IndexedDB, Cache API, cookies, SameSite, HttpOnly, CHIPS, CORS, Cache-Control, ETag, stale-while-revalidate, Brotli, `prefers-color-scheme`, `prefers-reduced-motion`, Baseline, progressive enhancement, feature detection, browserslist, strict mode, generics, discriminated unions, utility types, `satisfies`, type narrowing, Standard Schema, `erasableSyntaxOnly`, tsconfig, TypeScript 7, accessibility (a11y), WCAG, ARIA, web performance, Web Components, Web Workers, WebAssembly

### 2. Frontend
**React**, **Next.js**, React 19, React 19.2, React Server Components, Server Actions, App Router, `"use client"`, `useOptimistic`, `useActionState`, `use` hook, `useEffectEvent`, Suspense, error boundaries, React Compiler, SSR, SSG, ISR, CSR, streaming SSR, Partial Prerendering, Cache Components, `"use cache"`, `cacheLife`, `cacheTag`, `revalidateTag`, `updateTag`, `proxy.ts`, Turbopack, hydration, islands architecture, **Tailwind CSS**, Tailwind v4, **shadcn/ui**, Base UI, Radix UI, React Aria, Headless UI, CSS Modules, design tokens, design systems, component architecture, compound components, **TanStack Query**, **Zustand**, Redux Toolkit, Jotai, XState, nuqs, URL state, **Zod**, **React Hook Form**, Conform, form validation, SWR, TanStack Table, AG Grid, TanStack Virtual, Recharts, D3, Tiptap, Lexical, dnd-kit, cmdk, Slate, TanStack Form, sonner, MapLibre, Motion (Framer Motion), GSAP, **Vite**, Core Web Vitals, LCP, INP, CLS, TTFB, web-vitals, Lighthouse CI, code splitting, lazy loading, bundle optimization, bundle analysis, size-limit, image optimization, font optimization, Speculation Rules, PWA, service workers, Workbox, micro-frontends, Module Federation, Storybook, mobile-first design, Astro, Vue, Nuxt, Svelte, SvelteKit, Angular, Solid, Qwik, React Router, Remix, TanStack Start, htmx, Inertia.js, **WCAG 2.2**, European Accessibility Act, screen reader testing, axe-core, SEO, technical SEO, JSON-LD, structured data, sitemap, hreflang, i18n, l10n, ICU MessageFormat, next-intl, RTL, React Native, Expo, Flutter, Tauri, Electron, browser extensions

### 3. Backend
**Node.js**, Node.js 24, Node.js 26, LTS, native TypeScript, type stripping, **Express**, **NestJS**, Fastify, **Hono**, Fastify 5, Express 5, Elysia, Nitro, Bun, Deno, **Python**, **FastAPI**, Pydantic, Django, Flask, uv, ruff, **Java**, **Spring Boot**, Go, **C#**, **ASP.NET Core**, PHP, Laravel, Ruby on Rails, Rust, Elixir, REST API, **GraphQL**, tRPC, gRPC, middleware, dependency injection, service layer, repository pattern, DTOs, input validation, error handling, Problem Details (RFC 9457), Zod v4, Valibot, ArkType, TypeBox, SignalR, node:test, Cloudflare Queues, Cloudflare Workflows, React Email, MJML, BIMI, one-click unsubscribe (RFC 8058), sharp, Cloudflare Images, Mux, Novu, idempotency keys, cursor pagination, optimistic concurrency, file upload, presigned URLs, tus, streams, backpressure, AsyncLocalStorage, undici, worker threads, graceful shutdown, health checks, timeouts, circuit breaker, retries with backoff, rate limiting, BullMQ, Celery, SQS, RabbitMQ, Kafka, NATS, background jobs, cron jobs, message queues, dead-letter queue, idempotent consumers, outbox pattern, saga pattern, event-driven architecture, durable execution, Temporal, Inngest, Trigger.dev, Workflow DevKit, transactional email, SPF, DKIM, DMARC, email deliverability, multi-tenancy, tenant isolation, audit logs, soft delete, API keys

### 4. Databases
**PostgreSQL**, PostgreSQL 18, **Redis**, MongoDB, MySQL, SQLite, SQL Server, **SQL**, **Prisma**, **Drizzle ORM**, TypeORM, Kysely, SQLAlchemy, Alembic, sqlc, database design, normalization, indexing, B-tree, GIN, GiST, BRIN, partial index, covering index, composite index, transactions, ACID, isolation levels, locking, `SELECT FOR UPDATE`, advisory locks, joins, CTEs, window functions, JSONB, migrations, expand-and-contract, zero-downtime migrations, connection pooling, PgBouncer, read replicas, replication, CDC, partitioning, materialized views, Row-Level Security (RLS), `pg_stat_statements`, `EXPLAIN ANALYZE`, N+1, query optimization, vacuum, PITR, backups, UUIDv7, `timestamptz`, full-text search, **pgvector**, vector database, HNSW, hybrid search, reranking, Pinecone, Qdrant, Weaviate, Meilisearch, Typesense, Algolia, Elasticsearch, OpenSearch, ParadeDB, ClickHouse, DuckDB, BigQuery, dbt, Neon, Supabase, Turso, Cloudflare D1, PlanetScale, Durable Objects, Hyperdrive, DynamoDB, CockroachDB, PostGIS, Upstash, Valkey, cache-aside, TTL, distributed locks, data retention, GDPR erasure

### 5. APIs & Integration
REST, GraphQL, **tRPC**, **OpenAPI**, Swagger, JSON Schema, OpenAPI 3.1, Scalar, Redoc, openapi-typescript, Orval, Kubb, Hey API, oasdiff, API versioning, pagination, idempotency, rate limiting, **webhooks**, webhook signature verification, API gateway, contract testing, Pact, SDK generation, BFF, **Stripe**, payment integration, PaymentIntents, Checkout, subscriptions, Stripe Billing, Stripe Connect, Razorpay, UPI, PayPal, Adyen, Clerk, Better Auth, **Auth.js**, Auth0, WorkOS, Keycloak, SSO, SAML, OIDC, Resend, SendGrid, Postmark, AWS SES, S3, Cloudflare R2, presigned URLs, multipart upload, OAuth flows, headless CMS, Sanity, Strapi, Payload, Contentful, Twilio, gRPC, AsyncAPI, Spectral, API deprecation

### 6. Real-Time & Local-First
**WebSockets**, Socket.IO, `ws`, **Server-Sent Events (SSE)**, `EventSource`, long polling, WebRTC, WebTransport, push notifications, Web Push, FCM, reconnection handling, exponential backoff, message ordering, backpressure, presence, Redis adapter, sticky sessions, pub/sub, **local-first**, sync engines, ElectricSQL, Zero, PowerSync, LiveStore, TanStack DB, CRDTs, Automerge, Yjs, PGlite, optimistic UI, offline-first

### 7. Cloud & DevOps
**Git**, **GitHub**, trunk-based development, conventional commits, CODEOWNERS, branch protection, signed commits, Changesets, semantic-release, semantic versioning, pull requests, **Docker**, **Docker Compose**, multi-stage builds, container registry, Trivy, Kubernetes, Helm, **CI/CD**, **GitHub Actions**, OIDC federation, pinned actions, matrix builds, preview deployments, **Vercel**, Netlify, Railway, Render, Fly.io, Cloud Run, **AWS** (EC2, S3, Lambda, RDS, CloudFront, IAM, Route 53, ECS, Fargate, SQS), Azure, GCP, **Cloudflare Workers**, edge computing, serverless, Terraform, OpenTofu, Pulumi, AWS CDK, IaC, GitOps, Argo CD, Linux, bash, SSH, Nginx, Caddy, environment variables, secrets management, Doppler, Vault, DNS, TLS/HTTPS, Let's Encrypt, WAF, CDN, rollback, feature flags, LaunchDarkly, OpenFeature, canary deployment, blue-green deployment, progressive delivery, FinOps, disaster recovery, RTO, RPO, platform engineering, Backstage, internal developer platform, golden paths, DORA metrics

### 8. Observability
**Sentry**, **OpenTelemetry**, OTLP, OTel Collector, structured logging, Pino, correlation IDs, session replay, PII scrubbing in logs, error monitoring, source maps, distributed tracing, W3C Trace Context, metrics, Prometheus, Grafana, Datadog, Honeycomb, Jaeger, Tempo, Loki, RUM, synthetic monitoring, uptime monitoring, alerting, SLIs, SLOs, error budgets, RED method, USE method, on-call, PagerDuty, runbooks, postmortems, incident response, GenAI semantic conventions, PostHog, product analytics

### 9. Testing
**Vitest**, **Playwright**, **MSW (Mock Service Worker)**, Testing Library, Jest, Cypress, Selenium, unit testing, integration testing, E2E testing, component testing, snapshot testing, browser mode, visual regression, `toMatchScreenshot`, Chromatic, APIRequestContext, storageState, Page Object Model, Playwright trace viewer, Percy, accessibility testing, axe-core, code coverage, test pyramid, test trophy, TDD, BDD, mocking, test doubles, test fixtures, flaky tests, trace viewer, test sharding, Testcontainers, contract testing, load testing, k6, Locust, Artillery, stress testing, mutation testing, Stryker, property-based testing, fast-check, ESLint, typescript-eslint, Prettier, Oxlint, Oxfmt, Biome, Husky, lint-staged, commitlint, pre-commit hooks, knip, SAST, DAST, CodeQL, Semgrep, gitleaks, LLM evals, promptfoo

### 10. Security
**OWASP Top 10**, OWASP Top 10:2025, **XSS**, **CSRF**, **SQL injection**, injection, broken access control, BOLA, IDOR, **authentication**, **authorization**, **RBAC**, ABAC, ReBAC, OpenFGA, OPA, Cedar, password hashing, **bcrypt**, **argon2**, argon2id, JWT, OAuth 2.0, OAuth 2.1, PKCE, OIDC, **Passkeys**, **WebAuthn**, FIDO2, MFA, TOTP, session management, input validation, output encoding, sanitization, CORS, CSP, Trusted Types, HSTS, security headers, SSRF, unsafe deserialization, React2Shell, prototype pollution, ReDoS, file upload security, parameterized queries, rate limiting, abuse prevention, CAPTCHA, Turnstile, secrets management, secrets scanning, encryption at rest, KMS, **supply chain security**, Shai-Hulud, `ignore-scripts`, lockfile integrity, `npm ci`, dependency cooldown, `minimumReleaseAge`, trusted publishing, npm provenance, SBOM, CycloneDX, SPDX, Socket.dev, Snyk, Dependabot, Renovate, npm audit, threat modeling, STRIDE, OWASP API Security Top 10, OWASP LLM Top 10, prompt injection, Zero Trust, penetration testing, Cyber Resilience Act, security.txt, Software Supply Chain Failures, Cryptographic Failures, Insecure Design, Security Misconfiguration, Authentication Failures, Software or Data Integrity Failures, Logging & Alerting Failures, Mishandling of Exceptional Conditions, BOLA/IDOR, validly attested packages, SLSA

### 11. Architecture
**System design**, monolith, microservices, **modular monolith**, **monorepo**, **Turborepo**, pnpm workspaces, Nx, **SOLID**, clean code, MVC, layered architecture, hexagonal architecture, domain-driven design, design patterns, 12-factor app, event-driven architecture, load balancing, caching, CAP theorem, eventual consistency, CQRS, event sourcing, ADRs, RFCs, strangler fig, multi-tenant architecture, micro-frontends, scalability, capacity estimation

### 12. Performance
Core Web Vitals, performance budgets, code splitting, lazy loading, image optimization, font loading, HTTP caching, CDN caching, edge caching, cache invalidation, stale-while-revalidate, query optimization, connection pooling, profiling, flame graphs, p95 latency, p99 latency, load testing, tail latency, Lighthouse, streaming responses, background processing

### 13. AI & LLM
**AI integration**, **OpenAI API**, **Anthropic API** (Claude), Google Gemini API, **LLM**, **RAG**, **embeddings**, **vector database**, pgvector, **prompt engineering**, context engineering, structured outputs, function calling, tool use, streaming, SSE, token budgeting, prompt caching, model routing, **AI agents**, agent orchestration, LangGraph, LangChain, LlamaIndex, Claude Agent SDK, **MCP (Model Context Protocol)**, MCP server, Streamable HTTP, `AGENTS.md`, `CLAUDE.md`, agent skills, Copilot, Cursor, **Claude Code**, Codex, AI-assisted development, vibe coding awareness, spec-driven development, prompt injection defense, human-in-the-loop, guardrails, **Vercel AI SDK**, `useChat`, `streamText`, `ToolLoopAgent`, `generateObject`, AI Gateway, hybrid search, reranking, chunking, evals, LLM-as-judge, LLM observability, Langfuse, LangSmith, Helicone, Braintrust, OTel GenAI, cost optimization, Ollama, fine-tuning awareness

### 14. Tooling
**pnpm**, npm, yarn, Corepack, **Vite 8**, Rolldown, Oxc, Turbopack, esbuild, SWC, Rspack, webpack, **Bun**, Deno, tsx, tsdown, `node --env-file`, dotenv, VS Code, Cursor, JetBrains, Zed, terminal, bash, zsh, SSH, tmux, ripgrep, jq, Storybook, Docusaurus, devcontainers

### 15. Soft Skills
**Problem-solving**, **communication**, debugging, **Agile**, Scrum, Kanban, code review, pull requests, Git branching, pair programming, mentoring, technical writing, incident response, cross-functional collaboration, estimation, prioritization, ownership, stakeholder management, data visualization literacy

### 16. BaaS Platforms
**Supabase**, **Firebase**, **Convex**, Neon, Turso, PlanetScale, Upstash, Appwrite, PocketBase, Firestore, Supabase Auth, Supabase Realtime, Edge Functions, Security Rules, App Check

### 17. Compliance & Product Infrastructure
GDPR, DSAR, right to erasure, cookie consent, consent management platform, Consent Mode v2, ePrivacy, CCPA, DPDP Act, COPPA, European Accessibility Act, ADA, Section 508, EN 301 549, Cyber Resilience Act, SOC 2, ISO 27001, HIPAA, PCI DSS, PCI SAQ A, SBOM, audit trail, billing, invoicing, GST, VAT, entitlements, admin panel, tracking plan, EU AI Act

### 18. Stack Combinations
Next.js full-stack, T3 stack, AI stack, MERN, Enterprise Java, Enterprise .NET, Edge-first, Astro + headless CMS, local-first stack, BaaS stack, Laravel + Inertia, Rails + Hotwire, Django + HTMX, FastAPI + React

---

## Sources

[1] TC39 advances Temporal to Stage 4 (March 2026) — via Socket/daily.dev: https://app.daily.dev/posts/tc39-advances-temporal-to-stage-4-alongside-several-ecmascri--wsjtjdml5
[2] Node.js 26 ships unflagged Temporal and Undici 8: https://lilting.ch/en/articles/nodejs-26-current-temporal-undici
[3] JavaScript Temporal migration playbook for frontend teams: https://www.refontelearning.com/blog/javascript-temporal-migration-playbook
[4] State of JavaScript 2025 — Devographics (13,002 responses; results published 3 Feb 2026): https://2025.stateofjs.com
[5] State of JavaScript 2025 survey results — InfoQ: https://www.infoq.com/news/2026/03/state-of-js-survey-2025
[6] Stack Overflow Developer Survey 2026 — Technology: https://survey.stackoverflow.co/2026/technology
[7] Node.js docs — Modules: TypeScript (type stripping): https://nodejs.org/api/typescript.md
[8] Microsoft releases TypeScript 7.0 with a native Go compiler — InfoQ: https://infoq.com/news/2026/08/typescript-7-released/
[9] TypeScript 7.0 RC moves Microsoft's Go rewrite into the mainline compiler — Visual Studio Magazine: https://visualstudiomagazine.com/articles/2026/06/22/typescript-7-0-rc-moves-microsofts-go-rewrite-into-the-mainline-compiler.aspx
[10] Microsoft bets TypeScript's future on a native compiler — ADT Magazine: https://adtmag.com/articles/2026/07/10/microsoft-bets-typescript-future-on-a-native-compiler.aspx
[11] Next.js 16 — Vercel/Next.js blog (21 Oct 2025): https://nextjs.org/blog/next-16
[12] React State Management 2026: Data-Driven Comparison — Sascha Becker: https://saschb2b.com/blog/react-state-management-2026
[13] React Server Components critical vulnerability CVE-2025-55182 — NetSPI: https://www.netspi.com/?p=31134
[14] React2Shell (CVE-2025-55182) — OP Innovate: https://op-c.net/blog/react2shell-cve-2025-55182/
[15] Next.js 16 Cache Components migration reference (vercel-labs next-skills): https://skills.cat/skills/vercel-labs/next-skills/next-cache-components
[16] State of JS 2025 Key Takeaways — Strapi: https://strapi.io/blog/state-of-javascript-2025-key-takeaways
[17] shadcn/ui changelog — July 2026: Base UI as the default: https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default
[18] shadcn/ui has switched from Radix to Base UI — OpenReplay: https://blog.openreplay.com/shadcn-ui-radix-base-ui-switch/
[19] React State Management in 2025 — Developer Way: https://www.developerway.com/posts/react-state-management-2025
[20] Core Web Vitals — INP replaced FID, March 2024 — web.dev
[21] Node.js 2026 release and end-of-life dates — ecorpit: https://ecorpit.com/nodejs-development-company/
[22] Node.js 26 LTS: what's new and how to upgrade — fireup.pro: https://fireup.pro/news/nodejs-26-lts-whats-new-upgrade
[23] One Node.js release a year from 2027 — DEV Community: https://dev.to/mr_manushukla/one-nodejs-release-a-year-from-2027-what-the-node-27-lts-change-means-for-your-upgrade-cadence-2fo3
[24] Anthropic acquires Bun as Claude Code reaches $1B milestone (3 Dec 2025): https://anthropic.com/news/anthropic-acquires-bun-as-claude-code-reaches-usd1b-milestone
[25] Stack Overflow Developer Survey 2025 — Technology: https://survey.stackoverflow.co/2025/technology
[26] Stack Overflow 2026 Survey: VS Code leads — Visual Studio Magazine: https://visualstudiomagazine.com/articles/2026/10/06/stack-overflow-2026-survey-vs-code-leads-visual-studio-takes-third.aspx
[27] Prisma vs Drizzle vs TypeORM 2026 (data pulled 19 Oct 2026) — Tech Insider: https://tech-insider.org/prisma-vs-drizzle-vs-typeorm-2026/
[28] Drizzle ORM vs Prisma (2026) — PkgPulse: https://www.pkgpulse.com/guides/drizzle-orm-vs-prisma-2026-update
[29] Auth.js is now part of Better Auth — Better Auth blog: https://www.better-auth.com/blog/authjs-joins-better-auth
[30] Electric SQL vs PowerSync vs LiveStore — Kanopy Labs: https://kanopylabs.com/blog/electric-sql-vs-powersync-vs-livestore-local-first
[31] Zero reaches 1.0 — InfoQ (June 2026): https://infoq.com/news/2026/06/zero-version-1
[32] TanStack DB vs ElectricSQL vs Zero — Kanopy Labs: https://kanopylabs.com/blog/tanstack-db-vs-electricsql-vs-zero-sync
[33] Local-First Software in 2026 — Verity Research: https://verity.salient.community/research/local-first-software-in-2026.html
[34] Mini Shai-Hulud npm Attack: AntV Ecosystem Compromise (May 2026) — Chainguard: https://chainguard.dev/unchained/mini-shai-hulud-npm-attack-antv-ecosystem-compromise-may-2026
[35] Mini Shai-Hulud worm compromises TanStack, Mistral AI, UiPath — advisory AGS-2026-0001: https://agentguard.gopluslabs.io/advisor/AGS-2026-0001
[36] Stack Overflow Developer Survey 2025 highlights — Cadence: https://cadence.withremote.ai/blog/stack-overflow-survey-2026
[37] Platform Engineering in 2026: Why DIY Is Dead — Roadie: https://roadie.io/blog/platform-engineering-in-2026-why-diy-is-dead/
[38] Backstage Is Dead — Port: https://www.port.io/blog/backstage-is-dead
[39] Platform Engineering and IDPs MLR — Frontiers in Computer Science: https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2026.1814498/full
[40] OpenTelemetry vs Sentry vs Datadog 2026 — PkgPulse: https://www.pkgpulse.com/guides/opentelemetry-vs-sentry-vs-datadog-observability-2026
[41] The 2026-07-28 MCP Spec: A Server Readiness Checklist — DEV Community: https://dev.to/gustavo_gated/the-2026-07-28-mcp-spec-a-server-readiness-checklist-14nf
[42] Vitest 4.0 is out! — vitest.dev: https://main.vitest.dev/blog/vitest-4
[43] Vitest 4.0 with stable Browser Mode and visual regression — InfoQ: https://www.infoq.com/news/2025/12/vitest-4-browser-mode
[44] Testing Framework Adoption Trends: 5 Years of npm Data — TestDino: https://testdino.com/blog/testing-framework-trends
[45] Playwright Market Share: Usage Data, Downloads & Trends — TestDino: https://testdino.com/blog/playwright-market-share/
[46] Playwright vs Cypress vs Selenium 2026 — Tech Insider: https://tech-insider.org/playwright-vs-cypress-vs-selenium-2026/
[47] State of React 2025 — Libraries: https://2025.stateofreact.com/en-US/libraries/
[48] OWASP Top 10:2025 — Introduction: https://owasp.org/Top10/2025/0x00_2025-Introduction/
[49] OWASP Top 10:2025 explained — Parasoft: https://parasoft.com/blog/owasp-top-10/
[50] What Changed in OWASP Top 10 2025 — Qualys: https://blog.qualys.com/qualys-insights/2026/06/15/what-changed-in-owasp-top-10-2025-and-recommendations-for-each-category
[51] CISA Alert: widespread supply chain compromise impacting npm: https://www.cisa.gov/news-events/alerts/2025/09/23/widespread-supply-chain-compromise-impacting-npm-ecosystem
[52] Shai-Hulud worm — Palo Alto Unit 42: https://unit42.paloaltonetworks.com/npm-supply-chain-attack/
[53] Shai-Hulud 2.0 guidance — Microsoft Security: https://www.microsoft.com/en-us/security/blog/2025/12/09/shai-hulud-2-0-guidance-for-detecting-investigating-and-defending-against-the-supply-chain-attack/
[54] 600+ npm packages compromised in new Mini Shai-Hulud attack — Cyber Security News: https://cybersecuritynews.com/600-npm-packages-compromised/amp/
[55] npm Supply Chain Attacks 2026 — Bastion: https://bastion.tech/blog/npm-supply-chain-attacks-2026-saas-security-guide
[56] NPM Security Best Practices — Snyk: https://snyk.io/articles/npm-security-best-practices-shai-hulud-attack/
[57] Cyber Resilience Act: SBOM and vulnerability reporting — noze: https://www.noze.it/en/insights/cyber-resilience-act-sbom/
[58] The EU Cyber Resilience Act: what engineering teams need to do — Cloudsmith: https://cloudsmith.com/blog/the-eu-cyber-resilience-act-what-engineering-teams-need-to-do-to-be-compliant
[59] OWASP Top 10 2025 and the LLM Top 10 — CPO Magazine: https://www.cpomagazine.com/cyber-security/owasp-top-10-2025-access-control-issues-security-misconfigurations-supply-chain-issues-top-app-risk-list/
[60] The results of the 2026 Developer Survey — Stack Overflow Blog (6 Oct 2026): https://stackoverflow.blog/2026/10/06/the-results-of-the-2026-developer-survey-are-here/
[61] Stack Overflow 2026 Developer Survey press release — AI trust conditional: https://stackoverflow.co/company/press/archive/stack-overflow-annual-developer-survey-ai-trust-conditional
[62] AI Developer Hiring 2026 — Digital Applied: https://www.digitalapplied.com/blog/ai-developer-hiring-skills-that-matter-2026
[63] Measuring AGENTS.md — Agentic AI Foundation: https://aaif.io/blog/measuring-agents-md-what-five-runs-show-that-one-doesn-t
[64] AGENTS.md: inside the open standard for briefing coding agents — DEV Community: https://dev.to/dublecc/agentsmd-inside-the-open-standard-for-briefing-coding-agents-4fag
[65] Vercel AI SDK release tracker (ai 6.x): https://releases.sh/vercel/vercel-ai-sdk/highlights
[66] AI SDK 6 — Vercel: https://vercel.com/blog/ai-sdk-6
[67] Vercel AI SDK 6 Deep Dive — Digital Applied: https://www.digitalapplied.com/blog/vercel-ai-sdk-6-deep-dive-features-tool-calls-2026
[68] Model Context Protocol — 2026-07-28 specification release: https://github.com/modelcontextprotocol/specification/releases/tag/2026-07-28
[69] MCP forces ad tech to rebuild agent servers as sessions disappear — PPC Land: https://ppc.land/mcp-forces-ad-tech-to-rebuild-agent-servers-as-sessions-disappear/
[70] Announcing Vite 8 — vite.dev (12 Mar 2026): https://vite.dev/blog/announcing-vite8
[71] Rolldown 1.0 launches (7 May 2026): https://besthub.dev/articles/rolldown-1-0-launches-up-to-30-faster-than-rollup-and-20m-weekly-downloads-6503521607e8
[72] 18 Must-Have Skills for Full Stack Developers 2026 — Edstellar: https://www.edstellar.com/blog/full-stack-developers-skills
[73] Full Stack Developer Resume Guide 2026 — MirrorCV (345 listings): https://mirrorcv.com/resume-guide/full-stack-developer
[74] I Reviewed Full-Stack Job Postings for 2026 — DEV Community: https://dev.to/francistrdev/i-reviewed-full-stack-job-postings-for-2026-here-is-what-they-are-looking-for-49ie
[75] Supabase vs Firebase 2026 — Tech Insider: https://tech-insider.org/supabase-vs-firebase-2026/
[76] Supabase vs Convex vs Firebase — Kanopy Labs: https://kanopylabs.com/blog/supabase-vs-convex-vs-firebase-backend-for-ai-apps
[77] Convex vs Supabase vs Firebase 2026 — Cadence: https://cadence.withremote.ai/blog/convex-vs-supabase-vs-firebase
[78] Top Full Stack Developer Resume Skills 2026 — Jobscan (10M+ job descriptions): https://www.jobscan.co/skills/full-stack-developer
[79] Full-Stack Developer Skills: 132,087 Job Posts — Huntr: https://huntr.co/resume-skills/full-stack-developer

---

## Revision Notes

**Added:**
- §1 — ES2025 features (iterator helpers, Set methods, `Promise.try`, `RegExp.escape`), `scheduler.postTask`, `URLPattern`, `light-dark()`, `@starting-style`, `prefers-contrast`, Origin Private File System · Core · broadens language/platform coverage the checklist required.
- §1 — Temporal status rewritten with verified browser/runtime support and polyfill rule · Core · replaces outdated "Stage 3" claim [1][2][3].
- §1 — TypeScript 7.0 GA with the "when NOT to move yet" rule · Core · replaces the old "~3x" claim [8][9][10].
- §2 — React 19.2 (`useEffectEvent`, `<Activity/>`), React2Shell patch guidance, Next.js 16 Cache Components/`"use cache"`/`proxy.ts`/Turbopack default, Base UI default in shadcn/ui, `-b radix` flag, Radix unified package · Core · current as of Next.js 16 and the July 2026 shadcn change [11][15][17][18][13][14].
- §2 — Forms/Conform, TanStack Form, React Aria, maps, PDF generation, EN 301 549, target-size rule, `llms.txt`/AI-crawler policy, translation management tooling, Flutter/Capacitor under mobile-adjacent · Situational/Core as tagged · closes frontend breadth gaps.
- §3 — Node version map (20 EOL, 22, 24, 26, 27 schedule), native TS stripping constraints, permission model · Core · [7][21][23][22].
- §3 — Email deliverability (SPF/DKIM/DMARC/BIMI/RFC 8058), multi-tenancy models, audit logs, API-key design, SMS/push, media pipelines, config/env validation, durable execution (Workflow DevKit, Cloudflare Workflows) · Core/Senior · categories the audit flagged as absent.
- §4 — Stack Overflow 2026 database rankings, PostgreSQL 18 (`uuidv7()`), data-modeling hygiene (money, UTC, ID strategy), lock-aware DDL, analytics/warehouse, data governance · Core/Senior · [6].
- §5 — Webhook verification details, headless CMS, SDK generation, OpenAPI tooling, regional payments (Razorpay/Cashfree/UPI), WorkOS/Keycloak, Auth.js→Better Auth transition [29] · Core/Situational.
- §6 — Zero 1.0 status [31]; SSE reconnection and proxy-buffering pitfalls; WebSocket auth rule · Core/Senior.
- §7 — Pipeline hardening (SHA-pinned Actions, OIDC federation), GitOps, OpenTofu, FinOps, DR, container hardening, edge/serverless decision rule · Core/Senior.
- §8 — SLI/SLO burn-rate alerting, RED/USE, OTel Collector/OTLP/cardinality, PII scrubbing, MCP trace-context keys [41] · Core/Senior.
- §9 — Vitest 4 Browser Mode and visual regression [42][43]; Playwright download figures with sources [44][45]; mutation/property-based testing, security testing in CI, flake handling · Core/Senior/Situational.
- §10 — OWASP Top 10:2025 full list [48][50][49]; React2Shell as deserialization case study [13][14]; corrected Mini Shai-Hulud facts [34][35][54]; EU Cyber Resilience Act dates [57][58]; OWASP API Top 10 list; OWASP LLM Top 10 [59] · Core/Senior.
- §13 — Stack Overflow 2026 AI data [60][61][26]; MCP 2026-07-28 revision [68][69][41]; AGENTS.md/Agentic AI Foundation [63][64]; agent skills; context engineering; cost/reliability and observability tooling · Core/Senior.
- §14 — Vite 8 and Rolldown 1.0 specifics [70][71]; Node version managers, Corepack; documentation/DX · Core.
- §17 (new section) — compliance, privacy and product infrastructure: GDPR mechanics, cookie consent, CRA, PCI DSS scope, billing/tax, admin tooling, AI regulation awareness · Core/Senior/Situational · category the audit flagged as absent.
- §18 — stack table restored (truncated in one draft) and extended with local-first, BaaS, monolith-first and Python-adjacent stacks.

**Corrected/Reconciled:**
- Merged three source drafts (a first blueprint, a "Research-Final" version cut off mid-§4, and a complete "Research-Final" with §16 BaaS); the complete version was canonical, unique items from the others were folded in (e.g. the legacy-codebase note on Next.js caching, REST/GraphQL detail).
- Truncated PostGIS line at the end of the second draft completed (now under §4 Situational).
- The truncated Real-Time sentence was restored as: "SSE is the standard transport for streaming LLM responses — every AI chat UI streams tokens this way."
- **Temporal:** drafts said Stage 3; sources show Stage 4 in March 2026 with native Chrome 144 / Firefox 139 / Node 26 and Safari preview only [2][3][1]. One source dates Stage 4 to 2025; the March 2026 date appears in multiple sources and was kept.
- **TypeScript 7:** drafts said "~3x faster per Prisma"; sources report 8–12x full-build speedups at GA in July 2026 [8][9][10].
- **Next.js:** "four cache layers" demoted to a legacy-codebase note; Cache Components, `"use cache"`, `proxy.ts` and Turbopack default added as the current model [11][15].
- **OWASP:** drafts listed the 2021 categories; replaced with the Top 10:2025 list and SSRF folded into A01 [48][50][49].
- **Supply chain:** drafts said "170+ npm + 2 PyPI (May 2026)"; corrected to the two May 2026 waves (160–172 packages on 11–12 May; 314 packages / 637 versions on 19 May) and the campaign total (1,055 versions across 502 packages), and added that attested provenance was forged or valid for some malicious versions, so provenance is necessary but not sufficient [34][35][54].
- **MCP:** drafts cited spec 2025-11-25 as current; the 2026-07-28 revision is final and removes sessions [68][69][41].
- **Stack Overflow:** database and tool rankings updated to the 2026 survey (published 6 October 2026, 30,903 responses) [6][60]; the 2025 figures that remain (Docker, AWS, Kubernetes, Terraform, Cloudflare, Vercel, FastAPI) are labelled with their year.
- **Drizzle vs Prisma:** sources disagree on the crossover date (late 2025, early 2026, May 2026) and on exact weekly downloads (e.g. 5.1M vs 4.3M in one draft; 18.3M vs ~11.7M in an October 2026 snapshot); all agree Drizzle is ahead, so the body states the direction only [27][28]. Prisma 8 is an RC and Drizzle is still 0.45.x as of October 2026 [27].
- **Playwright downloads:** the draft's "83M by Q3 2026" had no support; replaced with sourced ranges (33–35M early 2026; ~52M May 2026) and a note that figures vary with the package counted [44][45].
- **Auth:** Auth.js demoted from Core auth provider to maintenance mode; Better Auth is the recommended path for new projects [29].
- **shadcn/ui:** "Base UI default since mid-2026" kept and dated to July 2026 [17][18].
- **Tier moves:** Node internals (Streams, AsyncLocalStorage, worker threads) → [Senior]; durable execution/outbox/saga → [Senior]; AG Grid, Tiptap and charting libraries → [Situational] (frequent in enterprise postings but not baseline); MongoDB stays [Core] only for MERN-targeted roles; vector databases moved from "standard" to [Senior]; AI-assisted development and AI SDK stay [Core]; MCP stays [Senior]; supply-chain security moved up in priority (Core competency) while its detailed practices sit under the [Core] security block.
- Terminology: "Motion (formerly Framer Motion)", "Prisma 7/8", "Better Auth (formerly the Auth.js maintainers' successor project)" normalized to one canonical name each; cross-section duplicates (RBAC, SSE, CDN) retained in the keyword list only where they are separate ATS terms.
- Meta-commentary ("absent from prior drafts", "NEW", "what changed") removed from the body and relocated here.

**Flagged [unverified]:**
- Stack Overflow 2025 figures: Docker 71.1% (+17pp), AWS 43.3%, Kubernetes 28.5%, Terraform 17.8%, Cloudflare 20.1%, Vercel 10.6%, Azure 26.3%, GCP 24.6%, FastAPI 14.8% (+5pp), 84% AI use, 51% daily, 66% "almost right" — carried from the older drafts; the 2026 survey did not surface comparable infrastructure figures in this pass.
- GitHub Actions usage (62% personal / 41% org), REST used by 85% of organizations, average breach cost $4.44M, 91.2% of employers rank problem-solving first, 82% of listings require Agile, Java full-stack demand claim.
- Platform engineering figures: Backstage ~89% IDP market share, 3,400+ adopters, 94% of organizations adopting platform teams, ~10% internal adoption, 6–12 months to stand up.
- Sentry ~3.2M and OpenTelemetry ~4.8M weekly downloads; Vitest "+14pp YoY, tied with Playwright"; Oxlint "50–100x faster"; Playwright 94% retention and 92% vs 72% stability.
- Shai-Hulud original wave sizes (500+ packages in September 2025; ~800 in November 2025) and the CISA/Unit 42/Microsoft sources were not re-fetched in this pass.
- Prisma 7 specifics (pure-TypeScript client, ~1.6MB, edge support), Drizzle rename-to-drop+add data-loss hazard under strict mode, PlanetScale backing of Drizzle, Drizzle production users — carried from older drafts.
- Supabase adoption/valuation/pricing and "40–60% cheaper than Firebase"; local-first engine latency numbers and pricing; Vercel AI SDK 6 adoption figures and API names beyond what the release tracker confirms.
- Vercel AI SDK 6 API surface (`ToolLoopAgent`, `needsApproval`, `Output.object()`, `rerank()`, `@ai-sdk/devtools`) taken from vendor/third-party articles; always check the installed version's docs [65].
- Node 26 LTS promotion on 28 October 2026 — one source states it has happened, another reads as scheduled; confirm on nodejs.org [21][22].
- State of JS 2025 sub-figures not visible on the pages fetched: TypeScript 40% exclusive / 6% plain JS, React 83.6% usage, Hono and Bun S-tier satisfaction, Solid 5-year satisfaction lead, Zustand/Redux download trajectories, 34% of React devs using no state library, 75.5% Redux usage.
- State of JS 2025 publication date: the official site gives 3 February 2026; secondary articles say March; the survey figures (13,002 responses) are consistent [4][5].

**Sources Added:**

New this revision (searched/fetched on 1 Nov 2026): [1], [2], [3], [6], [7], [8], [9], [10], [11], [13], [14], [15], [17], [18], [21], [22], [23], [24], [26], [27], [28], [29], [31], [34], [35], [41], [42], [43], [44], [45], [48], [49], [50], [54], [57], [58], [59], [60], [61], [63], [64], [65], [68], [69], [70], [71] — each with its URL in the Sources list above.

Carried from the older drafts and not re-verified in this pass: [12], [16], [19], [20], [25], [30], [32], [33], [36], [37], [38], [39], [40], [46], [47], [51], [52], [53], [55], [56], [62], [66], [67], [72], [73], [74], [75], [76], [77], [78], [79] — claims resting on them are tagged `[unverified — confirm source]` where they are numeric or time-sensitive.

Retained and re-checked: [4] State of JS 2025 home, [5] InfoQ State of JS summary.
