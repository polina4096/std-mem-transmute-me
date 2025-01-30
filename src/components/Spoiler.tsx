import type { JSX } from "solid-js";

export function Spoiler(props: {
  children: JSX.Element;
  placeholder: JSX.Element;
}) {
  return (
    <details open class=":uno: justify-start [&_.chevron]:open:i-lucide-chevron-down [&_.placeholder]:open:hidden [&_.chevron]:hover:text-neutral-400 [&_.chevron]:open:hover:text-text">
      <summary class=":uno: flex cursor-pointer select-none list-none focus:outline-none [&_.chevron-container]:focus-visible:rounded-0.25 [&_.chevron]:focus-visible:text-neutral-400 [&_.chevron-container]:focus-visible:outline-width-2 [&_.chevron-container]:focus-visible:outline-focus [&_.chevron-container]:focus-visible:outline-solid">
        <div class="chevron-container absolute mt-1">
          <div class="chevron i-lucide-chevron-right text-neutral-500" />
        </div>
        <div class="placeholder relative left-6">
          {props.placeholder}
        </div>
      </summary>
      <div class="relative left-6 mr-6">
        {props.children}
      </div>
    </details>
  );
}
