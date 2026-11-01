# APIs & Integration

- REST, GraphQL, tRPC, OpenAPI, webhooks, payments, auth providers, email, CMS, API governance.
- Verify webhook signatures on the raw body, timing-safe; process async; dedupe by event ID.

> Part of the `fullstack` skill. Tier tags: [Core] baseline, [Senior] mid/senior, [Situational] on demand. Numbered citations [n] resolve in [SOURCES.md](SOURCES.md). Items tagged `[unverified — confirm source]` could not be re-verified; do not present them as fact.

## Current as of November 2026

- Auth.js is now maintained by the Better Auth team; Better Auth recommended for new projects (Sep 2025).

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


## Definition of done

- [ ] Every [Core] item above that applies to this change was checked.
- [ ] Every decision rule ("X → Y when Z", "when NOT") that applies was followed or the deviation is written down.
- [ ] No `[unverified]` claim was stated as fact in code comments, docs, or the PR description.
