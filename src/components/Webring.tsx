import { createSignal, onMount, Show } from "solid-js";

export interface WebringModel {
  name: string;
  url: string;
  context: string;
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
        <a class="i-lucide-move-left block" href={props.model.prev} />
        <a class="link" href={props.model.url}>{`[${props.model.name} webring]`}</a>
        <a class="i-lucide-move-right block" href={props.model.next} />
      </div>

      <Show when={info()}>
        {info => <a class="absolute bottom-0 left-0 hidden text-text decoration-none @sm:block hover:underline" href={props.model.prev}>{info().prev.name}</a>}
      </Show>
      <Show when={info()}>
        {info => <a class="absolute bottom-0 right-0 hidden text-text decoration-none @sm:block hover:underline" href={props.model.next}>{info().next.name}</a>}
      </Show>
    </div>
  );
}
