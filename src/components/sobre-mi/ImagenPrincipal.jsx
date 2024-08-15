"use client";
import { imagenes_sobre_mi } from "@/data/imagenes.sobremi";
import Image from "next/image";
import { useState } from "react";
import { Modal, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import ModalImg from "./ModalImg";

const ImagenPrincipal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [datosImagen, setDatosImagen] = useState("");
  const [overlay, setOverlay] = useState(null);

  const handleclick = (e) => {
    const key = "originalAlt";
    const value = e.target.alt;
    const resultado = imagenes_sobre_mi.find((objeto) => objeto[key] === value);
    setDatosImagen(resultado);
  };

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="10%"
      backdropBlur="10px"
    />
  );

  return (
    <div
      className="flex flex-row justify-center items-center mt-10"
      onClick={() => {
        setOverlay(<OverlayTwo />);
        onOpen();
      }}
    >
      {imagenes_sobre_mi.map((imagen, index) => (
        <div key={index} className="mx-1" onClick={handleclick}>
          <Image
            src={imagen.original}
            alt={imagen.originalAlt}
            width={400}
            height={400}
            className="w-60"
          />
        </div>
      ))}
      {datosImagen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalOverlay />
          <ModalImg datosImagen={datosImagen} />
        </Modal>
      )}
    </div>
  );
};

export default ImagenPrincipal;
