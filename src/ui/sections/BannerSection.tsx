import { createSignal, For } from "solid-js";

export interface BannerModel { src: string; href?: string; alt?: string }

export function BannerSection(props: {
  banners: BannerModel[];
}) {
  return (
    <div class="flex flex-wrap justify-center gap-1 -mx-2">
      <For each={props.banners}>
        {banner => (
          <Banner src={banner.src} href={banner.href} />
        )}
      </For>
    </div>
  );
}

export function Banner(props: {} & BannerModel) {
  const [loaded, setLoaded] = createSignal(false);

  return (
    <div class={loaded() ? ":uno: focus-within:outline-2 focus-within:outline-text focus-within:outline-solid" : "hidden"}>
      <a href={props.href} class="focus:outline-none">
        <img
          src={props.src}
          alt={props.alt}
          onLoad={() => setLoaded(true)}
          class=":uno: pixelated h-[31px] w-[88px] hover:outline-2 hover:outline-text hover:outline-solid"
        />
      </a>
    </div>
  );
}
