"use client";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const Recursos = ({ onClose }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<IoIosArrowDown />}
        className="dark:hover:text-blue-600 hover:text-blue-700 font-semibold lg:my-0 md:my-0 sm:my-4 flex flex-row justify-between items-center mx-2"
      >
        Recursos
      </MenuButton>
      <MenuList className="bg-blue-800 dark:bg-green-900 text-white rounded-md mt-2 w-60">
        <MenuItem className="dark:hover:bg-green-600/20 hover:bg-blue-600/20 rounded-md">
          <Link
            href={"/aprende-ingles"}
            className="mx-2 flex flex-row justify-between items-center w-full"
            onClick={onClose}
          >
            <span className="mx-2 my-1">Aprende Ingles</span>
            <Image
              alt="Tetris"
              src={"/logo/logo.png"}
              width={50}
              height={50}
              className="w-5"
            />
          </Link>
        </MenuItem>
        <MenuItem className="dark:hover:bg-green-600/20 hover:bg-blue-600/20 rounded-md">
          <Link
            href={"/aprende-programacion"}
            className="mx-2 flex flex-row justify-between items-center w-full"
            onClick={onClose}
          >
            <span className="mx-2 my-1">Aprende Programación</span>
            <Image
              alt="Tetris"
              src={"/logo/logo.png"}
              width={50}
              height={50}
              className="w-5"
            />
          </Link>
        </MenuItem>
        <MenuItem className="dark:hover:bg-green-600/20 hover:bg-blue-600/20 rounded-md">
          <Link
            href={"/aprende-ciberseguridad"}
            className="mx-2 flex flex-row justify-between items-center w-full"
            onClick={onClose}
          >
            <span className="mx-2 my-1">Aprende Ciberseguridad</span>
            <Image
              alt="Tetris"
              src={"/logo/logo.png"}
              width={50}
              height={50}
              className="w-5"
            />
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Recursos;
