import { For } from "solid-js";
import { Header } from "../../components/Header";

const links = [
  {
    text: "Email",
    link: "polina8192@gmail.com",
    href: "mailto:polina8192@gmail.com",
  },
  {
    text: "Telegram",
    link: "https://t.me/polina4096",
    href: "https://t.me/polina4096",
  },
  {
    text: "Github",
    link: "https://github.com/polina4096",
    href: "https://github.com/polina4096",
  },
];

export function LinksSection() {
  return (
    <div class="flex flex-col gap-2">
      <Header title="Links" separator />
      <div class="grid grid-cols-[1fr_2fr]">
        <For each={links}>
          {({ text, link, href }) => (
            <>
              <div class="text-color-b">{text}</div>
              <a class="text-text font-serif decoration-none hover:underline" href={href}>{link}</a>
            </>
          )}
        </For>
      </div>
    </div>
  );
}
