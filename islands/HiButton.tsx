import { IS_BROWSER } from "$fresh/runtime.ts";
import { Signal } from "@preact/signals";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const HiButton: FunctionComponent<
  {
    children?: any;
    SayHi: Signal<any>;
    nombre: Signal<string>;
    apellido: Signal<any>;
  }
> = (
  { children, SayHi, nombre, apellido },
) => {
  return (
    <button
      class="trippyBackgroundAnimated"
      onClick={(e) => {
        e.preventDefault();
        SayHi.value = `Hola ${nombre.value} ${apellido.value}`;
      }}
    >
      {children}
    </button>
  );
};

export default HiButton;

