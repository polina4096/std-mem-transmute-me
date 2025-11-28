import presetIcons from "@unocss/preset-icons";
import presetRemToPx from "@unocss/preset-rem-to-px";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetWind3 from "@unocss/preset-wind3";
import transformerCompileClass from "@unocss/transformer-compile-class";
import transformerDirectives from "@unocss/transformer-directives";
import { defineConfig } from "unocss";

export default defineConfig({
  presets: [
    presetRemToPx(),
    presetWind3(),
    presetIcons({
      collections: {
        lucide: () => import("@iconify-json/lucide/icons.json").then(i => i.default),
        web3: () => import("@iconify-json/token/icons.json").then(i => i.default),
      },
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: {
          name: "Fira Sans",
          weights: ["400", "500"],
        },
        serif: {
          name: "Source Serif 4",
          weights: ["400"],
          italic: false,
        },
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerCompileClass(),
  ],
  theme: {
    colors: {
      text: "var(--color-text)",
      bg: "var(--color-bg)",
      link: "var(--color-link)",
      detail: "var(--color-detail)",
      selection: "var(--color-selection)",
      focus: "var(--color-focus)",
      logo: "var(--color-logo)",
      a: "var(--color-a)",
      b: "var(--color-b)",
      c: "var(--color-c)",
    },
  },
  shortcuts: {
    highlight: "filter-brightness-[135%]",
  },
  rules: [
    ["pixelated", { "image-rendering": "pixelated" }],
  ],
});
