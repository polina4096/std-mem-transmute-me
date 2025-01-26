import type { Signal } from "solid-js";
import type { JSX } from "solid-js/jsx-runtime";
import { createContext, createSignal, useContext } from "solid-js";

export const colorSchemes = ["light", "dark", "system"] as const;
export type ColorScheme = typeof colorSchemes[number];

export const ColorSchemeContext = createContext<Signal<ColorScheme>>();

export function ColorSchemeProvider(props: { children: JSX.Element }) {
  const initialColorScheme = localStorage.getItem("color-scheme") ?? "system";

  const colorSchemeSignal = createSignal(
    (colorSchemes as unknown as string[]).includes(initialColorScheme)
      ? initialColorScheme
      : colorSchemes[colorSchemes.length - 1],
  ) as Signal<ColorScheme>;

  return (
    <ColorSchemeContext.Provider value={colorSchemeSignal}>
      {props.children}
    </ColorSchemeContext.Provider>
  );
}

export function useColorScheme() {
  return useContext(ColorSchemeContext);
}
