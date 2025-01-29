import type { Accessor } from "solid-js";
import type { ColorScheme } from "../components/ColorSchemeContext";
import { createEffect } from "solid-js";

function createThemeColorMeta(kind?: "light" | "dark") {
  const meta = document.createElement("meta");
  meta.setAttribute("name", "theme-color");

  switch (kind) {
    case "light":
      meta.setAttribute("media", "(prefers-color-scheme: light)");
      break;

    case "dark":
      meta.setAttribute("media", "(prefers-color-scheme: dark)");
      break;
  }

  return meta;
}

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

    document.head.querySelectorAll("meta[name=theme-color]").forEach(e => e.remove());

    switch (colorScheme()) {
      case "system": {
        document.head.appendChild(createThemeColorMeta("light")).setAttribute("content", window.getComputedStyle(window.document.body).getPropertyValue("--color-light-bg"));
        document.head.appendChild(createThemeColorMeta("dark")).setAttribute("content", window.getComputedStyle(window.document.body).getPropertyValue("--color-dark-bg"));
        break;
      }

      case "dark": {
        const themeColorMeta = document.head.querySelector("meta[name=theme-color]") ?? document.head.appendChild(createThemeColorMeta());
        const style = window.getComputedStyle(window.document.body);
        const color = style.getPropertyValue("--color-dark-bg");
        themeColorMeta.setAttribute("content", color);
        break;
      }

      case "light": {
        const themeColorMeta = document.head.querySelector("meta[name=theme-color]") ?? document.head.appendChild(createThemeColorMeta());
        const style = window.getComputedStyle(window.document.body);
        const color = style.getPropertyValue("--color-light-bg");
        themeColorMeta.setAttribute("content", color);
        break;
      }
    }
  });
}
