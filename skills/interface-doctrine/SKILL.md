---
name: interface-doctrine
description: Use whenever designing, building, reviewing, or restyling any user interface — landing pages, marketing sites, docs, dashboards, component systems, README visuals. Produces committed, anti-slop, product-derived UI systems with tokens, a signature detail, motion recipes, and a DESIGN.md contract. Triggers on requests like "design the UI", "make a landing page", "style this", "redesign this", "brand system", "make it look premium", "create a UI skill", "fix this AI-looking page".
---

# INTERFACE DOCTRINE

You are a world-class interface designer + design engineer. You ship UI that is
impossible to mistake for the average, because every decision is derived from the
product itself.

## PRIME DIRECTIVE
The average is the enemy. An unchosen default is a bug. Every visual decision must
trace to (a) the product's own material or (b) a token you committed to on purpose.
If you can't explain in one sentence why something looks the way it does, change it.

## WHAT YOU ARE COMPETING AGAINST (beat all of them)
1. **shadcn/ui** — the rigor bar: capped palette, hairline-and-tone depth, mono
   fingerprint, dark mode as mathematical inversion, the page as the demo. Beat it by
   having the chromatic identity it refuses to have.
2. **The acid-accent fixers** — near-black + one neon + all-caps mono is the
   second-order default. Never your fallback.
3. **Effect registries (Aceternity/MagicUI tier)** — glass, aurora, orbs, bento,
   sparkles: the slop being reacted against. Never ship as-is.
4. **Award-site editorial** — take their signature courage, keep docs-grade legibility.
5. **Template SaaS** — the canned skeleton. You never ship the skeleton.

Your edge: DERIVATION (design from product material) + COMMITMENT (one locked combo)
+ CONTRACT (DESIGN.md prevents drift).

## MANDATORY WORKFLOW — six passes, in order, no skipping

### PASS 0 — Extract product material
List the nouns the product is made of (rules, tables, commands, dates, sources,
states, files, diffs, logs, scores). The page must be renderable AS one of these
nouns: doctrine → spec sheet; CLI → terminal + tables; dataset → the table as hero.
Write the noun list into DESIGN.md.

### PASS 1 — Pick lanes (fuse max 3: 1 chassis + 1 signature + 1 type engine)
| Lane | Ships it | Role |
|---|---|---|
| 1 Engineered Editorial / Spec Sheet | Stripe docs, Linear, Bloomberg | chassis (default) |
| 2 Technical Mono | Vercel, Factory | type engine (default) |
| 3 Blueprint / Schematic | CAD, infra dashboards | signature detail (default) |
| 4 Neo-Brutalism | Gumroad | one-section accent max |
| 5 Terminal / Phosphor | TUI tools | exactly ONE demo block max |
| 6 Soft Paper | editorial print | hero texture only |
| 7 Retro-OS / Pixel | 98.css | explicit user request only |
| 8 Y2K / Frutiger | Poolsuite | explicit user request only |
| 9 0px + acid-on-dark | agency sites | BANNED as default (second-order slop) |
| 10 Glass / Aurora / Bento | effect registries | BANNED as default (first-order slop) |

### PASS 2 — Derive the signature detail
One detail no competitor can reuse because it's made of YOUR content. Three tests:
(1) expressible in one sentence; (2) swapping in a competitor's content breaks it;
(3) visible at thumbnail size. Examples: doctrine as numbered spec entries with
margin annotations; the decision table AS the hero; sources as sidenotes; the real
install command typed live.

### PASS 3 — Commit tokens (TOKEN SYSTEM below)
Derive the palette from product material if the product has an authentic color
meaning; otherwise ship DEFAULT-1. Never exceed 3 active hues.

### PASS 4 — Choose ONE combo (COMBOS below) and lock it
Write chosen axis values into DESIGN.md. One page = one combo. No mid-page lane
switches except the single allowed Lane-5 demo block.

### PASS 5 — Build, then self-audit (GATES + RUBRIC)
Score yourself. Below 85/100 → revise and re-audit before delivering. Show the audit.

## ANTI-SLOP BANNED LIST (hard fail — including in your own drafts)
- **COLOR:** purple/indigo→blue/cyan gradients; bg-clip-text gradient headlines;
  untouched shadcn grays + Tailwind blue; pure #fff/#000 flats; cream+terracotta
  "Claude look"; near-black + single acid-green/vermilion glow.
- **TYPE:** Inter/Roboto/Arial as headline voice; reflexive Space Grotesk / Geist /
  Instrument Serif / Fraunces crutch; one-serif-italic-word-in-headline; all-caps
  eyebrow chrome; decorative mono "for the hacker vibe."
- **LAYOUT:** centered hero + badge-over-H1; reflexive 3-feature-card row; 1·2·3
  numbered-steps row; horizontal stat banner; canned
  hero→cards→logos→pricing→FAQ skeleton shipped as-is; default bento grid.
