import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  define: {
    "import.meta.env.WEBRING_RUTG_CTX": "23",
  },
  plugins: [
    UnoCSS(),
    solid(),
  ],
});
