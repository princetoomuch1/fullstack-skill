# Changelog

Date-based versions: `vYYYY.MM.N`. Each release is tied to ecosystem changes (framework majors, Node LTS, spec revisions, CVEs).

## v2026.11.1 - 2026-11-01

- `templates/`: strict tsconfig, `.npmrc`, pnpm workspace (build-script allowlist, release-age cooldown), Renovate config, hardened CI workflow, env validation, RFC 9457 helpers, Idempotency-Key middleware, webhook verification, Vitest/Playwright/MSW configs.
- `templates/stacks/`: 12 stack guides (one per row of the stack table).
- `checklists/`: new-feature, pre-launch, supply-chain-audit.
- `evals/prompts.jsonl`: 25 routing prompts (structural validation only; no model scoring yet).
- `SKILL.md` and `scripts/check-skill.mjs` extended to cover the new assets.

## v2026.11.0 - 2026-11-01

Initial release.

- `skills/fullstack/SKILL.md`: 15-rule doctrine, intent router, PLAN/BUILD/VERIFY/SHIP workflow with gates, deprecation flags.
- 12 reference files split from the 2026 full-stack reference, with tier tags, decision rules, "when NOT" rules, numbered sources and `[unverified — confirm source]` flags preserved.
- `keywords/master-keyword-list.md`: copy-ready ATS keyword list.
- `docs/full-reference-2026.md`: the complete source document, including revision notes.
- `scripts/check-skill.mjs`: structural validation (line budgets, routing coverage, citation resolution, doctrine count).

Not yet shipped at this release: `templates/`, `checklists/`, `evals/`, the `fullstack-check` CLI, generated multi-agent variants (templates, checklists and evals arrived in v2026.11.1).
