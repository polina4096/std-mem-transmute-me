import presetIcons from "@unocss/preset-icons";
import presetRemToPx from "@unocss/preset-rem-to-px";
import presetUno from "@unocss/preset-uno";
import presetWebFonts from "@unocss/preset-web-fonts";
import transformerCompileClass from "@unocss/transformer-compile-class";
import transformerDirectives from "@unocss/transformer-directives";
import { defineConfig } from "unocss";

export default defineConfig({
  presets: [
    presetRemToPx(),
    presetUno(),
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
      selection: "var(--color-selection)",
      focus: "var(--color-focus)",
    },
  },
  rules: [
    ["pixelated", { "image-rendering": "pixelated" }],
  ],
});
