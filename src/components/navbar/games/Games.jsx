"use client";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const Games = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<IoIosArrowDown />}
        className="hover:text-blue-500 font-semibold lg:my-0 md:my-0 sm:my-4 mx-2"
      >
        Games
      </MenuButton>
      <MenuList className="bg-gray-500/50 rounded-md mt-2 w-40">
        <MenuItem className="hover:bg-blue-600/20 rounded-md">
          <Link
            href={"https://mateodevcode.github.io/tetris-js"}
            target="_blank"
            className="mx-2 flex flex-row justify-between items-center w-full"
          >
            <span className="mx-2 my-1">Tetris</span>
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
            href={"https://mateodevcode.github.io/tetris-js"}
            target="_blank"
            className="mx-2 flex flex-row justify-between items-center w-full"
          >
            <span className="mx-2 my-1">Tetris</span>
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

export default Games;
