import { Image } from "@chakra-ui/react";
import Botones from "./Botones";
import Profesiones from "./Profesiones";
import DatosPersonales from "./DatosPersonales";

const DatosContacto = ({ cerrar }) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center text-gray-950 dark:text-white">
        <div className="shadow-lg rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-800 flex flex-col justify-center items-center lg:w-[450px] md:w-[450px] sm:w-full">
          <div
            className="bg-blue-600 h-full w-full rounded-t-md p-8 flex items-start select-none"
            style={{
              backgroundImage: `url(/contacto/fondo.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Image
              className="rounded-full -mb-20 border-zinc-400 border-[1px] lg:w-40 md:w-40 sm:w-32 select-none"
              src={"/contacto/foto_perfil.jpg"}
              alt="Profile Picture"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-16">
            <DatosPersonales />
            <Profesiones />
            <Botones cerrar={cerrar} />
          </div>
        </div>
      </div>
    </>
  );
};

export default DatosContacto;
