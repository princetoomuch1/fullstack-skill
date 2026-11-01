// MSW v2: one handler layer shared by unit tests, Storybook, and dev.
// Install: pnpm add -D msw
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

export const handlers = [
  http.get("https://api.example.com/users/:id", ({ params }) =>
    HttpResponse.json({ id: params["id"], name: "Test User" }),
  ),
  http.post("https://api.example.com/orders", async ({ request }) => {
    const body = (await request.json()) as { sku?: string };
    if (!body.sku) {
      return HttpResponse.json({ title: "Validation failed", status: 422 }, { status: 422, headers: { "content-type": "application/problem+json" } });
    }
    return HttpResponse.json({ id: "ord_1", sku: body.sku }, { status: 201 });
  }),
];

export const server = setupServer(...handlers);

// test/setup.ts:
//   import { afterAll, afterEach, beforeAll } from "vitest";
//   import { server } from "../templates/msw-handlers";
//   beforeAll(() => server.listen({ onUnhandledRequest: "error" })); // unmocked network calls fail the test
//   afterEach(() => server.resetHandlers());
//   afterAll(() => server.close());
