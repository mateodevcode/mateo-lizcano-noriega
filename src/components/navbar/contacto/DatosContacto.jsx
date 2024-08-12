import { Image } from "@chakra-ui/react";
import Botones from "./Botones";
import Profesiones from "./Profesiones";
import DatosPersonales from "./DatosPersonales";

const DatosContacto = ({ cerrar }) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center text-gray-950 dark:text-white">
        <div className="shadow-lg rounded-lg bg-blue-600/60 dark:bg-green-600/60 flex flex-col justify-center items-center lg:w-[500px] md:w-[500px] sm:w-full">
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
              className="rounded-full -mb-20 bg-gray-100 border-solid border-4 lg:w-40 md:w-40 sm:w-32 select-none"
              src={"/contacto/foto_perfil.jpg"}
              alt="Profile Picture"
            />
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-14">
            <div>
              <DatosPersonales />
              <Profesiones />
              <Botones cerrar={cerrar} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatosContacto;
