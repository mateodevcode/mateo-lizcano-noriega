"use client";
import { enlaces } from "@/data/enlaces.navbar";
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import Enlace from "./Enlace";
import Games from "../games/Games";
import CardContacto from "../contacto/CardContacto";

const Menu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MdMenu onClick={onOpen} className={`mx-2 cursor-pointer text-2xl`} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className="dark:bg-black/90 bg-white/90">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="w-full flex flex-row justify-end items-center">
              <DrawerCloseButton className="m-2" />
            </div>
            <div className="flex flex-col justify-center items-center">
              <Enlace nombre="Inicio" LinkTo="/" />
              <Enlace nombre="Sobre mí" LinkTo="/sobre-mi" />
              <Enlace nombre="Portafolio" LinkTo="/portafolio" />
              <Enlace nombre="Aprende programación" LinkTo="/" />
              <Games />
              <CardContacto />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
