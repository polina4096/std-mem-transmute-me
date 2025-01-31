import { Spoiler } from "../../components/Spoiler";

export function InfoSection() {
  return (
    <Spoiler placeholder={<div class="text-neutral-500">Expand description</div>}>
      <div class="flex flex-col gap-3 font-serif">
        <div>
          Hi, I'm
          {" "}
          <span class="underline underline-offset-2 decoration-dotted" title="Polina [pɐˈlʲinə]">Полина</span>
          .
        </div>
        <div>Rust enthusiast, full-stack software developer. I work on all kinds of things, yet game development, graphics and compiler development are my favorite.</div>
      </div>
    </Spoiler>
  );
}
