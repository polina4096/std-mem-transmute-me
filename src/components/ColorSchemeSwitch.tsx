import type { ColorScheme } from "./ColorSchemeContext";
import { useClickOutside } from "@solid-hooks/core/web";
import clsx from "clsx";
import { createSignal, For, Show } from "solid-js";
import { colorSchemes, useColorScheme } from "./ColorSchemeContext";

export function ColorSchemeSwitch() {
  const [colorScheme, setColorScheme] = useColorScheme()!;
  const [showMenu, setShowMenu] = createSignal(false);

  let menuRef: HTMLDivElement | undefined;
  useClickOutside(() => menuRef, {
    onClickOutside: () => setShowMenu(false),
  });

  const handleClick = (current: ColorScheme) => {
    setShowMenu(false);
    setColorScheme(current);
    localStorage.setItem("color-scheme", current);
  };

  return (
    <div ref={menuRef} class="relative flex flex-col items-end">
      <button
        class="m-0 cursor-pointer border-none bg-transparent p-0"
        onClick={() => setShowMenu(!showMenu())}
      >
        <div class="i-lucide-sun text-[21px] text-neutral-500 transition duration-100 ease-in-out hover:text-neutral-400" />
      </button>
      <Show when={showMenu()}>
        <div class="absolute top-[21px] z-36 select-none pt-2 text-right">
          <For each={colorSchemes}>
            {current => (
              <button
                class={clsx("m-0 cursor-pointer border-none bg-transparent p-0 text-[16px] text-neutral-500 font-sans hover:text-neutral-400 hover:dark:text-neutral-100", colorScheme() === current && "after:absolute after:right-[-12px] after:content-['•']")}
                onClick={() => handleClick(current)}
              >
                {current}
              </button>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}
