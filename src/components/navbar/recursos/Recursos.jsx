"use client";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const Recursos = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<IoIosArrowDown />}
        className="hover:text-blue-500 font-semibold lg:my-0 md:my-0 sm:my-4 flex flex-row justify-between items-center mx-2"
      >
        Recursos
      </MenuButton>
      <MenuList className="bg-gray-500/50 rounded-md mt-2 w-60">
        <MenuItem className="hover:bg-blue-600/20 rounded-md">
          <Link
            href={"/aprende-ingles"}
            className="mx-2 flex flex-row justify-between items-center w-full"
          >
            <span className="mx-2 my-1">Aprende Ingles</span>
            <Image
              alt="Tetris"
              src={"/logo/tetris.png"}
              width={50}
              height={50}
              className="w-5"
            />
          </Link>
        </MenuItem>
        <MenuItem className="hover:bg-blue-600/20 rounded-md">
          <Link
            href={"/aprende-programacion"}
            className="mx-2 flex flex-row justify-between items-center w-full"
          >
            <span className="mx-2 my-1">Aprende Programación</span>
            <Image
            alt="Tetris"
              src={"/logo/tetris.png"}
              width={50}
              height={50}
              className="w-5"
            />
          </Link>
        </MenuItem>
        <MenuItem className="hover:bg-blue-600/20 rounded-md">
          <Link
            href={"/aprende-ciberseguridad"}
            className="mx-2 flex flex-row justify-between items-center w-full"
          >
            <span className="mx-2 my-1">Aprende Ciberseguridad</span>
            <Image
            alt="Tetris"
              src={"/logo/tetris.png"}
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
