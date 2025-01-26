import { useColorScheme } from "./components/ColorSchemeContext";
import { ColorSchemeSwitch } from "./components/ColorSchemeSwitch";
import { Spoiler } from "./components/Spoiler";
import { applyColorScheme } from "./hooks/applyColorScheme";
import { Logo } from "./ui/Logo";

export function App() {
  const [colorScheme] = useColorScheme() ?? [() => "system"];
  applyColorScheme(colorScheme);

  return (
    <div class="w-full flex justify-center">
      <div class="max-w-[640px] w-full mx-10 pt-8 gap-2 flex flex-col">
        <div class="flex justify-between">
          <Logo />
          <ColorSchemeSwitch />
        </div>
        <Spoiler placeholder={<div class="text-neutral-500">Expand description</div>}>
          <div class="font-serif flex flex-col gap-3">
            <div>
              Hi, I'm Полина.
            </div>
            <div>Rust enthusiast, full-stack software developer. I work on all kinds of things, yet game development, graphics and compiler development are my favorite.</div>
          </div>
        </Spoiler>
      </div>
    </div>
  );
}
