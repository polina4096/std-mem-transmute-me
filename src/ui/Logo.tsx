import { Breadcrumbs } from "../components/Breadcrumbs";
import { CopyButton } from "../components/CopyButton";

export function Logo() {
  return (
    <div class="font-sans">
      <Breadcrumbs segments={[
        <a class="link" href="https://doc.rust-lang.org/std/index.html">std</a>,
        <a class="link" href="https://doc.rust-lang.org/std/mem/index.html">mem</a>,
      ]}
      />
      <div class="flex items-center text-2xl font-medium">
        <div>Function</div>
        &nbsp;
        <div class="text-color-logo mr-3">transmute</div>
        <CopyButton content="std::mem::transmute" />
      </div>
      <div class="flex">
        <div class="text-detail">Since 1.0.0 (const: 1.56.0)</div>
        <div>&nbsp;·&nbsp;</div>
        <a class="link" href="https://github.com/polina4096/std-mem-transmute-me">Source</a>
      </div>
    </div>
  );
}
