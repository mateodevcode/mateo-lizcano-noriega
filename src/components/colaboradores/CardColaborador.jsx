import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const CardColaborador = ({ nombre, rol, img, linkedin, github }) => {
  return (
    <div className="flex flex-col justify-center items-center mx-10 my-10">
      <Image
        src={img}
        alt={nombre}
        width={200}
        height={200}
        className="rounded-full"
      />
      <p className="text-lg mt-5 font-semibold">{nombre}</p>
      <p className="text-xs">{rol}</p>
      <div className="flex flex-row justify-center items-center mt-6">
        <Link href={linkedin} target="_blank">
          <BsLinkedin className="mx-2 text-xl hover:text-blue-600/50 text-blue-600" />
        </Link>
        <Link href={github} target="_blank">
          <BsGithub className="mx-2 text-xl hover:text-gray-600/50 text-gray-600" />
        </Link>
      </div>
    </div>
  );
};

export default CardColaborador;
