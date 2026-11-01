# Contributing

This repository's value is that its claims are current and honest. Corrections are the most valuable contribution.

## Ways to help

- **Report an outdated claim.** Use the "Outdated claim" issue form. Include the claim, the file, a primary source, and the date.
- **Report a correction.** Same form family; say what is wrong and what is right.
- **Propose a new keyword or rule.** Use the "New keyword" form. Say which tier ([Core], [Senior], [Situational]) and what evidence supports it.
- **Pull requests.** Small and focused. One topic per PR.

## The `[unverified — confirm source]` convention

- A numeric, dated, or ranking claim without a source we have actually checked keeps the tag `[unverified — confirm source]`.
- Do not remove the tag unless you add a verified source (and its number in `references/SOURCES.md`).
- Never present an unverified claim as fact in `SKILL.md`.

## Rules for edits

1. Keep tier tags and "when NOT" rules intact. If you change one, explain why in the PR.
2. Every dated or numeric claim carries a `[n]` citation that resolves in `references/SOURCES.md`.
3. `SKILL.md` stays at or under 400 lines; each reference file at or under 600 lines.
4. No engagement bait, no star requests in content files, no emojis in technical content.
5. Run `node scripts/check-skill.mjs` before opening a PR.

## Licensing

Content: CC BY-SA 4.0 (LICENSE-CONTENT). Code: MIT (LICENSE-CODE). By contributing you agree your contribution is licensed the same way.
