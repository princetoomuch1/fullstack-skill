# Performance Optimization

- Frontend and backend performance, caching layers, CDN, measurement.

> Part of the `fullstack` skill. Tier tags: [Core] baseline, [Senior] mid/senior, [Situational] on demand. Numbered citations [n] resolve in [SOURCES.md](SOURCES.md). Items tagged `[unverified — confirm source]` could not be re-verified; do not present them as fact.

## Current as of November 2026

- Next.js 16 tag-based invalidation: `cacheTag`, `revalidateTag(tag, profile)`, `updateTag`.

## 12. Performance Optimization

**Frontend [Core]:** Core Web Vitals budgets (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1) [20], bundle analysis, code splitting (route-based, component-based), lazy loading (images, components, routes), image optimization (AVIF/WebP, responsive `srcset`, CDN), font loading strategy (`font-display: swap`, preload critical fonts, subset fonts), service workers, prefetch/prerender (Speculation Rules), avoiding layout shift (reserved dimensions), reducing main-thread work (web workers, `scheduler.yield()`), minimizing third-party JavaScript

**Backend [Core]:** database query optimization (indexes, query rewriting, N+1 elimination), connection pooling, response caching (HTTP caching headers: `Cache-Control`, `ETag`, `Last-Modified`), compression, pagination, background processing for slow operations (do not make users wait for emails, PDF generation, image processing), streaming responses, avoiding synchronous CPU work on the event loop

**Caching strategy [Core]:** multi-level — browser cache → CDN/edge cache → application cache (Redis) → database cache. TTLs, cache invalidation (the hard problem), tag-based invalidation (`cacheTag`/`revalidateTag` in Next.js 16 [11]), stale-while-revalidate, stampede protection, cache warming, cache keys per tenant/locale/auth state

**CDN & network [Senior]:** edge caching, cache purging, geographic distribution, HTTP/2 multiplexing, HTTP/3 (QUIC) benefits, Early Hints, connection coalescing, TLS session resumption

**Measurement [Senior]:** application profiling (Chrome DevTools Performance panel, Node `--cpu-prof`, flame graphs), load testing with latency/throughput budgets (p50, p95, p99, RPS capacity), tail-latency analysis, RUM vs synthetic, Lighthouse CI, performance budgets enforced in CI, query plan review (`EXPLAIN ANALYZE`)

**[Situational]** sustainable web practices (ship less JavaScript, reduce unused code, carbon-aware hosting), WebAssembly hot paths, SQLite-at-edge latency design, GPU/worker offloading


## Definition of done

- [ ] Every [Core] item above that applies to this change was checked.
- [ ] Every decision rule ("X → Y when Z", "when NOT") that applies was followed or the deviation is written down.
- [ ] No `[unverified]` claim was stated as fact in code comments, docs, or the PR description.
