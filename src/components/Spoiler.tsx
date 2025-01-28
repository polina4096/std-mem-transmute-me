import type { JSX } from "solid-js";

export function Spoiler(props: {
  children: JSX.Element;
  placeholder: JSX.Element;
}) {
  return (
    <details open class="justify-start [&_.chevron]:open:i-lucide-chevron-down [&_.placeholder]:open:hidden [&_.chevron]:hover:text-neutral-400 [&_.chevron]:open:hover:text-text">
      <summary class="flex cursor-pointer select-none list-none">
        <div class="chevron i-lucide-chevron-right absolute mt-1 text-neutral-500" />
        <div class="placeholder relative left-6">
          {props.placeholder}
        </div>
      </summary>
      <div class="relative left-6">
        {props.children}
      </div>
    </details>
  );
}
