# Observability & Monitoring

- Sentry, structured logging, OpenTelemetry, RUM, SLOs and error budgets, incident response.

> Part of the `fullstack` skill. Tier tags: [Core] baseline, [Senior] mid/senior, [Situational] on demand. Numbered citations [n] resolve in [SOURCES.md](SOURCES.md). Items tagged `[unverified — confirm source]` could not be re-verified; do not present them as fact.

## Current as of November 2026

- MCP 2026-07-28 standardizes W3C Trace Context keys in `_meta`.

## 8. Observability & Monitoring

Once code ships, "what is breaking for real users right now?" is the only question that matters.

**Baseline [Core]:**
- **Sentry:** error monitoring with stack traces, source-map upload, release tracking, **session replay** (privacy masking), breadcrumbs, performance tracing, suspect commits, alert rules, ~3.2M weekly npm downloads `[unverified — confirm source]` [40]
- **Structured logging:** Pino (Node.js JSON logger), Winston, JSON log format, **correlation/request IDs via AsyncLocalStorage**, log levels (debug/info/warn/error/fatal), log aggregation, **PII scrubbing in logs**, no secrets in logs
- **Uptime monitoring:** Better Stack, UptimeRobot, Checkly (synthetic checks), status pages
- **Health endpoints:** `/healthz`, `/readyz`, dependency checks

**Instrumentation & operations [Senior]:**
- **OpenTelemetry (OTel):** vendor-neutral standard, CNCF · instrument once, export anywhere (Jaeger, Tempo, Datadog, Honeycomb, Grafana Cloud) · traces, metrics, logs · auto-instrumentation (Express, Fastify, Hono, PostgreSQL, Redis, fetch, HTTP) · manual spans for business logic · **W3C Trace Context** (`traceparent`, `tracestate`, `baggage`) propagation · OTel Collector, OTLP · sampling (head-based, tail-based) · cardinality control · semantic conventions · **GenAI semantic conventions for LLM calls** · ~4.8M weekly downloads `[unverified — confirm source]` [40] · Next.js `instrumentation.ts` hook [11] · MCP 2026-07-28 standardizes trace-context keys in `_meta` [41]
- **Real-user monitoring (RUM):** Core Web Vitals from actual users (CrUX, web-vitals, Vercel Speed Insights, Datadog RUM), not lab tests
- **Dashboards & alerting:** Grafana, Datadog, Prometheus metrics (RED and USE methods, histograms, p95/p99), **SLIs/SLOs/error budgets**, burn-rate alerts, alert fatigue hygiene, on-call rotation, PagerDuty/Opsgenie, runbooks
- **Distributed tracing:** context propagation across services and queues, span attributes, error tracking in traces
- **Incident response:** severity levels, incident commander, blameless postmortems, status communication

**[Situational]** Product analytics (PostHog, Mixpanel, Amplitude), log aggregation (Loki, Elasticsearch/OpenSearch), continuous profiling (Pyroscope), APM suites (New Relic, Dynatrace), feature-flag + experiment platforms, LLM observability (§13), cost observability


## Definition of done

- [ ] Every [Core] item above that applies to this change was checked.
- [ ] Every decision rule ("X → Y when Z", "when NOT") that applies was followed or the deviation is written down.
- [ ] No `[unverified]` claim was stated as fact in code comments, docs, or the PR description.
