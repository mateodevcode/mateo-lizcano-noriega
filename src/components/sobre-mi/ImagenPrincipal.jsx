import { imagenes_sobre_mi } from "@/data/imagenes.sobremi";
import Image from "next/image";
import React from "react";

const ImagenPrincipal = () => {
  return (
    <div className="flex flex-row justify-center items-center mt-10">
      {imagenes_sobre_mi.map((imagen, index) => (
        <div key={index} className="mx-1">
          <Image
            src={imagen.original}
            alt={imagen.originalAlt}
            width={400}
            height={400}
            className="w-60"
          />
        </div>
      ))}
    </div>
  );
};

export default ImagenPrincipal;
