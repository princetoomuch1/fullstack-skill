---
name: fullstack
description: Use when planning, building, reviewing, refactoring, debugging, or shipping any full-stack web feature; when choosing a stack (Next.js, Node, Postgres, auth, payments, AI features); or when auditing a web repo against 2026 best practices for security, testing, performance, accessibility, and deployment.
version: 2026.11.0
license: MIT (code) AND CC-BY-SA-4.0 (content)
---

# fullstack — production full-stack doctrine, November 2026

This skill makes you build web applications the way a careful senior engineer would in late 2026: opinionated defaults, dated facts, and explicit "when NOT" rules.

How to use it:

1. Read the **Doctrine** below. It always applies.
2. Use the **Router** to find the reference file for the domain you are about to touch. **Read that file BEFORE writing code for that domain.**
3. Follow the **Workflow**. Do not skip the gates.
4. Obey **Flags**. They are things you must warn about, not silently accept.

Tier tags in the references: **[Core]** baseline, **[Senior]** mid/senior expectation, **[Situational]** only when the role or stack demands it. Numbered citations [n] resolve in `references/SOURCES.md`. Anything tagged `[unverified — confirm source]` must not be stated as fact; say it is unverified.

## Doctrine — 15 non-negotiables

1. **TypeScript strict, always.** `strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax`. → references/frontend.md (TypeScript)
2. **Postgres by default.** MongoDB only when the role or codebase is MERN. Money in integer minor units; `timestamptz` always. → references/database.md
3. **Validate every boundary** (API input, env vars, URL params, webhook bodies, LLM output) with a Standard-Schema validator such as Zod. Types are compile-time only. → references/backend.md (API implementation concerns)
4. **Authorize on the server, on every endpoint and Server Action**, at object level (BOLA/IDOR), deny by default. Never trust the client. → references/security.md (Authorization)
5. **Parameterized queries only.** Never concatenate SQL. Never leak ORM entities in responses. → references/security.md, references/backend.md
6. **No secrets in client bundles or code.** `NEXT_PUBLIC_*` is public. Validate env at boot. → references/security.md (Secrets), references/devops-deploy.md
7. **Install dependencies defensively:** `ignore-scripts`, frozen lockfile in CI (`npm ci`), exact pins for critical packages, a release-age cooldown, allowlist build scripts. → references/security.md (Software supply chain)
8. **CI is hardened:** third-party Actions pinned by SHA, least-privilege `permissions:`, OIDC instead of long-lived cloud keys, no `pull_request_target` with untrusted code. → references/devops-deploy.md
9. **Test with Vitest + Playwright + MSW.** Test behavior, not implementation. Deterministic tests; retries only with trace capture. → references/testing.md
10. **Performance budgets are requirements:** LCP <= 2.5s, INP <= 200ms, CLS <= 0.1. Measure with field data, not only lab. → references/performance.md, references/frontend.md
11. **Timeouts on every await** that leaves the process. Retries are bounded, jittered, and only on idempotent operations. → references/backend.md (Resilience)
12. **Server state is not client state is not URL state is not form state.** Use the right tool for each. → references/frontend.md (State)
13. **Accessibility is WCAG 2.2 AA minimum** (EAA is enforceable in the EU since 28 June 2025). → references/frontend.md (Accessibility), references/compliance-infra.md
14. **AI output is a draft.** Run it, test it, read the diff. Treat model, retrieved, and tool output as untrusted input. → references/ai-features.md
15. **Patch framework CVEs immediately** (React2Shell class: unauthenticated RCE via RSC Flight deserialization). Pin and update `react-server-dom-*` and Next.js. → references/security.md

## Router — read the file BEFORE you write code in that domain

| User intent (examples) | Read first | Also apply |
|---|---|---|
| Build or change UI, pages, components, forms, state, styling, SEO, i18n, a11y | references/frontend.md | references/performance.md |
| "My page is slow", Core Web Vitals, bundle size, caching | references/performance.md | references/frontend.md, references/observability.md |
| API routes, services, jobs, queues, email, multi-tenancy | references/backend.md | references/database.md, references/security.md |
| Schema design, queries, migrations, indexes, Redis, ORM choice, vector search | references/database.md | references/backend.md |
| REST/GraphQL/tRPC/OpenAPI, webhooks, Stripe, auth provider, CMS, third-party APIs | references/api-integration.md | references/security.md |
| Live updates, chat, presence, streaming, offline, sync engines | references/realtime-sync.md | references/backend.md, references/ai-features.md (streaming) |
| Write or fix tests, flaky tests, CI test setup, quality gates | references/testing.md | references/devops-deploy.md |
| Auth, sessions, permissions, OWASP, dependency risk, supply chain, hardening | references/security.md | references/api-integration.md |
| CI/CD, Docker, deploy target, IaC, feature flags, rollback | references/devops-deploy.md | references/security.md, references/observability.md |
| Logging, errors, tracing, alerts, SLOs, incidents | references/observability.md | references/devops-deploy.md |
| LLM features, RAG, agents, MCP, AI SDK, evals, AGENTS.md | references/ai-features.md | references/security.md |
| GDPR, cookie consent, CRA, SBOM, billing, audit logs, stack selection | references/compliance-infra.md | references/security.md |

