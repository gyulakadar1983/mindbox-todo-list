import path from "path";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.ts",
    include: ["./src/**/*.test.*"],
    coverage: {
      include: ["src/app/*", "src/features/*", "src/pages/*"],
      exclude: [...configDefaults.exclude, "./src/main.*"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
