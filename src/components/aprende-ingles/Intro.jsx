import React from "react";

const Intro = () => {
  return (
    <>
      <h1 className="lg:text-6xl md:text-6xl sm:text-3xl font-semibold text-center lg:mt-10 md:mt-10 sm:mt-5">
        Aprende inglés gratis
      </h1>
      <div className="flex flex-col justify-center items-start lg:text-xl md:text-sm">
        <p className="mt-10">
          ¡Descubre un mundo sin límites para{" "}
          <strong className="text-amber-400">aprender inglés!</strong> Sumérgete
          en una biblioteca repleta de recursos gratuitos:
        </p>
        <p className="mt-5">
          Desde libros, aplicaciones web, aplicaciones móviles, hasta profesores
          influencer y muchos videos prácticos, además de certificaciones de
          diversas organizaciones que ofrecen <strong>cursos gratis</strong>.{" "}
          <strong className="text-blue-500">
            En la era tecnológica actual
          </strong>
          , el acceso a internet nos permite aprender prácticamente cualquier
          cosa de manera autodidacta,{" "}
          <strong>¡desde cualquier lugar del mundo!.</strong>
        </p>
        <div className="mt-5">
          <strong>MateoDev:</strong>
          <i className="text-green-600">{` "Disfruto aprendiendo de manera didáctica; luego, cuando quiero profundizar, consulto la documentación oficial e investigo para obtener un entendimiento más completo."`}</i>
        </div>
      </div>
    </>
  );
};

export default Intro;
