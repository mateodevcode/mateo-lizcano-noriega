import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import DarkMode from "./switch/DarkMode";
import MenuHamburguesa from "./MenuHamburguesa";

const NavbarRight = () => {
  return (
    <div className="flex text-2xl md:my-0 sm:my-2 animate-fade-left animate-once animate-duration-[2000ms] select-none lg:mx-2 md:mx-10 sm:mx-2">
      <Link
        href="https://github.com/mateodevcode"
        target="_blank"
        className="flex flex-row justify-center items-center"
      >
        <BsGithub className="mx-2 cursor-pointer text-xl dark:hover:text-slate-400 hover:text-slate-700" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/mateo-lizcano-noriega/"
        target="_blank"
        className="flex flex-row justify-center items-center"
      >
        <BsLinkedin className="mx-2 cursor-pointer text-lg dark:hover:text-slate-400 hover:text-slate-700" />
      </Link>
      <DarkMode />
      <MenuHamburguesa />
    </div>
  );
};

export default NavbarRight;
