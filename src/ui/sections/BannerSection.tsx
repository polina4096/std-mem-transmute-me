import type { BannerModel } from "../../components/Banner";
import { For } from "solid-js";
import { Banner } from "../../components/Banner";

export function BannerSection(props: {
  banners: BannerModel[];
}) {
  return (
    <div class="flex flex-wrap justify-center gap-1 -mx-2">
      <For each={props.banners}>
        {banner => (
          <Banner
            alt={banner.alt}
            src={banner.src}
            href={banner.href}
          />
        )}
      </For>
    </div>
  );
}
