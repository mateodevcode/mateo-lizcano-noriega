"use client";
import { games } from "@/data/recursos.navbar";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const Games = ({ onClose }) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<IoIosArrowDown />}
        className="hover:text-blue-600 font-semibold lg:my-0 md:my-0 sm:my-4 mx-2"
      >
        Games
      </MenuButton>
      <MenuList className="bg-blue-800 dark:bg-green-900 text-white rounded-md mt-2 w-66">
        {games.map((game, index) => (
          <MenuItem
            key={index}
            className="dark:hover:bg-green-600/20 hover:bg-blue-600/20 rounded-md"
          >
            <Link
              href={game.LinkTo}
              className="mx-3 my-1 flex flex-row justify-between items-center w-full"
              onClick={onClose}
            >
              <span className="mx-2 my-1">{game.nombre}</span>
              <Image
                alt={game.nombre}
                src={game.logo}
                width={50}
                height={50}
                className="w-5"
              />
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Games;
