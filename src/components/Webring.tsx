import { createSignal, onMount, Show } from "solid-js";
import { TextSkeleton } from "./TextSkeleton";

export interface WebringModel {
  name: string;
  url: string;
  context: string;
  suffix?: boolean;
  readonly next: string;
  readonly prev: string;
  readonly info: Promise<{
    prev: { name: string };
    next: { name: string };
  }>;
}

export type WebringModelFactory = (context: string) => WebringModel;

export function Webring(props: { model: WebringModel }) {
  const [info, setInfo] = createSignal<Awaited<WebringModel["info"]> | undefined>();

  onMount(async () => {
    setInfo(await props.model.info);
  });

  return (
    <div class="relative" style={{ "container-type": "inline-size" }}>
      <div class="flex items-center justify-center gap-2">
        <a class="i-lucide-move-left block" href={props.model.prev} aria-label="Previous website" />
        <a class="link" href={props.model.url}>{`[${props.model.name}${props.model.suffix ? " webring" : ""}]`}</a>
        <a class="i-lucide-move-right block" href={props.model.next} aria-label="Next website" />
      </div>

      <div class="absolute left-0 top-1/2 inline hidden translate-y-[-50%] @sm:block">
        <Show when={info()} fallback={<TextSkeleton min={48} max={96} />}>
          {info => <a class="text-text decoration-none hover:underline" href={props.model.prev}>{info().prev.name}</a>}
        </Show>
      </div>
      <div class="absolute right-0 top-1/2 inline hidden translate-y-[-50%] @sm:block">
        <Show when={info()} fallback={<TextSkeleton min={48} max={96} />}>
          {info => <a class="text-text decoration-none hover:underline" href={props.model.next}>{info().next.name}</a>}
        </Show>
      </div>
    </div>
  );
}
