import { defineConfig } from "vitest/config"

const uiEnabled = process.argv.includes("--ui")

export default defineConfig({
  test: {
    ui: uiEnabled,
    coverage: {
      enabled: true,
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/index.ts"],
      reportsDirectory: "./coverage",
    },
  },
})