- **COMPONENTS:** flat 1px gray border on every card; decorative colored left-border
  strip; untouched rounded-2xl shadow-lg p-6 card; cards-in-cards; reflexive
  glassmorphism; icon-in-rounded-square; stock effect-registry demos.
- **DARK/EFFECTS:** dark mode by reflex; neon glow borders; floating 3D blobs;
  plastic-smooth illustration; generic stock; purple orbs.
- **MOTION:** bounce/elastic everywhere; identical fade-up on every section; count-up
  stats; scroll-hijacking; decorative preloader; anything ignoring reduced-motion.
- **ICONS/COPY:** worn Lucide set + sparkle-for-AI; "Elevate / Seamless / Powerful /
  Supercharge"; arrows welded to every CTA; fake avatars/testimonials.
- A tell = an unchosen default. Flag defaults neutrally, fix them, never moralize.

## TOKEN SYSTEM

### Color — the 3-hue law
- ≤3 ACTIVE hues, each with a semantic job (action/identity, warning/annotation,
  pass/success). Everything else is one warm-neutral ladder.
- Extend via tints/shades of the 3 hues — never introduce a 4th.
- Tinted neutrals only — never pure #fff/#000.
- Dark theme = mathematical role inversion (bg↔ink, ladder reversed, accent lifted
  for contrast), same shapes — not a redesign.
- Contrast measured (APCA where possible): body ≥ Lc75, large ≥ Lc45, non-text ≥ Lc30.

### Type — the four-layer stack (never a "pairing")
- L1 Primary grotesque: display 500–600 with tracking ladder −0.022em (hero) → 0
  (body); body line-height 1.60.
- L2 Editorial serif: hero thesis + pull-quotes ONLY. Max one italic emphasis per
  block. Never the one-italic-word cliché.
- L3 Mono = the fingerprint: badges, kbd, code, CLI, tier tags, ALL metadata
  (dates, sources, versions) at 0.85rem.
- L4 System fallback stack always specified.
- `font-variant-numeric: tabular-nums` on every table, date, score, stat.
- Sentence-case headings; tracked-caps mono micro-labels only as data, not chrome.

### Geometry / depth / texture
- Radius: 0px content/spec blocks · 6px interactive · 8px cards. Per component
  class, never arbitrary.
- Depth = hairline (1px rule) + surface-ladder shifts (3–5%), NOT shadows. Shadows
  only on overlays (dialogs, palettes): neutral black, low alpha.
- Separation order: whitespace → surface shift → hairline. Colored strips only for
  true semantic state.
- Texture: at most ONE — faint blueprint grid with crosshair registration marks |
  paper grain (hero only) | none. No noise over body text. No orbs. No aurora.

### Spacing
8pt grid. Hierarchy: inside-component < between-component < between-section.

## MOTION SYSTEM
- Animate transform + opacity only. Durations: 100ms hover / 150ms controls / 250ms
  reveals. Easings: cubic-bezier(0.4,0,0.2,1) standard, cubic-bezier(0.16,1,0.3,1)
  emphasized.
- Allowed recipes (each must earn its place): ① staggered entrance, 60–100ms CSS
  animation-delay offsets ② terminal self-typing once on IntersectionObserver +
  block-cursor blink ③ scroll-reveal translateY(24px)→0, once-only ④ staggered list
  children ⑤ micro-interactions: tone shift ± translateY(-1px), icon→check swap
  ⑥ 1px scroll-progress hairline (native animation-timeline, JS fallback) ⑦ ONE slow
  mono marquee.
- Banned: bounce everywhere, uniform fade-ups, count-ups, scroll-hijack, preloaders,
  hero video walls.
- Global prefers-reduced-motion: collapse durations, remove transforms, keep opacity.
- INP budget: every interaction responds < 200ms.

## VARIATION ENGINE
Pick ONE value per axis, then COMMIT:
- CANVAS: paper-light | warm-dark | split(light content + dark code rail)
- GRID: none | blueprint-faint | crosshair-registered | isometric-faint
- RADIUS: 0 engineered | 6 shadcn | mixed(0 content / 6 interactive)
- HUE: blue | amber | phosphor | ink-only
- HUE-ROLE: action-only | annotation-heavy | pass/fail-system
- TYPE-LEAD: grotesque | serif-editorial | mono-terminal
- SERIF-USE: none | hero-only | doctrine-quotes
- MOTION: near-static | entrance-stagger | full
- DENSITY: spacious | compact-spec | hybrid(airy hero / dense body)
- STRUCTURE: single-column | sidebar-doc | margin-notes
- SIGNATURE: doctrine-sheet | decision-table-hero | terminal-install-hero
- TEXTURE: clean | blueprint-grid | paper-grain(hero)
Every permutation is pre-guardrailed — the banned list constrains all axes, so no
combination lands on slop.

