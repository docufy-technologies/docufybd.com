import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackRouter({
      target: "solid",
      autoCodeSplitting: true,
      generatedRouteTree: "./src/route-tree.gen.ts",
      routeToken: "_layout",
    }),
    solidPlugin({
      dev: false,
      hot: true,
      solid: {
        generate: "dom",
      },
    }),
  ],
  server: {
    cors: false,
    preTransformRequests: true,
    watch: {
      ignored: [
        "**/node_modules/**",
        "**/dist/**",
        "**/.git/**",
        "**/docs/**",
        "**/*.md",
        "**/pnpm-lock.yaml",
        "**/*.test.*",
        "**/*.spec.*",
        "**/coverage/**",
        "**/.vscode/**",
        "**/.idea/**",
      ],
    },
    hmr: {
      overlay: false,
    },
    warmup: {
      clientFiles: [
        "./src/main.tsx",
        "./src/routes/__root.tsx",
        "./src/routes/index.tsx",
        "./src/styles.css",
      ],
    },
  },
  optimizeDeps: {
    include: [
      "solid-js",
      "solid-js/web",
      "solid-js/store",
      "solid-js/html",
      "class-variance-authority",
    ],
  },
  css: {
    devSourcemap: false,
    transformer: "lightningcss",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // normalize slashes
            const parts = id.split(/node_modules\//g);

            // last part after the last node_modules is the real pkg path
            const pkgPath = parts[parts.length - 1];

            // handle scoped packages (@scope/name)
            const pkgName = pkgPath.startsWith("@")
              ? pkgPath.split("/").slice(0, 2).join("/")
              : pkgPath.split("/")[0];

            // replace / in scoped names so they are valid filenames
            return pkgName.replace("/", "_").replace(/@/g, "");
          }
        },
      },
    },
  },
});
