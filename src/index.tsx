/* @refresh reload */
import { render } from "solid-js/web";

import { App } from "./App.tsx";

import { ColorSchemeProvider } from "./components/ColorSchemeContext.tsx";
import "@unocss/reset/sanitize/sanitize.css";
import "@unocss/reset/sanitize/assets.css";
import "virtual:uno.css";
import "./index.css";

const root = document.getElementById("root");

render(() => (
  <ColorSchemeProvider>
    <App />
  </ColorSchemeProvider>
), root!);
