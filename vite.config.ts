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
        { src: "https://std.mem.transmute.me/88x31/transmute.png", href: "https://std.mem.transmute.me", alt: "std.mem.transmute.me" },
        { src: "https://tei.su/88x31/teidesu.png", href: "https://tei.su", alt: "teidesu" },
        { src: "https://jsopn.com/images/88x31/button.gif", href: "https://jsopn.com/?glunging=true", alt: "jsopn" },
        { src: "https://jsopn.com/images/88x31/senko.gif", href: "https://senko.dev/", alt: "senkodev" },
        { src: "https://oat.zone/badges/oatzone.gif", href: "https://oat.zone/", alt: "oatmealine" },
        { src: "https://oat.zone/badges/oatzonealt.png", href: "https://oat.zone/", alt: "oatmealine (alt)" },
        { src: "https://adryd.com/static/buttons/adryd.png", href: "https://adryd.com/", alt: "adryd" },
        { src: "https://x86.pet/~strawberry/june_88x31.png", href: "https://x86.pet/", alt: "june" },
        { src: "https://vmfunc.gg/button.png", href: "https://vmfunc.gg/", alt: "celeste" },
        { src: "https://tei.su/88x31/stupid.fish.png", href: "https://stupid.fish", alt: "stupid.fish" },
        { src: "https://std.mem.transmute.me/88x31/krill_cool.jpg", href: "https://krill.cool", alt: "krill.cool" },
        // { src: "https://std.mem.transmute.me/88x31/madohomu.png", href: "https://homu.gay", alt: "homu.gay" },
        { src: "https://std.mem.transmute.me/88x31/zed.png", href: "https://zed.dev", alt: "Zed" },
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
