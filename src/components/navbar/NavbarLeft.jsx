import Image from "next/image";
import Link from "next/link";
import React from "react";
import MateoDevCode from "./mateodevcode/MateoDevCode";

const NavbarLeft = () => {
  return (
    <Link
      href="/"
      className="flex flex-row justify-center items-center font-semibold lg:mx-2 md:mx-10 sm:mx-2"
    >
      <Image
        src="/logo/logo-2.png"
        alt="logo"
        width={400}
        height={400}
        className="lg:w-10 md:w-10 sm:w-8 xs:w-4"
      />
      <MateoDevCode />
    </Link>
  );
};

export default NavbarLeft;
