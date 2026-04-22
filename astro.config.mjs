import { defineConfig } from "astro/config";
import { realpathSync } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  site: "https://psdcoder.dev",
  vite: {
    css: {
      modules: {
        generateScopedName: (name, filename) => {
          const real = realpathSync(filename.replace(/\?.*$/, ""));
          const dir = path.basename(path.dirname(real));
          const hash = createHash("sha256").update(`${real}:${name}`).digest("hex").slice(0, 5);
          return `${dir}__${name}_${hash}`;
        },
      },
      postcss: {
        plugins: [
          postcssPresetEnv({
            stage: 3,
            features: {
              "nesting-rules": true,
              "custom-media-queries": true,
              "media-query-ranges": true,
            },
          }),
        ],
      },
    },
  },
});
