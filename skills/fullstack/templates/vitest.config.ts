// Vitest 4. Install: pnpm add -D vitest @vitest/coverage-v8
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["src/**/*.test.ts", "test/**/*.test.ts"],
    setupFiles: ["./test/setup.ts"], // starts MSW; see msw-handlers.ts
    restoreMocks: true,
    coverage: {
      provider: "v8",
      include: ["src/**"],
      thresholds: { lines: 80, functions: 80, branches: 70, statements: 80 },
    },
    // Component tests in a real browser (Vitest 4 Browser Mode is stable). See vitest.dev/guide/browser
    // for the provider package (@vitest/browser-playwright) and instance config for your version.
  },
});
