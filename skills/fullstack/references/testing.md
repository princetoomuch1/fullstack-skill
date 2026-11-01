# Testing & Quality Assurance

- Vitest + Playwright + MSW as the default stack; quality gates; flake handling; security testing in CI.

> Part of the `fullstack` skill. Tier tags: [Core] baseline, [Senior] mid/senior, [Situational] on demand. Numbered citations [n] resolve in [SOURCES.md](SOURCES.md). Items tagged `[unverified — confirm source]` could not be re-verified; do not present them as fact.

## Current as of November 2026

- Vitest 4 (Oct 2025): Browser Mode stable, visual regression, Playwright traces.
- Playwright ~33-35M weekly npm downloads early 2026, ~52M by May 2026 (counts vary by package).

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


## Definition of done

- [ ] Every [Core] item above that applies to this change was checked.
- [ ] Every decision rule ("X → Y when Z", "when NOT") that applies was followed or the deviation is written down.
- [ ] No `[unverified]` claim was stated as fact in code comments, docs, or the PR description.
