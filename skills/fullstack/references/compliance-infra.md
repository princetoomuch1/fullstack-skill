# Compliance, Privacy & Product Infrastructure

- GDPR mechanics, cookie consent, accessibility law, EU CRA, SBOM, billing, email, audit logs, and the common stack table.

> Part of the `fullstack` skill. Tier tags: [Core] baseline, [Senior] mid/senior, [Situational] on demand. Numbered citations [n] resolve in [SOURCES.md](SOURCES.md). Items tagged `[unverified — confirm source]` could not be re-verified; do not present them as fact.

## Current as of November 2026

- EAA enforceable 28 Jun 2025. CRA reporting from 11 Sep 2026.

## 17. Compliance, Privacy & Product Infrastructure

**Privacy law mechanics [Core]:** GDPR — lawful basis, data minimization, DPA/processor agreements, DSAR handling (access, portability), **right to erasure** (deletion jobs across DB, backups policy, search index, analytics, vendors), breach notification (72 hours), cross-border transfers (SCCs), records of processing · **cookie consent / ePrivacy:** consent management platform (CMP), granular opt-in, no pre-ticked boxes, consent logging, Google Consent Mode v2, cookieless analytics (Plausible, PostHog) · privacy policy, ToS, DPA pages · CCPA/CPRA, children's privacy (COPPA) [Situational] · India DPDP Act 2023 [Situational]

**Accessibility law [Core]:** EAA (EU, enforceable 28 June 2025), ADA/Section 508 (US), WCAG 2.2 AA, EN 301 549, accessibility statement page → §2

**Cyber law & standards [Senior]:** **EU Cyber Resilience Act** — reporting of actively exploited vulnerabilities and severe incidents from 11 September 2026 (24-hour early warning, 72-hour notification), SBOM-backed technical documentation and full obligations from 11 December 2027; SBOM readiness is needed before the formal mandate to meet the 24-hour window [57][58] · SOC 2 Type II, ISO 27001, HIPAA, PCI DSS 4.0 (use hosted fields/Checkout to stay in SAQ A scope), vendor security questionnaires, security.txt · audit trails, access reviews, change management evidence

**Product infrastructure [Core]:** transactional email deliverability (SPF/DKIM/DMARC) §3, billing and invoicing (Stripe Billing, tax automation, GST/VAT handling), webhooks as events, feature flags and entitlements, audit logs, admin panels/back-office tooling (Retool, Refine, React Admin) [Situational], customer support tooling (Intercom, Crisp), analytics events taxonomy (tracking plan), data export, status page

**AI regulation [Situational]:** EU AI Act awareness, model/data provenance, user disclosure of AI output, human review of consequential decisions

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


## Definition of done

- [ ] Every [Core] item above that applies to this change was checked.
- [ ] Every decision rule ("X → Y when Z", "when NOT") that applies was followed or the deviation is written down.
- [ ] No `[unverified]` claim was stated as fact in code comments, docs, or the PR description.
