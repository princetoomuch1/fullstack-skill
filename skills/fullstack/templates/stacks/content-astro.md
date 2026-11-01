# Content / Astro

**Composition:** Astro + Tailwind + headless CMS (Strapi, Sanity, Payload, Contentful) + Vercel or Netlify

**Best fit:** Marketing sites, blogs, documentation, content-heavy pages; best Lighthouse by default.

**When NOT:** Highly interactive app shells with shared client state (use Next.js or Vite + React).

## Start

```bash
pnpm create astro@latest
pnpm astro add tailwind
```

Commands change between releases. Check the tool's current docs and pin the versions you choose.

## Layout

src/pages · src/content (collections) · src/components · public/

## First steps

1. Model content in collections with schema validation; preview mode for editors.
2. JSON-LD, sitemap, canonical URLs, hreflang if multilingual.
3. Webhook from CMS to trigger rebuild or on-demand revalidation.

## Read before building

- ../../references/frontend.md
- ../../references/performance.md
- ../../references/api-integration.md

## Always copy from templates/

tsconfig.strict.json (TypeScript projects) · npmrc · renovate.json · ci-github-actions.yml · env.ts · errors.ts · webhook-verify.ts · test configs.
