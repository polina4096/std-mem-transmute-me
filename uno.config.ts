import presetIcons from "@unocss/preset-icons";
import presetRemToPx from "@unocss/preset-rem-to-px";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetWind from "@unocss/preset-wind";
import transformerDirectives from "@unocss/transformer-directives";
import { defineConfig } from "unocss";

export default defineConfig({
  presets: [
    presetRemToPx(),
    presetWind(),
    presetIcons({
      collections: {
        lucide: () => import("@iconify-json/lucide/icons.json").then(i => i.default),
      },
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Fira Sans:400,500",
        serif: "Source Serif 4",
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    colors: {
      text: "var(--color-text)",
      bg: "var(--color-bg)",
    },
  },
});
