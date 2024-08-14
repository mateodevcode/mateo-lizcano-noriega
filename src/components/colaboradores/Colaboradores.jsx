import React from "react";
import CardColaborador from "./CardColaborador";
import { colaboradores } from "@/data/colaboradores";

const Colaboradores = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-start items-center h-full">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl font-semibold mt-20">Colaboradores</h2>
          <p className="text-xl mt-5">
            Gracias a todos los colaboradores que han participado en el
            desarrollo de muchos de nuestros proyectos.
          </p>
        </div>
        <div className="w-8/12 flex flex-wrap justify-between items-start mt-16 mb-20">
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
      <p className="text-center">
        Si quieres colaborar con nosotros, no dudes en contactarnos.
      </p>
    </>
  );
};

export default Colaboradores;
