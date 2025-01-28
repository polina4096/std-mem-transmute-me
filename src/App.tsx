import { useColorScheme } from "./components/ColorSchemeContext";
import { ColorSchemeSwitch } from "./components/ColorSchemeSwitch";
import { applyColorScheme } from "./hooks/applyColorScheme";
import { Logo } from "./ui/Logo";
import { DonateSection } from "./ui/sections/DonateSection";
import { InfoSection } from "./ui/sections/InfoSection";
import { LinksSection } from "./ui/sections/LinksSection";

export function App() {
  const [colorScheme] = useColorScheme() ?? [() => "system"];

  applyColorScheme(colorScheme);

  return (
    <div class="w-full flex justify-center">
      <div class="mx-10 max-w-[640px] w-full flex flex-col gap-6 pt-8">
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
    </div>
  );
}
