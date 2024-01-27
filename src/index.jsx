/* @refresh reload */
import { render } from "solid-js/web";
import { createSignal } from "solid-js";

import "./index.css";
import App from "./App";

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

function Reactivity() {
  const [count, setCount] = createSignal(3);
  const [multiplier, setMultiplier] = createSignal(3);
  const product = () => count() * multiplier();

  return (
    <div>
      <h1>
        {count()} x {multiplier()} = {product()}
      </h1>
      <button onclick={() => setCount(count() + 1)}>increment</button>
      <button onClick={() => setMultiplier(multiplier() + 1)}>
        multiplier
      </button>
    </div>
  );
}

render(App, document.getElementById("root"));

render(Reactivity, document.getElementById("root"));
