import type { DOMElement } from "solid-js/jsx-runtime";
import clsx from "clsx";
import { createSignal, Show } from "solid-js";
import { selectElement } from "../utils";

export function CryptoAddress(props: {
  address: string;
  showCopyIcon?: boolean;
  statusDuration?: number;
}) {
  const [active, setActive] = createSignal(false);
  let timeout: number | undefined;

  function handleClick(e: MouseEvent & {
    currentTarget: HTMLDivElement;
    target: DOMElement;
  }) {
    selectElement(e.target);

    if (e.target.textContent !== null) {
      navigator.clipboard.writeText(e.target.textContent);
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setActive(false);
    }, props.statusDuration ?? 800);

    setActive(true);
  }

  return (
    <div class="relative min-w-0 [&_.active-icon]:hover:block">
      <div
        tabindex="0"
        class=":uno: cursor-pointer truncate rounded-md bg-neutral-100 px-1 font-serif active:bg-neutral-300 dark:bg-neutral-900 focus:bg-selection hover:underline [&:not(:focus)]:hover:bg-neutral-200 active:selection:bg-transparent dark:active:bg-neutral-700 dark:[&:not(:focus)]:hover:bg-neutral-800"
        onClick={handleClick}
      >
        {props.address}
      </div>
      <Show when={props.showCopyIcon ?? true}>
        <div class={clsx("active-icon hidden absolute top-1/2 translate-y-[-50%] -right-5", active() ? "i-lucide-check" : "i-lucide-copy")} />
      </Show>
    </div>
  );
}
