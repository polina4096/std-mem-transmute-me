import type { JSX } from "solid-js";
import { For } from "solid-js";
import { CryptoAddress } from "../../components/CryptoAddress";
import { Header } from "../../components/Header";
import { ToggleSpoiler } from "../../components/ToggleSpoiler";

interface DonateOption {
  text: JSX.Element;
  address: string;
}

const donate: DonateOption[] = [
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
        <div class="i-token-xmr" />
        <div>XMR</div>
      </div>
    ),
    address: "89tk2qoLxj2QUhXy9p67mJBW6cnLeDU79KWzeq5wSuqQjRsAgqFV8GCUstsNWVRkouiTZy2DWUdAs4A6gt8J2GrXRTnEWif",
  },
  {
    text: (
      <div class="flex items-center gap-1">
        <div class="i-token-solana" />
        <div>SOL</div>
      </div>
    ),
    address: "CP9qEdacUBhxV7QruyLEvyihtZkgdwVrafm4PKtZzUX8",
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

const donateMore: DonateOption[] = [
  {
    text: (
      <div class="flex items-center gap-1">
        <div class="i-token-litecoin" />
        <div>LTC</div>
      </div>
    ),
    address: "ltc1qsnz9d9hnn3cmy7ldx3zu736cd4lgw88nz2sswp",
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
        <div class="i-token-binance-smart-chain" />
        <div>BSC</div>
      </div>
    ),
    address: "0x0Ac5DE6A511fB67C9a10428d4828996c559Cdbca",
  },
];

export function DonateSection() {
  return (
    <div class="flex flex-col gap-2">
      <Header title="Donate" separator />

      {/* Regular donation options */}
      <div class="grid grid-cols-[1fr_2fr] gap-0.5">
        <For each={donate}>
          {({ text, address }) => (
            <>
              <div class="text-color-a">{text}</div>
              <CryptoAddress address={address} />
            </>
          )}
        </For>
      </div>

      {/* More donation options */}
      <ToggleSpoiler placeholder="Show more options...">
        <div class="grid grid-cols-[1fr_2fr] mt-2 gap-0.5">
          <For each={donateMore}>
            {({ text, address }) => (
              <>
                <div class="text-color-a">{text}</div>
                <CryptoAddress address={address} />
              </>
            )}
          </For>
        </div>
      </ToggleSpoiler>
    </div>
  );
}
