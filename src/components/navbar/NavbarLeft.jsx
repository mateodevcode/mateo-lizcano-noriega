import Image from "next/image";
import Link from "next/link";
import { logo } from "@/data/logo";

const NavbarLeft = () => {
  return (
    <Link
      href="/"
      className="flex flex-row justify-center items-center font-semibold lg:mx-2 md:mx-10 sm:mx-4 my-2"
    >
      <Image
        src={logo.src}
        alt="logo"
        width={400}
        height={400}
        className="lg:w-10 md:w-10 sm:w-8 xs:w-4"
      />
    </Link>
  );
};

export default NavbarLeft;
