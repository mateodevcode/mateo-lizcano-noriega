"use client";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import InfoDetalle from "./InfoDetalle";

const Info = ({ estado }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        className="bg-blue-600 dark:bg-green-600 text-white dark:text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600/50 dark:hover:bg-green-600/50 mx-2 select-none lg:text-base md:text-base sm:text-xs"
        onClick={() => {
          onOpen();
        }}
      >
        Info
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent
          className="text-black dark:text-white h-screen flex flex-col justify-start items-center bg-white dark:bg-black"
          overflowY={"scroll"}
        >
          <div className="lg:mx-32 md:mx-32 sm:mx-0">
            <div className="flex flex-row justify-end w-full p-5">
              <ModalCloseButton />
            </div>
            <h2 className="lg:text-5xl md:text-5xl sm:text-3xl text-center font-mono">
              Guia de uso
            </h2>
            <div className="px-3">
              <InfoDetalle estado={estado} />
            </div>
            <div className="flex flex-row justify-end items-center w-full p-5">
              <div
                className="bg-blue-600 dark:bg-green-600 text-white dark:text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600/50 dark:hover:bg-green-600/50 mx-2 select-none"
                onClick={onClose}
              >
                Cerrar
              </div>
            </div>
          </div>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Info;
