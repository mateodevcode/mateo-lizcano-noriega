import React from "react";
import CardColaborador from "./CardColaborador";
import { colaboradores } from "@/data/colaboradores";

const Colaboradores = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-start items-center h-full">
        <div className="flex flex-col justify-center items-center text-center px-2">
          <h2 className="lg:text-4xl md:text-4xl sm:text-2xl font-semibold lg:mt-20 md:mt-20 sm:mt-16">
            Colaboradores
          </h2>
          <p className="lg:text-xl md:text-xl sm:text-sm mt-5">
            Gracias a todos los colaboradores que han participado en el
            desarrollo de muchos de nuestros proyectos.
          </p>
        </div>
        <div className="w-8/12 flex flex-wrap justify-between items-start lg:mt-16 md:mt-16 sm:mt-10 mb-20">
          {colaboradores.map((colaborador, index) => (
            <CardColaborador
              key={index}
              nombre={colaborador.nombre}
              rol={colaborador.rol}
              img={colaborador.img}
              linkedin={colaborador.linkedin}
              github={colaborador.github}
            />
          ))}
        </div>
      </div>
      <p className="text-center px-2 lg:text-base md:text-base sm:text-sm">
        Si quieres colaborar con nosotros, no dudes en contactarnos.
      </p>
    </>
  );
};

export default Colaboradores;
