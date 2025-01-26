import clsx from "clsx";
import { createSignal } from "solid-js";

export function CopyButton(props: {
  content: string;
}) {
  const [active, setActive] = createSignal(false);
  let timeout: number | undefined;

  function handleClick() {
    navigator.clipboard.writeText(props.content);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setActive(false);
    }, 1000);

    setActive(true);
  }

  return (
    <div
      class={clsx("text-neutral-500 hover:text-neutral-400 transition duration-100 ease-in-out cursor-pointer ml-3 select-none text-[21px]", active() ? "i-lucide-check" : "i-lucide-clipboard-copy")}
      onClick={handleClick}
    />
  );
}
