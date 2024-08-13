import React from "react";
import Saludo from "./Saludo";
import TextoSecreto from "./TextoSecreto";
import Skills from "./Skills";
import Link from "next/link";

const Inicio = () => {
  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col justify-between items-center w-full">
      <div className="lg:mx-40 md:mx-0 sm:mx-0 lg:w-[800px] md:w-[600px] sm:w-full lg:px-0 md:px-10 sm:px-5">
        <Saludo />
        <p className="w-full lg:text-xl md:text-xl sm:text-sm">
          <strong>MateoDev</strong> es solo el reflejo profesional de toda mi trayectoria, un
          espacio donde podrás ver mis <Link href="/portafolio"><strong className="text-green-500">proyectos</strong></Link> y disfrutar del aprendizaje que
          brindamos a través de todos los recursos obtenidos de esta <Link href="/"><strong className="text-blue-500">comunidad.</strong></Link>
        </p>
        <TextoSecreto />
      </div>
      <div className="lg:mr-40 md:mr-10 sm:mr-0 lg:mt-0 md:mt-0 sm:mt-5">
        <Skills />
      </div>
    </div>
  );
};

export default Inicio;
