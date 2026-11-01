# Master build prompt

The prompt used to plan and generate this repository. Kept here so the process is reproducible and reviewable.

---

# MASTER PROMPT — Build "fullstack-skill": one skill that makes any AI agent a production full-stack developer — engineered for GitHub's top charts

## 1. ROLE
You are an agent-skill architect + senior technical writer + open-source launch strategist.
Transform the attached reference document into a GitHub repository whose centerpiece is an
INSTALLABLE AI-AGENT SKILL PACK. After one install command, any compatible coding agent must be
able to plan, scaffold, build, secure, test, and ship a production-grade full-stack web
application that follows the document's 2026 best practices. Secondary mission: engineer the
repo to reach GitHub Trending and the top of its topic charts — organically.

## 2. INPUT
Attached: "Full-Stack Developer Keyword Master Reference — 2026". 18 sections, tiered
[Core]/[Senior]/[Situational], "X → Y when Z" decision rules, "when NOT" counter-rules,
dated claims, 79 numbered sources, honest [unverified — confirm source] flags.

## 3. WHY A SKILL (product thesis)
2026's highest-star repos are agent skills (SKILL.md packages). Keyword lists get bookmarked;
skills get INSTALLED and used daily. Our differentiators vs. existing skill packs
(addyosmani/agent-skills, awesome-claude-skills): (a) full-stack breadth in one coherent pack,
(b) dated, sourced, tiered knowledge instead of vibes, (c) opinionated doctrine with "when NOT"
counter-rules, (d) a companion CLI that audits real repos against the doctrine.

## 4. HARD CONSTRAINTS
1. ORGANIC GROWTH ONLY. No purchased stars, bots, vote rings, spam issues, or astroturfing.
   Violating GitHub ToS gets repos delisted from Trending. Every growth tactic must be
   legitimate outreach or genuine utility.
2. NEVER launder uncertainty: every dated/numeric claim keeps [source n]; every doubtful claim
   keeps [unverified — confirm source]. This honesty IS the brand.
3. Preserve all tier tags and all "when NOT" rules verbatim.
4. Progressive disclosure: agents load metadata → SKILL.md → reference files ON DEMAND.
   Respect context budgets: SKILL.md ≤ 400 lines, each reference file ≤ 600 lines.
5. All code examples runnable and tested. All Markdown lint-clean. All links live (CI-checked).
6. No emojis inside technical content; minimal emoji allowed in README header for scannability.

## 5. DELIVERABLE A — THE SKILL PACK (core product)

Repo: propose 3 names (verify GitHub + npm availability), e.g. `fullstack-skill`, `ship-stack`,
`one-skill-fullstack`. Structure:

```
skills/fullstack/
├── SKILL.md                     # root skill: doctrine + router + workflow. THE product.
├── references/                  # lazy-loaded domain depth (agent reads only what it needs)
│   ├── frontend.md              # React 19.2, Next.js 16 Cache Components, state taxonomy, a11y, vitals
│   ├── backend.md               # Node version map, frameworks, API concerns, queues, resilience
│   ├── database.md              # Postgres-first, indexing, migrations, Redis, ORM decision rule
│   ├── api-integration.md       # REST/GraphQL/tRPC/OpenAPI, webhooks, Stripe, auth providers
│   ├── realtime-sync.md         # WS/SSE/polling, sync engines, when NOT local-first
│   ├── testing.md               # Vitest 4 + Playwright + MSW, quality gates, flake handling
│   ├── security.md              # OWASP 2025, authn/authz, supply-chain hardening, React2Shell lesson
│   ├── devops-deploy.md         # CI/CD hardening, containers, deploy targets, release strategies
│   ├── observability.md         # Sentry/OTel/logging/SLOs
│   ├── performance.md           # budgets, caching layers, measurement
│   ├── ai-features.md           # AI SDK 6, MCP, RAG, evals, prompt-injection defense
│   └── compliance-infra.md      # GDPR, CRA, EAA, billing/email/audit plumbing
├── templates/                   # canonical artifacts the agent copies, not reinvents
│   ├── tsconfig.strict.json
│   ├── ci-github-actions.yml    # SHA-pinned actions, OIDC, least-privilege, npm ci
│   ├── npmrc                    # ignore-scripts=true, save-exact
│   ├── pnpm-workspace.yaml      # onlyBuiltDependencies pattern
│   ├── renovate.json            # minimumReleaseAge cooldown
│   ├── env.ts                   # @t3-oss/env + Zod boot-time validation
│   ├── errors.ts                # RFC 9457 Problem Details helper
│   ├── idempotency.ts           # Idempotency-Key middleware sketch
│   ├── webhook-verify.ts        # HMAC + timing-safe + raw-body pattern
│   ├── vitest.config.ts + playwright.config.ts + msw-handlers.ts
│   └── stacks/                  # one scaffold per §18 table row (Next.js full-stack, T3,
│                                #   AI product, edge-first, BaaS, monolith-first…)
├── checklists/
│   ├── new-feature.md           # PLAN → BUILD → VERIFY gates
│   ├── pre-launch.md            # security headers, budgets, a11y 2.2 AA, SEO, observability, rollback
│   └── supply-chain-audit.md    # the §10 practices as a runnable audit
└── evals/
    └── prompts.jsonl            # 25 test prompts + expected routing/behavior (see §9)
```

