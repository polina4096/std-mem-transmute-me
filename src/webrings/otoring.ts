import type { WebringModelFactory } from "../components/Webring";

export const webring: WebringModelFactory = context => ({
  name: "otoring",
  url: "https://webring.otomir23.me",
  context,
  get next() { return `https://webring.otomir23.me/${this.context}/next`; },
  get prev() { return `https://webring.otomir23.me/${this.context}/prev`; },
  get info() {
    return fetch(`https://webring.otomir23.me/${this.context}/data`)
      .then(e => e.json()
        .then(e => ({
          prev: { name: e?.prev?.name ?? "" },
          next: { name: e?.next?.name ?? "" },
        })));
  },
});
