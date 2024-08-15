import { ModalCloseButton, ModalContent } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const ModalImg = ({datosImagen}) => {
  return (
    <ModalContent className="flex flex-row justify-center items-center mt-16">
      <div className="flex flex-col justify-center items-center rounded-xl">
        <div className="w-full flex flex-row justify-end items-end p-4">
          <ModalCloseButton />
        </div>
        <div className="flex flex-row justify-center items-center px-10">
          <div className="mx-1">
            <Image
              src={datosImagen.original}
              alt={datosImagen.originalAlt}
              width={400}
              height={400}
              className="w-96"
            />
          </div>
        </div>
        <div className="px-6 text-center">
          <p className="text-base italic font-mono my-2">
            {datosImagen.originalAlt}
          </p>
        </div>
      </div>
    </ModalContent>
  );
};

export default ModalImg;
