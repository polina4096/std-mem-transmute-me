import { selectElement } from "../utils";

export function CryptoAddress(props: { address: string }) {
  return (
    <div
      tabindex="0"
      class="cursor-pointer truncate rounded-md bg-neutral-100 px-1 font-serif active:bg-neutral-300 dark:bg-neutral-900 focus:bg-selection hover:underline [&:not(:focus)]:hover:bg-neutral-200 active:selection:bg-transparent dark:active:bg-neutral-700 dark:[&:not(:focus)]:hover:bg-neutral-800"
      onClick={(e) => {
        selectElement(e.target);

        if (e.target.textContent !== null) {
          navigator.clipboard.writeText(e.target.textContent);
        }
      }}
    >
      {props.address}
    </div>
  );
}
