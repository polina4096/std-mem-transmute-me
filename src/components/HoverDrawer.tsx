import type { JSX } from "solid-js";
import { debounce } from "@solid-primitives/scheduled";
import { clsx } from "clsx";
import { createSignal } from "solid-js";

export function HoverDrawer(props: {
  fallback: JSX.Element;
  children: JSX.Element;
}) {
  const [shown, setShown] = createSignal(false);

  const hide = debounce(() => setShown(false), 200);
  const show = () => {
    setShown(true);
    hide.clear();
  };

  return (
    <div
      class="w-full flex flex-col items-center"
      onMouseOver={() => show()}
      onMouseOut={() => hide()}
    >
      <div class={clsx("text-nowrap cursor-pointer text-neutral-500 underline", shown() && "hidden")}>
        {props.fallback}
      </div>
      <div class={clsx("transition-[transform,opacity]", shown() ? "pb-2 -mb-8 -translate-y-8 opacity-100" : "h-0 opacity-0")}>
        {props.children}
      </div>
    </div>
  );
}
