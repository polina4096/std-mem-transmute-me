import { For } from "solid-js";
import { useColorScheme } from "./components/ColorSchemeContext";
import { ColorSchemeSwitch } from "./components/ColorSchemeSwitch";
import { Header } from "./components/Header";
import { Spoiler } from "./components/Spoiler";
import { applyColorScheme } from "./hooks/applyColorScheme";
import { Logo } from "./ui/Logo";
import { selectElement } from "./utils";

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

const donate = [
  {
    text: (
      <div class="flex items-center gap-1">
        <div class="i-token-bitcoin" />
        <div>BTC</div>
      </div>
    ),
    address: "bc1q4hkwmzjwgv7krprhamjzudwlhedlzftq9fuhvw",
  },
  {
    text: (
      <div class="flex items-center gap-1">
        <div class="i-token-ethereum" />
        <div>ETH</div>
      </div>
    ),
    address: "0xdFfa9a5e7841f9dF883150beD2d890c2FA7fC5dA",
  },
  {
    text: (
      <div class="flex items-center gap-1">
        <div class="i-token-binance-smart-chain" />
        <div>BSC</div>
      </div>
    ),
    address: "0xdFfa9a5e7841f9dF883150beD2d890c2FA7fC5dA",
  },
  {
    text: (
      <div class="flex items-center gap-1">
        <div class="i-token-xmr" />
        <div>XMR</div>
      </div>
    ),
    address: "89tk2qoLxj2QUhXy9p67mJBW6cnLeDU79KWzeq5wSuqQjRsAgqFV8GCUstsNWVRkouiTZy2DWUdAs4A6gt8J2GrXRTnEWif",
  },
  {
    text: (
      <div class="flex items-center gap-1">
        <div class="i-token-tron" />
        <div>TRON</div>
      </div>
    ),
    address: "TWAeXM8fApkhY3gbzcpAkYcQfDo3ZdKu94",
  },
  {
    text: (
      <div class="flex items-center gap-1">
        <div class="i-token-ton" />
        <div>TON</div>
      </div>
    ),
    address: "UQAQ_as5gswHuaiuYWe1y1xzi_pMgziZb4stVta_BqqsDDNv",
  },
];

export function App() {
  const [colorScheme] = useColorScheme() ?? [() => "system"];
  applyColorScheme(colorScheme);

  return (
    <div class="w-full flex justify-center">
      <div class="mx-10 max-w-[640px] w-full flex flex-col gap-6 pt-8">
        <div class="flex justify-between">
          <Logo />
          <ColorSchemeSwitch />
        </div>
        <div class="flex flex-col gap-6">
          <Spoiler placeholder={<div class="text-neutral-500">Expand description</div>}>
            <div class="flex flex-col gap-3 font-serif">
              <div>
                Hi, I'm Полина.
              </div>
              <div>Rust enthusiast, full-stack software developer. I work on all kinds of things, yet game development, graphics and compiler development are my favorite.</div>
            </div>
          </Spoiler>
          <div class="flex flex-col gap-2">
            <Header title="Links" separator />
            <div class="grid grid-cols-[1fr_2fr]">
              <For each={links}>
                {({ text, link, href }) => (
                  <>
                    <div class="text-fuchsia-700 dark:text-teal-500">
                      {text}
                    </div>
                    <a class="text-text font-serif decoration-none hover:underline" href={href}>
                      {link}
                    </a>
                  </>
                )}
              </For>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <Header title="Donate" separator />
            <div class="grid grid-cols-[1fr_2fr] gap-0.5">
              <For each={donate}>
                {({ text, address }) => (
                  <>
                    <div class="text-emerald-800 dark:text-emerald-500">
                      {text}
                    </div>
                    <div
                      class="cursor-pointer truncate rounded-md bg-neutral-200 px-1 font-serif active:bg-neutral-400 dark:bg-neutral-900 hover:bg-neutral-300 hover:underline dark:active:bg-neutral-700 dark:hover:bg-neutral-800"
                      onClick={(e) => {
                        const addr = e.target.textContent;
                        if (!addr) {
                          return;
                        }

                        selectElement(e.target);
                        navigator.clipboard.writeText(addr);
                      }}
                    >
                      {address}
                    </div>
                  </>
                )}
              </For>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
