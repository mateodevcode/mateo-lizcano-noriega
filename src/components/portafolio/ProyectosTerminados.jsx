import React from "react";
import Proyecto from "./Proyecto";
import { proyectos_terminados } from "@/data/proyectos";

const ProyectosTerminados = () => {
  return (
    <>
      <div className="bg-blue-600/50 h-14 w-10/12 mt-16 flex flex-row lg:justify-start md:justify-start sm:justify-center items-center px-10 rounded-lg shadow-md shadow-blue-600/50">
        <h3 className="lg:text-3xl md:text-3xl sm:text-xl font-bold text-black dark:text-white">
          Proyectos terminados
        </h3>
      </div>
      {proyectos_terminados.map((proyecto, index) => (
        <Proyecto
          key={index}
          titulo={proyecto.titulo}
          url={proyecto.url}
          github={proyecto.github}
          imagen={proyecto.imagen}
        />
      ))}
    </>
  );
};

export default ProyectosTerminados;
