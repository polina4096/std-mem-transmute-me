import { useColorScheme } from "./components/ColorSchemeContext";
import { ColorSchemeSwitch } from "./components/ColorSchemeSwitch";
import { Webring } from "./components/Webring";
import { applyColorScheme } from "./hooks/applyColorScheme";
import { Logo } from "./ui/Logo";
import { DonateSection } from "./ui/sections/DonateSection";
import { InfoSection } from "./ui/sections/InfoSection";
import { LinksSection } from "./ui/sections/LinksSection";
import * as rutg from "./webrings/rutg";

export function App() {
  const [colorScheme] = useColorScheme() ?? [() => "system"];

  applyColorScheme(colorScheme);

  return (
    <div class="w-full flex flex-col items-center">
      <div class="max-w-[640px] min-h-screen flex flex-col justify-between">
        <div class="mx-10 flex flex-col gap-6 pt-8">
          <div class="flex justify-between">
            <Logo />
            <ColorSchemeSwitch />
          </div>
          <div class="flex flex-col gap-6">
            <InfoSection />
            <LinksSection />
            <DonateSection />
          </div>
        </div>
        <div class="w-full py-4">
          <Webring model={rutg.webring(import.meta.env.WEBRING_RUTG_CTX)} />
        </div>
      </div>
    </div>
  );
}
