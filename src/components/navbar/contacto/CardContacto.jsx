"use client";
import {
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import DatosContacto from "./DatosContacto";

function CardContacto() {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <>
      <div
        className="mx-4 lg:my-0 md:my-0 sm:my-4 dark:hover:text-blue-500 hover:text-blue-800 cursor-pointer font-semibold select-none"
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Contacto
      </div>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent
          display={"flex"}
          flexDir={"column"}
          width={"100%"}
          height={"700px"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <div className="w-full">
            <DatosContacto cerrar={onClose} />
          </div>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CardContacto;
