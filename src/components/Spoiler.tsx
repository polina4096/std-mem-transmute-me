import type { JSX } from "solid-js";

export function Spoiler(props: {
  children: JSX.Element;
  placeholder: JSX.Element;
}) {
  return (
    <details open class="flex justify-start [&_.placeholder]:open:hidden [&_.chevron]:hover:text-neutral-400 [&_.chevron]:open:hover:text-text [&_.chevron]:open:i-lucide-chevron-down">
      <summary class="list-none flex select-none cursor-pointer">
        <div class="chevron i-lucide-chevron-right text-neutral-500 mr-2 mt-1" />
        <div class="placeholder">
          {props.placeholder}
        </div>
      </summary>
      <div class="top-0 left-0">
        {props.children}
      </div>
    </details>
  );
}
