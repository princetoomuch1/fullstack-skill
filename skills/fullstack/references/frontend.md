# Frontend & Web Fundamentals

- Browser and TypeScript fundamentals, then React 19.2, Next.js 16, styling, state, forms, performance, accessibility, SEO, i18n.
- State is four different things: server, client, URL, form. Never mix them.
- Pick rendering per route, not per app.
- Accessibility is law in the EU (EAA, 28 June 2025), not a nice-to-have.
- Budgets: LCP <= 2.5s, INP <= 200ms, CLS <= 0.1.

> Part of the `fullstack` skill. Tier tags: [Core] baseline, [Senior] mid/senior, [Situational] on demand. Numbered citations [n] resolve in [SOURCES.md](SOURCES.md). Items tagged `[unverified — confirm source]` could not be re-verified; do not present them as fact.

## Current as of November 2026

- Next.js 16 (21 Oct 2025): Cache Components, `"use cache"`, `proxy.ts` replaces `middleware.ts`, Turbopack default.
- React Compiler 1.0 stable (Oct 2025). React 19.2 adds `useEffectEvent`, `<Activity/>`.
- shadcn/ui default primitives switched to Base UI in July 2026; Radix still supported.
- TypeScript 7.0 GA July 2026; Temporal is Stage 4 (March 2026), Safari preview only.

## 1. Web Fundamentals

**Network & HTTP [Core]:** DNS record types (A, AAAA, CNAME, TXT, MX, NS, CAA), TTL, propagation · TCP handshake, **TLS 1.3** handshake, SNI, certificate chain · HTTP/1.1 vs **HTTP/2** multiplexing vs **HTTP/3** (QUIC/UDP) · keep-alive, connection reuse · compression (gzip, Brotli, Zstandard) · HTTP methods + idempotency/safety semantics · status codes used precisely: 200/201/202/204, 301 vs 302 vs 307 vs 308, 400/401/403/404/409/410/422/429, 500/502/503/504 · headers: Cache-Control (`max-age`, `s-maxage`, `no-store`, `no-cache`, `immutable`, `stale-while-revalidate`, `stale-if-error`), ETag + If-None-Match conditional requests, Last-Modified, Vary, Accept content negotiation, Retry-After, Sunset/Deprecation, Location, Range requests, Content-Disposition · cookies: HttpOnly, Secure, SameSite (Lax/Strict/None), `__Host-` prefix, partitioned cookies (CHIPS), Domain/Path scoping · CORS mechanics (preflight, credentials, `Vary: Origin`) · WebSocket upgrade handshake · CDN origin vs edge, anycast

**Browser rendering [Core]:** parse → DOM/CSSOM → render tree → layout → paint → composite · reflow vs repaint · critical rendering path · render-blocking resources · main thread vs compositor thread · event loop, microtasks vs macrotasks, `requestAnimationFrame`, `requestIdleCallback`, `scheduler.postTask`

**HTML [Core]:** semantic elements, landmarks, heading hierarchy · forms + Constraint Validation API · `<dialog>`, Popover API, `inert`, details/summary, template/slot · `<picture>`, `srcset`/`sizes`, `loading="lazy"`, `decoding="async"`, `fetchpriority` · meta/Open Graph/Twitter cards · `autocomplete` tokens, `inputmode`, `enterkeyhint`

**CSS [Core]:** cascade, specificity, `@layer` cascade layers · custom properties, `@property` · Flexbox, Grid + subgrid · container queries (`@container`, cqi/cqw units) · `:has()`, `:is()`/`:where()`, native nesting · `clamp()`/`min()`/`max()` · logical properties (`margin-inline`, `padding-block`) · oklch, `color-mix()`, `light-dark()`, `accent-color`, `aspect-ratio`, `text-wrap: balance/pretty` · `content-visibility`, `contain` · scroll-driven animations, View Transitions API, `@starting-style` · `prefers-reduced-motion`, `prefers-color-scheme`, `prefers-contrast`, `forced-colors` · **[Situational]** anchor positioning, `@scope`, `field-sizing`, `interpolate-size` — check Baseline status before use

**JavaScript ES2023+ [Core]:** closures, prototypes, `this` binding · iterators/generators, async iterators · `Promise.all/allSettled/any/race`, `Promise.withResolvers`, async/await · AbortController, `AbortSignal.timeout/any` · `structuredClone`, `Object.groupBy`, `Array.prototype.findLast/at/toSorted/toSpliced` · ES2025: iterator helpers, Set methods (`union`, `intersection`), `Promise.try`, `RegExp.escape` · ESM vs CJS interop, dynamic import, import attributes (JSON modules), `require(esm)` · debounce/throttle, event delegation, passive listeners · BroadcastChannel, MessageChannel · IntersectionObserver/ResizeObserver/MutationObserver · storage: localStorage/sessionStorage/cookies/IndexedDB/Cache API/Origin Private File System · **Intl API** (NumberFormat, DateTimeFormat, RelativeTimeFormat, PluralRules, ListFormat, Collator, Segmenter) — the i18n backbone · **Temporal API:** reached TC39 Stage 4 in March 2026 (ES2026) [1]; native in Chrome 144, Firefox 139, and unflagged in Node.js 26 [2][3]; Safari only in Technology Preview, MDN still lists it as Limited availability, so ship `@js-temporal/polyfill` for browser targets [3] — Date replacement with `PlainDate`, `ZonedDateTime`, `Instant`, `Duration` · fetch with streaming response bodies, FormData, URL/URLSearchParams, `URLPattern`, Clipboard, Notifications, Geolocation, Web Share, Wake Lock **[Situational]**

**Compatibility [Core]:** **web.dev Baseline** (Newly / Widely available) as the browser-support reference · feature detection (`@supports`, `CSS.supports`) over UA sniffing · progressive enhancement · browserslist · polyfill vs ponyfill decision · know the iOS rule: every iOS browser uses WebKit, so Safari support gates iPhone support [2]

**TypeScript [Core]:** TypeScript is the default, not a differentiator: 40% of State of JS 2025 respondents write only TypeScript, ~6% only plain JS `[unverified — confirm source]` [4][5] · Stack Overflow 2026 ranks TypeScript 6th among languages [6] · tsconfig strict suite (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax`) · generics + constraints · conditional/mapped types, template literal types, `infer` · discriminated unions, exhaustive `never` checks, narrowing (typeof/instanceof/in, user-defined guards, assertion functions) · `satisfies` · utility types, branded types · declaration files, `moduleResolution: bundler` · `erasableSyntaxOnly` era (const objects over enums, no parameter properties) — required for Node type stripping [7] · project references · type inference from Zod via **Standard Schema** · **TypeScript 7.0** (GA July 2026, native Go compiler, 8–12x faster full builds, `strict` on by default; TypeScript 6.0 was the bridge release) [8][9][10] · **when NOT to move to 7 yet:** Vue, Svelte, Astro, MDX and Angular template type-checking stay on TypeScript 6 until a stable programmatic API ships (7.1), and webpack loaders lack an API surface in 7.0 [10][8]

**[Situational]** Web Components (Custom Elements, Shadow DOM, declarative shadow DOM), Web Workers + Comlink, SharedWorker, WebAssembly (Figma/Photoshop-class workloads), SharedArrayBuffer + Atomics, WebGPU, WebTransport

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


## Definition of done

- [ ] Every [Core] item above that applies to this change was checked.
- [ ] Every decision rule ("X → Y when Z", "when NOT") that applies was followed or the deviation is written down.
- [ ] No `[unverified]` claim was stated as fact in code comments, docs, or the PR description.
