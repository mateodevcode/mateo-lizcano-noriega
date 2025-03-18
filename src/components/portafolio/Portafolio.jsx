"use client";

import Image from "next/image";
import { TbWorldShare } from "react-icons/tb";
import { IoCodeOutline } from "react-icons/io5";
import { proyectos_terminados } from "@/data/proyectos";

const Portafolio = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center xl:px-36 lg:px-5 md:px-5 sm:px-2 smd:px-5 pb-20">
      <div className="w-full mt-10 p-4">
        <h2 className="lg:text-4xl md:text-4xl sm:text-3xl font-bold">
          Mi Portafolio
        </h2>
        <p className="xl:text-base lg:text-base md:text-base smd:text-sm sm:text-xs text-gray-500 mt-2">
          Explora mis proyectos más recientes desarrollados con diversas
          tecnologías, desde aplicaciones web hasta software empresarial,
          adaptados a las necesidades únicas de cada cliente
        </p>
      </div>
      <div className="w-full h-full p-4 grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 place-content-center mx-auto">
        {proyectos_terminados.map((proyecto, index) => (
          <div
            key={index}
            className="w-full bg-white h-[500px] flex flex-col justify-between items-center rounded-lg shadow-sm shadow-black/50 dark:shadow-white/50"
          >
            <div className="w-full h-96">
              <Image
                src={proyecto.imagen}
                alt="hero"
                width={500}
                height={500}
                className="w-full xl:h-64 lg:h-64 md:h-64 smd:h-64 sm:h-60 rounded-t-lg object-cover"
              />
            </div>
            <div className="p-5 flex flex-col justify-between items-start h-full">
              <h3 className="xl:text-2xl lg:text-2xl md:text-lg smd:text-xl sm:text-base font-bold text-zinc-900">
                {proyecto.titulo}
              </h3>
              <p className="text-gray-500 xl:text-sm lg:text-sm md:text-sm smd:text-xs sm:text-xs font-light">
                {proyecto.description}
              </p>
              <div className="w-full flex flex-col justify-start items-start mt-5">
                <div className="">
                  {proyecto.tecnologias.map((tecnologia, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1"
                    >
                      {tecnologia}
                    </span>
                  ))}
                </div>
                <div className="w-full flex justify-between items-center mt-5">
                  <button
                    className="text-xs flex flex-row justify-center items-center border-[1px] border-zinc-100 px-3 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-800"
                    onClick={() => window.open(proyecto.url, "_blank").focus()}
                  >
                    <TbWorldShare className="mr-2 text-base" />
                    Demo
                  </button>
                  <button
                    className="text-xs flex flex-row justify-center items-center border-[1px] border-zinc-300 px-3 py-2 rounded-md text-zinc-900 hover:bg-zinc-400/10"
                    onClick={() =>
                      window.open(proyecto.github, "_blank").focus()
                    }
                  >
                    <IoCodeOutline className="mr-2 text-base" />
                    View Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portafolio;
