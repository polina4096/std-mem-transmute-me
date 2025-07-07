import { createMemo, Show } from "solid-js";

export function MidEllipsis(props: {
  text: string;
  endChars: number;
}) {
  // https://github.com/ProtonMail/WebClients/blob/main/packages/components/components/ellipsis/MiddleEllipsis.tsx
  // Split text per characters and not bytes. For example, 👋🌍😊🐶 with
  // charsToDisplayEnd=3 would end up being 👋🌍� and �🐶 with simple
  // string slice. With array slice (because string iterator iterates per
  // characters), the results is as expected 👋 and 🌍😊🐶.
  // Note this doesn't work with all unicodes. For example, flags have
  // six bytes and even that is not handled properly by string iterator.
  const chars = createMemo(() => [...props.text]);
  const start = () => chars().slice(0, -props.endChars).join("");
  const end = () => chars().slice(-props.endChars).join("");

  return (
    <span class="max-w-full inline-flex flex-nowrap overflow-hidden">
      <Show when={start().length > 0}>
        <span class="text-pre shrink-1 truncate" aria-hidden="true">
          {start()}
        </span>
      </Show>
      <span class="text-pre shrink-0" aria-hidden="true">
        {end()}
      </span>
    </span>
  );
}
