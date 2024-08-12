import React from "react";
import CardRecurso from "./CardRecurso";
import { recursosAprenderIngles } from "@/data/recursos.aprender.ingles";

const Recurso = () => {
  return (
    <>
      {recursosAprenderIngles.map((recurso, index) => (
        <div className="lg:mt-20 md:mt-20 sm:mt-10" key={index}>
          {recurso.posicion}
          <div className="flex flex-row justify-center items-center mt-5">
            <CardRecurso
              img={recurso.img}
              Alt={recurso.Alt}
              description={recurso.description}
              boton={recurso.boton}
              Url={recurso.Url}
              download={recurso.download}
              estado={recurso.estado}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Recurso;
