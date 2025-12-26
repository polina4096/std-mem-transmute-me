import { useColorScheme } from "./components/ColorSchemeContext";
import { ColorSchemeSwitch } from "./components/ColorSchemeSwitch";
import { Webring } from "./components/Webring";
import { applyColorScheme } from "./hooks/applyColorScheme";
import { Logo } from "./ui/Logo";
import { BannerSection } from "./ui/sections/BannerSection";
import { DonateSection } from "./ui/sections/DonateSection";
import { InfoSection } from "./ui/sections/InfoSection";
import { LinksSection } from "./ui/sections/LinksSection";
import * as rutg from "./webrings/otoring";

export function App() {
  const [colorScheme] = useColorScheme() ?? [() => "system"];

  applyColorScheme(colorScheme);

  return (
    <div class="w-full flex flex-col items-center">
      <div class="max-w-[640px] flex flex-col justify-between min-h-dvh">
        <div class="mx-10 flex flex-col gap-6 pt-8">
          <div class="flex justify-between">
            <Logo />
            <ColorSchemeSwitch />
          </div>
          <div class="flex flex-col gap-6" role="main">
            <InfoSection />
            <LinksSection />
            <DonateSection />
          </div>
        </div>
        <div class="w-full flex flex-col gap-4 px-8 py-4" role="contentinfo">
          <BannerSection banners={import.meta.env.BANNERS_88_31} />
          <Webring model={rutg.webring(import.meta.env.WEBRING_RUTG_CTX)} />
        </div>
      </div>
    </div>
  );
}
