import type { JSX } from "solid-js";

export function ToggleSpoiler(props: {
  children: JSX.Element;
  placeholder: JSX.Element;
}) {
  return (
    <details class="[&_.indicator-close]:open:block [&_.indicator-open]:open:hidden">
      <summary class="relative cursor-pointer select-none select-none list-none text-neutral-500 hover:text-text [&_.summary-content]:focus:text-text">
        <div
          class="summary-content absolute flex pr-1.5 -left-6"
        >
          <div>[</div>
          <div class="indicator-open block w-2 text-center">+</div>
          <div class="indicator-close hidden w-2 text-center">-</div>
          <div>]</div>
        </div>
        <div class="summary-content">
          Show more options...
        </div>
      </summary>
      {props.children}
    </details>
  );
}
