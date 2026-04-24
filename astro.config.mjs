import { defineConfig, fontProviders } from "astro/config";
import { realpathSync } from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import postcssPresetEnv from "postcss-preset-env";

export default defineConfig({
  site: "https://psdcoder.dev",
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Encode Sans",
      cssVariable: "--font-sans",
      weights: ["400 900"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Playfair Display",
      cssVariable: "--font-serif",
      weights: [400, 500],
      styles: ["italic"],
      subsets: ["latin"],
      fallbacks: ["Georgia", "serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Martian Mono",
      cssVariable: "--font-mono",
      weights: [400, 500, 700],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["ui-monospace", "SFMono-Regular", "monospace"],
    },
  ],
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
