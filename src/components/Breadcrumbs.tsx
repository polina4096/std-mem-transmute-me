import type { JSX } from "solid-js";
import { For, Show } from "solid-js";

export function Breadcrumbs(props: {
  segments: JSX.Element[];
}) {
  return (
    <div class="flex">
      <For each={props.segments}>
        {(segment, i) => (
          <>
            <div>
              {segment}
            </div>
            <Show when={i() !== props.segments.length - 1}>
              <div>::</div>
            </Show>
          </>
        )}
      </For>
    </div>
  );
}
