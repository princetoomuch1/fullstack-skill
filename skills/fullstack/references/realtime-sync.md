# Real-Time, Async & Local-First

- WebSockets, SSE, long polling, scaling concerns, local-first sync engines.
- SSE is the standard transport for streaming LLM responses.
- When NOT local-first: simple CRUD (TanStack Query is enough).

> Part of the `fullstack` skill. Tier tags: [Core] baseline, [Senior] mid/senior, [Situational] on demand. Numbered citations [n] resolve in [SOURCES.md](SOURCES.md). Items tagged `[unverified — confirm source]` could not be re-verified; do not present them as fact.

## Current as of November 2026

- Zero reached 1.0 in June 2026 (no breaking changes from 0.26.2; SSR still on roadmap).

## 6. Real-Time, Async & Local-First

A distinct skill cluster — not just "WebSockets."

**WebSockets [Core]:** Socket.IO (rooms, namespaces, middleware, acknowledgements), `ws` library, connection lifecycle, heartbeat/ping-pong, authentication over sockets (token in first message or cookie; never in URL), authorization per message · alternatives: Pusher/Ably/PartyKit/Cloudflare Durable Objects for managed fan-out

**Server-Sent Events (SSE) [Core]:** server→client streaming, `EventSource` API, reconnection with `Last-Event-ID`, `text/event-stream`, proxy buffering pitfalls (disable response buffering) · **SSE is the standard transport for streaming LLM responses** — every AI chat UI streams tokens this way; the Vercel AI SDK `useChat` consumes it

**Long polling [Core]:** when WebSockets are blocked (corporate proxies, serverless)

**Real-time concerns [Core]:** reconnection handling (exponential backoff + jitter), message ordering, delivery guarantees (at-most/at-least-once), backpressure, presence (online/offline status), fan-out, scaling WebSocket servers (Redis adapter, sticky sessions, pub/sub backplane), serverless limits on long-lived connections

**[Situational]** WebRTC (peer-to-peer media, data channels, STUN/TURN, SFU such as LiveKit), WebTransport, push notifications (Web Push API, service workers, FCM/APNs)

**Local-first sync engines [Senior for product roles]:** **ElectricSQL** (Postgres-native read-path sync, shapes, PGlite, CDN-cacheable, Apache 2.0) [30] · **Zero** (Rocicorp; query-driven sync, zero-cache, ZQL, server-authoritative, Postgres logical replication; **reached 1.0 in June 2026** — a near-symbolic bump from 0.26.2 with no breaking changes; SSR still on the roadmap) [31] · **PowerSync** (mobile-first, sync rules, SQLite on device) [30] · **LiveStore** (event-log sync, pre-v1) [30] · **TanStack DB** (client-side reactive collections, differential dataflow, pluggable sync backends, beta) [32] · **CRDTs:** Automerge, Yjs (collaborative editing), cr-sqlite [33] · **when to use:** Linear/Figma-class instant UX, offline-first mobile, collaborative editing, partial sync over large datasets · **when NOT:** simple CRUD → TanStack Query is enough [32] · specifics such as latency numbers and pricing from the older drafts are `[unverified — confirm source]`


## Definition of done

- [ ] Every [Core] item above that applies to this change was checked.
- [ ] Every decision rule ("X → Y when Z", "when NOT") that applies was followed or the deviation is written down.
- [ ] No `[unverified]` claim was stated as fact in code comments, docs, or the PR description.
