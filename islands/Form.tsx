import { FunctionComponent } from "preact";
import { useSignal } from "@preact/signals";
import Shower from "../components/Shower.tsx";
import HiButton from "../islands/HiButton.tsx";

const Form: FunctionComponent = () => {
  const SayHi = useSignal("");
  const nombre = useSignal("");
  const apellido = useSignal("");

  return (
    <div class="formBody">
      <form class="formBox" method="get" target="/hihihi">
        <h3>Say hi hi hi</h3>
        <input type="text" name="nombre" placeholder={"Name"} value={nombre} onInput={(e) => nombre.value = e.currentTarget.value}/>
        <br />
        <input type="text" name="apellido" placeholder={"Last name"} value={apellido} onInput={(e) => apellido.value = e.currentTarget.value}/>
        <br />
        <HiButton SayHi={SayHi} nombre={nombre} apellido={apellido}>
          Hi!
        </HiButton>
      </form>
      <Shower
        text={SayHi}
      />
    </div>
  );
};

export default Form;

//Pasamos su codigo hihihi en un componente function y usamos las señales para que se actualice en tiempo real.
//De esta manera se hace para hacerlo en el cliente
