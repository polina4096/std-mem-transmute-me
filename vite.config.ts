import browserslist from "browserslist";
import { browserslistToTargets, Features } from "lightningcss";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

const browsers = "defaults and fully supports es6-module and not and_uc > 0 and not and_qq > 0 and not kaios > 0";

export default defineConfig({
  define: {
    "import.meta.env.WEBRING_RUTG_CTX": "'polina4096'",
    "import.meta.env.BANNERS_88_31":
      [
        { src: "https://std.mem.transmute.me/88x31/polina4096.png", href: "https://std.mem.transmute.me", alt: "polina4096" },
        { src: "https://std.mem.transmute.me/88x31/madohomu.png", href: "https://homu.gay", alt: "homu.gay" },
        { src: "https://std.mem.transmute.me/88x31/zed.png", href: "https://zed.dev", alt: "Zed" },
        { src: "https://tei.su/88x31/teidesu.png", href: "https://tei.su", alt: "teidesu" },
        { src: "https://tei.su/88x31/stupid.fish.png", href: "https://stupid.fish", alt: "stupid.fish" },
      ],
  },
  plugins: [
    UnoCSS(),
    solid(),
  ],
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets: browserslistToTargets(browserslist(browsers)),
      exclude: Features.VendorPrefixes,
    },
  },
  build: {
    cssMinify: "lightningcss",
  },
});
