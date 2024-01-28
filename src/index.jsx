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
    <div class="flex flex-col items-center h-screen">
      <h1 class="mb-8 text-3xl">
        {count()} x {multiplier()} = {product()}
      </h1>
      <div>
        <button
          class="bg-black text-white border-none rounded-sm mr-8 py-1 px-2"
          onclick={() => setCount(count() + 1)}
        >
          increment
        </button>
        <button
          class="bg-black text-white border-none rounded-sm py-1 px-2"
          onClick={() => setMultiplier(multiplier() + 1)}
        >
          multiplier
        </button>
      </div>
    </div>
  );
}

render(App, document.getElementById("root"));

render(Reactivity, document.getElementById("root"));