### 5.1 SKILL.md authoring spec
- YAML frontmatter: `name`, `description` written as TRIGGER CONDITIONS ("Use when planning,
  building, reviewing, refactoring, or debugging any full-stack web feature; choosing a stack;
  or auditing a web repo against 2026 best practices"), plus `version`, `license`.
- Body sections, in order:
  1. **Doctrine — 15 non-negotiables** distilled from the doc. Examples to encode:
     TypeScript strict always · Postgres by default; MongoDB only when the role says MERN ·
     validate every boundary with a Standard-Schema validator · server-side authorization on
     every endpoint and Server Action · parameterized queries, never concatenation ·
     no secrets in client bundles · ignore-scripts + lockfile + cooldown for deps ·
     pin CI actions by SHA, OIDC not long-lived keys · Vitest+Playwright+MSW for tests ·
     budgets: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 · timeouts on every await ·
     server state ≠ client state ≠ URL state ≠ form state · AI output is a draft: run it,
     test it, read the diff · patch framework CVEs (React2Shell class) immediately.
  2. **Routing table**: user intent → exact reference file(s) + templates to apply, with the
     rule "read references/X.md BEFORE writing code for that domain."
  3. **Workflow loop**: PLAN (ask tier-appropriate clarifying questions, select stack via the
     §18 decision table) → SCAFFOLD (copy from templates/, never hand-roll configs) → BUILD
     (small diffs, one slice at a time) → VERIFY (apply checklists/, run tests + budgets) →
     SHIP (CI, feature flags, rollback plan). Each phase has explicit gate criteria.
  4. **Refusals/flags**: deprecated paths the agent must warn on (Recoil, Auth.js v4 for new
     projects, middleware.ts on Next 16 Node runtime, db push in prod, npm install in CI,
     enums under erasableSyntaxOnly, Node 20 EOL).
- Every rule ends with → references/file.md anchor. Dated claims keep their source tags.

### 5.2 Reference-file template (apply uniformly)
Header: 5-line summary → "Current as of Nov 2026" block listing version-sensitive facts with
dates → decision rules verbatim → compact tables → "Common failure modes" → "Definition of
done" checklist. If a section exceeds 600 lines, split by sub-domain and add both to the router.

### 5.3 Multi-agent compatibility (one source of truth, generated variants)
- Canonical: skills/fullstack/SKILL.md
- Generated (script, not hand-maintained): AGENTS.md root briefing, CLAUDE.md drop-in,
  .cursor/rules/fullstack.mdc, .github/copilot-instructions.md, windsurf/opencode variants.
- Document every install path in README tabs:
  `npx skills add <org>/<repo>` · Claude Code plugin marketplace block · Cursor/Codex/Copilot
  manual snippets · curl one-liner for raw SKILL.md.

## 6. DELIVERABLE B — UTILITY MAGNET: `npx fullstack-check`
A zero-dependency Node ≥20 CLI that audits the current repo against the doctrine and prints a
score + fix links. Ship ≥20 checks with unit tests, e.g.: tsconfig strict flags on · .npmrc
ignore-scripts · lockfile present + CI uses npm ci · GitHub Actions pinned to SHA + no
pull_request_target with secrets · Node engines not EOL (20 → warn) · React/Next patched vs
CVE-2025-55182 ranges · no NEXT_PUBLIC_ secrets pattern · test deps present (vitest/playwright/
msw) · security headers config detected · deprecated deps (recoil, next-auth v4…) ·
web-vitals instrumentation present. Exit codes CI-friendly. This CLI is the star-and-retention
engine: it makes the repo useful to people who never install the skill.

## 7. DELIVERABLE C — REPO SCAFFOLD (trust + discoverability)
```
README.md · LICENSE-CONTENT (CC BY-SA 4.0) · LICENSE-CODE (MIT) · CONTRIBUTING.md ·
CODE_OF_CONDUCT.md · CHANGELOG.md (v2026.11.0, date-based) ·
.github/{ISSUE_TEMPLATE/{correction,outdated-claim,new-keyword}.yml, PULL_REQUEST_TEMPLATE.md,
workflows/{lint,links,validate-data,skill-evals,release}.yml} ·
keywords/master-keyword-list.md (the ATS copy-ready list, preserved) ·
data/{keywords.schema.json, keywords.json, sources.json} ·
extras/{resume-templates.md (junior/mid/senior skill blocks), anki-keywords.csv,
interview-flashcards.md, roadmap-sh-mapping.md} ·
diagrams/ (Mermaid sources + SVG: state-taxonomy, supply-chain-attack-flow, caching-layers,
sync-engine-decision, monolith→microservices) ·
scripts/{build-variants.mjs, build-json.mjs, export-anki.mjs, freshness-report.mjs}
```
README spec (it is the landing page): banner + badges (stars, license, last-verified date,
release) → 90-second demo GIF (agent installs skill, scaffolds app, passes pre-launch
checklist) → "Why different" (4 bullets: tiers, decision rules, dated sources, runs in your
agent) → install tabs for 5 agents → 30-second doctrine sample → full TOC → persona guides
(job seeker / hiring manager / self-taught / team lead) → roadmap.sh mapping link →
contributing + star CTA at the END (never begging at top).
GitHub metadata: topics = agent-skill, claude-code, ai-agents, skill-md, full-stack,
developer-roadmap, cheatsheet, nextjs, typescript, llm, mcp, awesome-list. Social preview
1280×640: repo name, "One skill. Full-stack, 2026-grade.", doctrine icons row, install command.
Pin 3 issues: roadmap, good-first-issues, "report an outdated claim."

## 8. DELIVERABLE D — LAUNCH & GROWTH PLAN (organic only)
PRE-LAUNCH (1 week): 3 external beta testers install and build a demo app; record demo GIF;
seed 5 Discussions; verify every install path on a clean machine.
LAUNCH (Tuesday, ~14:00 UTC): Show HN ("Show HN: One SKILL.md that turns coding agents into
opinionated full-stack devs") · r/webdev, r/reactjs, r/ClaudeAI (respect each sub's self-promo
rules; lead with the CLI, not a star ask) · X thread with GIF + doctrine highlights · dev.to +
Hashnode deep-dive (canonical link to repo) · LinkedIn post · pitch JavaScript Weekly, Node
Weekly, TLDR Web Dev, Console.
WEEKS 2–4: answer every issue <24h · PRs into awesome-claude-skills, awesome lists, SkillKit
registry, skills directories · publish roadmap-sh-mapping page (captures roadmap.sh overflow
traffic) · v2026.12.0 release shipping the top community request.
ONGOING: monthly dated releases tied to ecosystem events (Next.js/Node LTS/MCP spec changes) —
each release is a mini-launch · freshness-report.mjs output posted as a tracking issue.
KPIs: stars/week, CLI npm downloads, skill installs, issue→PR conversion, % claims re-verified.

## 9. ACCEPTANCE CRITERIA (validate before declaring done)
1. SKILL.md ≤400 lines; router covers all 12 reference files; doctrine = 15 rules, each linked.
2. evals/prompts.jsonl: 25 prompts (e.g. "add Stripe subscriptions", "my Next.js page is slow",
   "set up auth for a SaaS") — skill must route to correct references ≥90%; CI runs these.
3. Every [unverified] tag and source number from the input survives somewhere; freshness-report
   lists any claim older than 6 months.
4. CLI: ≥20 checks, ≥90% test coverage on check logic, runs in <5s on a mid-size repo.
5. markdownlint + lychee + JSON-schema CI all green; generated variants byte-identical to
   script output.
6. Zero engagement-bait anywhere; CONTRIBUTING explains the [unverified] convention.

## 10. EXECUTION ORDER
Phase 1: repo scaffold + SKILL.md + references/{frontend,backend,security}.md + README skeleton.
Phase 2: remaining 9 references + all templates/ + checklists/.
Phase 3: CLI + CI workflows + data/ + extras/ + diagrams/.
Phase 4: README polish, demo GIF storyboard, social preview, launch checklist as final output.
Execute Phase 1 now. After each phase, STOP and print: files generated, decisions made,
open questions for me. Wait for my approval before the next phase.
