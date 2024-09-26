import NavbarLeft from "./NavbarLeft";
import NavbarCenter from "./NavbarCenter";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  return (
    <div className="flex flex-row lg:justify-around md:justify-between sm:justify-between items-center w-full h-12 font-sans lg:md:py-0 md:py-0 sm:py-2 backdrop-brightness-75 dark:text-white text-gray-950 sticky top-0 z-20">
      <NavbarLeft />
      <NavbarCenter />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
