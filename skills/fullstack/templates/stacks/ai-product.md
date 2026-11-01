# AI product

**Composition:** Next.js + Vercel AI SDK 6 + FastAPI (Python AI layer) + PostgreSQL + pgvector + Redis + Anthropic/OpenAI APIs + SSE streaming + MCP

**Best fit:** Chat, copilots, RAG apps, agent workflows with a web UI.

**When NOT:** A single prompt call with no tools or retrieval (call the provider SDK directly); corpora small enough to fit in context.

## Start

```bash
pnpm add ai @ai-sdk/anthropic @ai-sdk/openai zod
uv init api && uv add fastapi uvicorn pydantic   # only if you need a Python AI service
```

Commands change between releases. Check the tool's current docs and pin the versions you choose.

## Layout

app/api/chat/route.ts · src/ai/ (tools, prompts, evals) · api/ (FastAPI, optional) · src/db/ (pgvector tables)

## First steps

1. Read the installed `ai` package docs before writing AI SDK code; the API moves fast.
2. Stream with SSE via `streamText`/`useChat`; set `stopWhen` to bound agent loops.
3. Treat retrieved text and tool output as untrusted (prompt injection); require human approval for irreversible tools.
4. Build an eval set before tuning prompts; log traces with cost per request.

## Read before building

- ../../references/ai-features.md
- ../../references/security.md
- ../../references/realtime-sync.md
- ../../references/database.md

## Always copy from templates/

tsconfig.strict.json (TypeScript projects) · npmrc · renovate.json · ci-github-actions.yml · env.ts · errors.ts · webhook-verify.ts · test configs.
