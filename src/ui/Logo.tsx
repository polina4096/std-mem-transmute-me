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
        <div class="text-yellow-600 dark:text-green-500">transmute</div>
        <CopyButton content="std::mem::transmute" />
      </div>
      <div class="flex">
        <div class="text-neutral-500">Since 1.0.0 (const: 1.56.0)</div>
        <div>&nbsp;·&nbsp;</div>
        <a class="link" href="https://doc.rust-lang.org/src/core/intrinsics/mod.rs.html#1934">Source</a>
      </div>
    </div>
  );
}
