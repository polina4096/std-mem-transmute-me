import clsx from "clsx";
import { createSignal } from "solid-js";

export function CopyButton(props: {
  content: string;
  duration?: number;
}) {
  const [active, setActive] = createSignal(false);
  let timeout: number | undefined;

  function handleClick() {
    navigator.clipboard.writeText(props.content);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setActive(false);
    }, props.duration ?? 800);

    setActive(true);
  }

  return (
    <button
      class="m-0 cursor-pointer border-none bg-transparent p-0"
      onClick={handleClick}
    >
      <div
        class={clsx("text-neutral-500 hover:text-neutral-400 transition duration-100 ease-in-out cursor-pointer select-none text-[21px]", active() ? "i-lucide-check" : "i-lucide-clipboard-copy")}
      />
    </button>
  );
}
