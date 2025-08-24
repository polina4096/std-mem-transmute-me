import { createSignal } from "solid-js";

export interface BannerModel { src: string; href?: string; alt?: string }

export function Banner(props: {} & BannerModel) {
  const [loaded, setLoaded] = createSignal(false);

  return (
    <div class={loaded() ? ":uno: focus-within:outline-2 focus-within:outline-text focus-within:outline-solid" : "hidden"}>
      <a href={props.href} class="focus:outline-none">
        <img
          src={props.src}
          alt={props.alt}
          onLoad={() => setLoaded(true)}
          class=":uno: h-[31px] w-[88px] pixelated hover:outline-2 hover:outline-text hover:outline-solid"
        />
      </a>
    </div>
  );
}