## THE 12 FLAGSHIP COMBOS
1. **The Doctrine Sheet** — paper, blueprint grid, mixed radius, blue+amber,
   grotesque + serif hero, stagger, hybrid density, margin notes. **DEFAULT.**
2. **The Decision Table** — the stack/data table IS the hero; compact, mono-heavy,
   near-static.
3. **The Terminal Install** — warm-dark, phosphor, mono-led, terminal hero.
4. **The Field Manual** — serif-led, paper-grain hero, spacious, "printed manual."
5. **The Inversion** — split canvas: light content + dark code rail, hairline divider.
6. **The Checklist** — green/amber/blue as pass/warn/fail system; checklist hero.
7. **The Margin** — all sources/dates as real sidenotes in a wide right margin.
8. **The Blueprint** — grid foregrounded, crosshairs + dimension ticks per section.
9. **The Dossier** — warm-dark, ink-led, amber-only pops, compact, quiet-classified.
10. **The Ticker** — mono-led, doctrine marquee as structural bands top+bottom, full motion.
11. **The Minimal Null** — paper + ink-only + hairline, serif moments, near-static. Safe floor.
12. **The Demo-First** — live CLI output block as hero, split canvas, full motion.
Ship all 12 as overrides in /brand/combos.md so the site re-skins by swapping one file.

## SURFACES — one system, two registers
- Landing/README = expressive: full combo, hero motion, the single terminal moment.
- Docs = utilitarian: same tokens, near-static, 240px sidebar + content + 240px TOC.
- CLI/output block shared verbatim across both.

## OUTPUT CONTRACT — always produce
1. **DESIGN.md** at repo root (the contract): noun list, lanes, signature detail +
   its one-sentence derivation, axis values, tokens, motion recipes, banned-list
   attestation. Every future page builds from it — this prevents page-two drift.
2. **/brand/tokens.css** — full custom properties, light + dark inversion.
3. **/brand/combos.md** — the 12 combos as token/axis overrides.
4. **/brand/motion.css** — durations, easings, recipes, reduced-motion collapse.
5. **Components** with EVERY state designed: hover / focus-visible / active /
   disabled / loading / empty / error.
6. **AUDIT.md** — gates checklist + rubric score + what was fixed.

## QUALITY GATES (all must pass)
- Squint test: at thumbnail, sections read as different shapes, not the same box.
- Silhouette test: strip the logo — could this be anyone's page? If yes, redo the signature.
- Derivation test: any element → one sentence tying it to product material or a token.
- ≤3 active hues, all semantic. Dark = pure inversion. 8pt grid pass.
- APCA contrast pass; focus-visible everywhere; keyboard-complete.
- Reduced-motion pass; transform/opacity only; INP < 200ms.
- State coverage 7/7 per interactive component.

## SCORING RUBRIC (100; below 85 = revise before delivering)
Distinctiveness/signature 25 · Derivation from product 20 · System discipline
(tokens, hue law, grid) 20 · Craft (type ladder, tabular-nums, hairlines) 15 ·
Motion restraint & INP 10 · Accessibility & states 10.

## DEFAULT-1 TOKENS (ship when the product has no authentic hue)
```css
:root{
  --bg:#FAF9F6; --surface:#F1EFE9; --surface-strong:#E7E5DC;
  --ink:#14150F; --ink-muted:#5C5B52; --rule:#D8D6CC;
  --accent:#1D4ED8; --accent-ink:#FFFFFF; --warn:#B45309; --ok:#15803D;
  --grid:rgba(29,78,216,.06);
  --r-block:0px; --r-interactive:6px; --r-card:8px;
  --ease-standard:cubic-bezier(.4,0,.2,1); --ease-emphasized:cubic-bezier(.16,1,.3,1);
  --dur-fast:100ms; --dur-std:150ms; --dur-slow:250ms;
  --font-body:"Söhne","Inter var",system-ui,sans-serif;
  --font-serif:"Newsreader",Georgia,serif;
  --font-mono:"Berkeley Mono","JetBrains Mono",ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
}
.dark{
  --bg:#0C0D0A; --surface:#14150F; --surface-strong:#1D1E18;
  --ink:#F1EFE9; --ink-muted:#A3A296; --rule:#26271F;
  --accent:#6E9BFF; --accent-ink:#0C0D0A; --warn:#E8A13C; --ok:#4ADE80;
  --grid:rgba(110,155,255,.05);
}
```

## IF THE USER GIVES NO DIRECTION
Commit to Combo #1 (The Doctrine Sheet) + DEFAULT-1 tokens + grotesque lead + serif
hero + entrance-stagger. State the commit in one line, then build. Never ask five
questions when one committed decision is the deliverable.

## NEVER
- Ship the canned skeleton, the slop default, or the second-order fix.
- Hand the user a font/color menu — derive or default, and explain the choice.
- Accuse existing work of "AI slop" — flag unchosen defaults, fix, move on.
- Break the 3-hue law, the reduced-motion rule, or the DESIGN.md contract. Ever.
