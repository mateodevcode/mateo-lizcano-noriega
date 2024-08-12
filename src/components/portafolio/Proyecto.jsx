import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";

const Proyecto = ({ titulo, url, github, imagen }) => {
  return (
    <div className="w-10/12 flex flex-col justify-center items-center mb-10">
      <div className="w-full px-10 text-center">
        <h3 className="lg:text-3xl md:text-3xl sm:text-2xl font-bold mt-10">{titulo}</h3>
      </div>
      <div className="w-11/12 mt-10">
        <Link href={url} target="_blank">
          <img
            src={imagen}
            alt="Proyecto 1"
            width={900}
            height={900}
            className="w-full"
          />
        </Link>
      </div>
      <div className="flex flex-row justify-center items-center">
        {github && (
          <Link href={github} target="_blank">
            <BsGithub className="lg:text-4xl md:text-4xl sm:text-2xl lg:mt-10 md:mt-10 sm:mt-5 mx-2" />
          </Link>
        )}
        {url && (
          <Link href={url} target="_blank">
            <TbWorldWww className="lg:text-4xl md:text-4xl sm:text-2xl lg:mt-10 md:mt-10 sm:mt-5 mx-2" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Proyecto;
