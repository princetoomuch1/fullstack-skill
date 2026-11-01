# fullstack

**One skill. Full-stack, 2026-grade.**

An installable skill pack that makes a coding agent plan, build, secure, test, and ship web applications the way a careful senior engineer would in late 2026. Opinionated defaults, dated facts with sources, and explicit "when NOT" rules.

![License: MIT + CC BY-SA 4.0](https://img.shields.io/badge/license-MIT%20%2B%20CC%20BY--SA%204.0-blue)
![Last verified: 2026-11-01](https://img.shields.io/badge/last%20verified-2026--11--01-brightgreen)
![Release: v2026.11.0](https://img.shields.io/badge/release-v2026.11.0-informational)

## Why this is different

- **Tiered.** Every item is tagged `[Core]`, `[Senior]` or `[Situational]`, so the agent knows what is baseline and what is on-demand.
- **Decision rules, not lists.** "Drizzle → edge or small bundles; Prisma → DX-first teams." "When NOT: simple CRUD does not need a sync engine."
- **Dated and sourced.** Version-sensitive facts say "as of November 2026" and carry numbered sources. Claims we could not verify are tagged `[unverified — confirm source]` instead of being passed off as fact.
- **Runs inside your agent.** A short `SKILL.md` (doctrine, router, workflow) loads first; the 12 reference files load only when the task touches that domain.

## Install

Skill (works with agents that support `SKILL.md` packages):

```bash
npx skills add princetoomuch1/fullstack-skill
```

Manual (any agent): copy `skills/fullstack/` into your agent's skills directory (for Claude Code: `.claude/skills/fullstack/`), or paste `skills/fullstack/SKILL.md` into your project's `AGENTS.md` / `CLAUDE.md` and keep `references/` next to it.

Generated variants for Cursor, Copilot and others are on the roadmap below.

## What the agent learns (30-second sample)

> 3. Validate every boundary (API input, env vars, URL params, webhook bodies, LLM output) with a Standard-Schema validator such as Zod. Types are compile-time only.
> 4. Authorize on the server, on every endpoint and Server Action, at object level (BOLA/IDOR), deny by default.
> 7. Install dependencies defensively: `ignore-scripts`, frozen lockfile in CI, release-age cooldown, allowlisted build scripts.
> 15. Patch framework CVEs immediately (React2Shell class).

All 15 rules, the router and the workflow: [`skills/fullstack/SKILL.md`](skills/fullstack/SKILL.md).

## What is in the repo

| Path | What it is |
|---|---|
| [`skills/fullstack/SKILL.md`](skills/fullstack/SKILL.md) | The skill: doctrine, intent router, PLAN/BUILD/VERIFY/SHIP workflow, deprecation flags |
| [`skills/fullstack/references/`](skills/fullstack/references/) | 12 domain references: frontend, backend, database, api-integration, realtime-sync, testing, security, devops-deploy, observability, performance, ai-features, compliance-infra (+ `SOURCES.md`) |
| [`keywords/master-keyword-list.md`](keywords/master-keyword-list.md) | Copy-ready keyword list for resumes, job descriptions and ATS |
| [`docs/full-reference-2026.md`](docs/full-reference-2026.md) | The complete source document with revision notes |
| [`docs/MASTER_PROMPT.md`](docs/MASTER_PROMPT.md) | The build prompt for this repo, kept for reproducibility |
| [`skills/fullstack/templates/`](skills/fullstack/templates/) | Copy-in configs and code: strict tsconfig, defensive `.npmrc`/pnpm/Renovate, hardened CI, env validation, RFC 9457 errors, idempotency, webhook verification, Vitest/Playwright/MSW setup, and 12 stack scaffolds |
| [`skills/fullstack/checklists/`](skills/fullstack/checklists/) | new-feature, pre-launch, supply-chain-audit |
| [`skills/fullstack/evals/`](skills/fullstack/evals/) | 25 routing prompts |
| [`scripts/check-skill.mjs`](scripts/check-skill.mjs) | Validation: line budgets, routing coverage, citation resolution, doctrine count |

## Who it is for

- **Job seekers:** use the keyword list and the tier tags to see what is baseline versus nice-to-have.
- **Hiring managers:** the [Core]/[Senior] tiers double as a screening rubric.
- **Self-taught developers:** follow the references in router order; each ends with a definition-of-done checklist.
- **Team leads:** drop the skill into your agents so generated code follows one set of rules.

## Honest status

This is `v2026.11.1`. Shipped: the skill, 12 references, templates (the TypeScript templates are type-checked, and the idempotency and webhook helpers were exercised with runtime tests), 12 stack scaffolds (written as guides with start commands, not generated code), 3 checklists, 25 routing prompts, the keyword list, the source document, and the validation script. **Not yet shipped:** the `fullstack-check` audit CLI, an automated model-in-the-loop eval runner (the prompts are validated structurally and have not been scored against a model), generated per-agent variants, diagrams, and the demo GIF. Nothing in this README claims otherwise.

## Roadmap

1. `npx fullstack-check`: a zero-dependency CLI that audits a repo against the doctrine.
2. Eval runner that scores routing accuracy (target: at least 90% primary-reference hits) and publishes the result.
3. Generated variants: `AGENTS.md`, `CLAUDE.md`, Cursor rules, Copilot instructions.
4. Diagrams (state taxonomy, supply-chain attack flow, caching layers, sync-engine decision).
5. Demo GIF: install, scaffold, pass the pre-launch checklist.
6. Monthly dated releases tied to ecosystem changes (Next.js, Node LTS, MCP spec, CVEs).

## Contributing

Corrections and outdated-claim reports are the most valuable contributions. See [CONTRIBUTING.md](CONTRIBUTING.md), including the `[unverified — confirm source]` convention. If this saves you time, a star helps others find it.

## License

Content: CC BY-SA 4.0 ([LICENSE-CONTENT](LICENSE-CONTENT)). Code: MIT ([LICENSE-CODE](LICENSE-CODE)).