If a task spans domains, read every row it touches. If no row fits, say so and fall back to the Doctrine.

## Templates and checklists — copy, do not reinvent

Copy from `templates/` instead of hand-rolling configs. Adapt names and paths; keep the security-relevant settings.

| Need | Copy |
|---|---|
| Strict TypeScript | templates/tsconfig.strict.json |
| Defensive installs | templates/npmrc, templates/pnpm-workspace.yaml, templates/renovate.json |
| Hardened CI | templates/ci-github-actions.yml |
| Env validation at boot | templates/env.ts |
| RFC 9457 errors | templates/errors.ts |
| Idempotency-Key handling | templates/idempotency.ts |
| Webhook signature verification | templates/webhook-verify.ts |
| Test setup | templates/vitest.config.ts, templates/playwright.config.ts, templates/msw-handlers.ts |
| Stack scaffold | templates/stacks/<stack>.md: nextjs-fullstack, t3-style, ai-product, mern, enterprise-java, enterprise-dotnet, edge-first, content-astro, local-first, baas-rapid, monolith-first, python-ml-adjacent |

Gates use `checklists/`: new-feature.md (PLAN/BUILD/VERIFY), pre-launch.md (before first production traffic), supply-chain-audit.md (dependency and CI posture).

`evals/prompts.jsonl` holds 25 routing prompts for checking that this skill sends an agent to the right references.

## Workflow — PLAN, BUILD, VERIFY, SHIP

**1. PLAN** — Gate: you can state, in five lines or fewer, the goal, the constraints, the chosen stack, and the riskiest assumption.
- Ask only the clarifying questions whose answers change the design (auth model, tenancy, data residency, scale, team skills). Do not interrogate.
- Choose the stack with the table in `references/compliance-infra.md` (Common Stack Combinations). Default for a new web app: Next.js 16 (App Router) + TypeScript + Tailwind v4 + shadcn/ui + Drizzle or Prisma + PostgreSQL + Better Auth or Clerk.
- Name every decision rule you are applying (for example "Drizzle → edge or small bundles; Prisma → DX-first teams").

**2. BUILD** — Gate: each slice compiles, passes its own tests, and is a small reviewable diff.
- Scaffold from `templates/` (see above); never hand-roll security-relevant configs.
- Work in vertical slices (one user-visible behavior at a time), not layers.
- Prefer existing project conventions over the defaults here when they conflict and the project's choice is safe. State the deviation.
- Read the installed version's docs for fast-moving libraries (Vercel AI SDK, Next.js, MCP SDKs) instead of writing APIs from memory.

**3. VERIFY** — Gate: tests green, types green, lint green, budgets met, and every applicable Doctrine rule checked.
- Walk `checklists/new-feature.md`. Run the tests you wrote and the existing suite. Run `tsc --noEmit`.
- Check the security and a11y items that apply to the change. Check that no `[unverified]` claim leaked into code comments or docs as fact.
- For UI work, look at it in a browser at mobile and desktop widths.

**4. SHIP** — Gate: rollback path is known and observability is in place.
- `checklists/pre-launch.md` for first production traffic. CI passes with pinned actions. Migrations are expand-and-contract and backward compatible.
- New risky behavior sits behind a feature flag. Errors and Web Vitals are reported. Document how to roll back.

## Flags — warn, do not silently comply

Raise these to the user before proceeding. If they confirm, proceed and record the decision.

- **Recoil** (archived by Meta) → use Jotai or Zustand.
- **Auth.js / NextAuth for a new project** → maintenance mode; Better Auth is the recommended path (stateless DB-less sessions is the main gap).
- **`middleware.ts` on Next.js 16** → `proxy.ts` (Node runtime); `middleware.ts` is Edge-only and deprecated.
- **`db push` against production** → versioned migrations only.
- **`npm install` in CI** → `npm ci` (or frozen lockfile).
- **TypeScript `enum`, namespaces, parameter properties** when `erasableSyntaxOnly` or Node type stripping is in use → const objects and plain classes.
- **Node 20** (end of life 30 April 2026) → Node 22+ (24 LTS recommended; 26 once LTS is confirmed).
- **Unpatched React/Next.js RSC versions** (CVE-2025-55182) → 19.0.1 / 19.1.2 / 19.2.1 or later.
- **Attested provenance treated as proof of safety** → necessary, not sufficient (Mini Shai-Hulud, May 2026).
- **Floats for money, local time in the database, secrets in `NEXT_PUBLIC_*`, unbounded awaits.**
- **"shadcn/ui (Radix)" assumed** → check which primitive layer the project uses; APIs differ (Base UI is the default for new projects since July 2026).

## Honesty rules (these are part of the product)

- Dated or numeric claims keep their `[n]` source. Claims tagged `[unverified — confirm source]` are reported as unverified, never as fact.
- If a reference says "when NOT", obey it. If you break it, say why.
- If the reference is older than six months relative to today's date, tell the user the facts may have moved and verify the version-sensitive ones (framework majors, Node LTS, spec revisions, CVE ranges) before relying on them.
