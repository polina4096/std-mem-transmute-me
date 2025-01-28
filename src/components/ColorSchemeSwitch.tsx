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

  return (
    <div ref={menuRef} class="relative flex flex-col items-end">
      <div
        class="i-lucide-sun cursor-pointer select-none text-[21px] text-neutral-500 transition duration-100 ease-in-out hover:text-neutral-400"
        onClick={() => setShowMenu(!showMenu())}
      />
      <Show when={showMenu()}>
        <div class="absolute top-[21px] z-36 pt-2 text-right">
          <For each={colorSchemes}>
            {current => (
              <div
                class={clsx("text-neutral-400 hover:text-neutral-300 hover:dark:text-neutral-100 cursor-pointer", colorScheme() === current && "after:absolute after:right-[-12px] after:content-['•']")}
                onClick={() => {
                  setShowMenu(false);
                  setColorScheme(current);
                  localStorage.setItem("color-scheme", current);
                }}
              >
                {current}
              </div>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
}
