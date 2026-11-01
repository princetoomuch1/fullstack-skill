# AI Integration & Agentic Development

- AI-assisted development, LLM APIs, Vercel AI SDK 6, MCP, RAG, agents, evals, cost, observability.
- AI output is a draft: run it, test it, read the diff.

> Part of the `fullstack` skill. Tier tags: [Core] baseline, [Senior] mid/senior, [Situational] on demand. Numbered citations [n] resolve in [SOURCES.md](SOURCES.md). Items tagged `[unverified — confirm source]` could not be re-verified; do not present them as fact.

## Current as of November 2026

- MCP spec 2026-07-28 is final: stateless core, no `initialize` handshake or `Mcp-Session-Id`.
- AGENTS.md stewarded by the Agentic AI Foundation (Linux Foundation) since December 2025.
- Stack Overflow 2026: 17.2% do not use AI tools; 73% of assistant users use them daily.

## 13. AI Integration & Agentic Development

AI fluency is baseline, not emerging. In Stack Overflow 2026, only 17.2% of respondents do not use AI tools; 73% of those using AI coding assistants or agents use them daily; 62% view AI at least somewhat positively; but nearly half trust output only when they can verify it and just 6.6% trust it for important decisions [60][61]. Claude Code (66%) and GitHub Copilot (59%) are the most-used agents among agent users [60][26]. Stack Overflow 2025 data points still cited in postings: 84% used or planned to use AI tools, 51% of professionals daily, 66% said output is "almost right but not quite" `[unverified — confirm source]` [36]. Job postings increasingly require proof of building AI features `[unverified — confirm source]` [62].

**AI-assisted development [Core]:** Copilot, Cursor, **Claude Code**, Codex, Windsurf, ChatGPT, v0 · prompt engineering for code generation, refactoring, review, test writing, documentation · context engineering · **the critical skill: reviewing, verifying and owning AI-generated code** — treat AI output as a draft, not a deliverable; run it, test it, read the diff · **agent instruction files:** `AGENTS.md` (plain Markdown, no schema, closest file to the edited file wins; stewarded by the Agentic AI Foundation under the Linux Foundation since December 2025, alongside MCP) [63][64], `CLAUDE.md`, Cursor rules · reusable agent skills (`SKILL.md` packages) · spec-driven development · AI code review tooling [Situational] · guardrails: sandboxing, least-privilege tokens for agents, no production credentials in agent context

**LLM API integration [Core]:** OpenAI API, **Anthropic API (Claude)**, Google Gemini API, Mistral, open-weight models via Ollama/vLLM · prompt design, system prompts, **structured outputs** (JSON schema / JSON mode), **function/tool calling**, **streaming via SSE**, token counting and cost budgeting, context-window management, model selection (capability vs cost vs latency), temperature/parameters, extended thinking/reasoning controls, retries/timeouts/fallbacks across providers, rate-limit handling, gateway layers (Vercel AI Gateway, OpenRouter, LiteLLM)

**Vercel AI SDK 6 [Core for TS roles]** (`ai` 6.x is the current stable line [65]; adoption figures `[unverified — confirm source]` [66][67]): `streamText`/`generateText`/`streamObject` server primitives · `useChat` (message-parts model: text, tool-call, tool-result, reasoning, source) · tool calling with Zod `inputSchema` + `execute` · `ToolLoopAgent` agent abstraction, `stopWhen: stepCountIs(N)` to prevent runaway loops · `needsApproval` (human-in-the-loop) · `Output.object()` structured output · `rerank()` · MCP client (`@ai-sdk/mcp`) · DevTools (`@ai-sdk/devtools`) · multi-provider behind one interface, `providerOptions` per provider (e.g. Anthropic thinking) [66][67] · **always verify against the installed version's bundled docs — APIs move quickly** [65]

**Model Context Protocol (MCP) [Senior]:** open standard for connecting models to tools and data · **spec revision 2026-07-28 (final 28 July 2026) is the largest since launch:** stateless core — the `initialize` handshake and `Mcp-Session-Id` are gone, every request carries protocol version, client info and capabilities in `_meta`; `server/discover` for capability negotiation; Streamable HTTP now requires `Mcp-Method`/`Mcp-Name` headers so gateways and load balancers can route without parsing bodies; W3C Trace Context keys (`traceparent`, `tracestate`, `baggage`) standardized in `_meta`; Tasks lifecycle for long-running calls; MCP Apps extension (tool-declared UI templates); Roots, Sampling and Logging deprecated (annotation-only: still work for at least twelve months); authorization hardened around OAuth 2.0/OIDC practice; `cacheScope` on responses [68][69][41] · previous revision 2025-11-25 (stdio + Streamable HTTP, OAuth 2.1 + PKCE for remote servers) · server design: tool schemas, idempotent tools, per-user auth, least-privilege scopes, audit logging · **when NOT:** an in-process function call or a plain REST client is simpler when only one app consumes the capability

**RAG (Retrieval-Augmented Generation) [Senior]:** embeddings (text-embedding models, dimension/cost tradeoffs), chunking (fixed-size, recursive, semantic, structure-aware), vector databases (pgvector, Pinecone, Qdrant, Weaviate), similarity search (cosine, dot product), **hybrid search (vector + BM25/keyword)**, **reranking** (cross-encoder, Cohere), metadata filtering, query rewriting, retrieval evaluation (precision/recall, recall@k, MRR, nDCG), citations/grounding, corpus versioning, re-embed plans, freshness/invalidations · **when NOT:** small corpora that fit in context → long context with prompt caching

**AI agents [Senior]:** tool-use patterns, planning/ReAct loops, permission boundaries, **prompt-injection defense** (treat retrieved text and tool output as untrusted), **human-in-the-loop for sensitive/irreversible actions**, agent orchestration (LangGraph, CrewAI, Claude Agent SDK, OpenAI Agents SDK), durable execution for long-running agents (Temporal, Inngest, Workflow DevKit), sandboxed code execution, memory (short/long-term), multi-agent handoffs, computer-use agents (vision-action loops, sandboxing, kill switches) [Situational]

**Evals [Senior]:** measuring LLM output quality, regression testing for prompts, LLM-as-judge (with calibration), golden datasets, online + offline evals, error analysis, tracing-driven datasets — widely cited as the strongest signal that someone has actually shipped LLM features `[unverified — confirm source]` [62]

**Cost & reliability [Senior]:** prompt caching (cached-prefix discounts), model routing (large → small by task difficulty), batch APIs, response caching, token/cost-per-task tracking, spend caps per key/user, timeouts + fallbacks, streaming UX, cost reduction of 40–70% reported for production workloads `[unverified — confirm source]` [62]

**LLM observability [Senior]:** LangSmith, Langfuse, Helicone, Braintrust, Arize/Phoenix, OTel GenAI semantic conventions, trace-per-request, span-per-tool-call, prompt/version tracking, PII redaction in traces

**[Situational]** LangChain, LlamaIndex, local models (Ollama, llama.cpp, vLLM), fine-tuning awareness (LoRA), embeddings fine-tuning, speech/vision/multimodal APIs, image generation APIs, AI app builders (v0, Lovable, Bolt, Replit — awareness), EU AI Act awareness


## Definition of done

- [ ] Every [Core] item above that applies to this change was checked.
- [ ] Every decision rule ("X → Y when Z", "when NOT") that applies was followed or the deviation is written down.
- [ ] No `[unverified]` claim was stated as fact in code comments, docs, or the PR description.
