import type { Accessor } from "solid-js";
import type { ColorScheme } from "../components/ColorSchemeContext";
import { createEffect } from "solid-js";

export function applyColorScheme(colorScheme: Accessor<ColorScheme>) {
  const colorSchemeClass = () => {
    switch (colorScheme()) {
      case "system":
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          return "dark";
        }

        break;

      case "dark":
        return "dark";
        break;
    }
  };

  createEffect(() => {
    const classes = colorSchemeClass() ?? "";
    document.documentElement.classList.value = classes;
  });
}
