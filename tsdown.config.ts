import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts", "./src/*/index.ts"],
  root: "src",
  dts: {
    tsgo: true,
  },
  platform: "browser",
  format: {
    esm: {
      target: ["ESNext"],
    },
  },
  exports: false,
  css: {
    splitting: true,
    inject: true,
  },
  sourcemap: false,
  minify: true,
  publint: {
    level: "error",
  },
  attw: {
    profile: "esm-only",
    level: "error",
  },
});
