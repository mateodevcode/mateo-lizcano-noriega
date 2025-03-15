import Link from "next/link";
import RedesFooter from "./RedesFooter";

function Footer() {
  return (
    <div className="w-full flex flex-row items-center justify-center bg-zinc-900/10 p-4 lg:h-16 md:h-24 sm:h-20 relative">
      <div className="text-center flex flex-row justify-center items-center md:text-xs lg:text-sm sm:text-[8px]">
        <p className="select-none text-zinc-500">
          © 2023 - 2025 Todos los derechos reservados. Desarrollado por{" "}
          <Link href={"https://mateoln.vercel.app/"} target="_blank">
            <strong className="font-semibold dark:hover:text-zinc-600 hover:text-zinc-700">
              Mateo Lizcano Noriega.
            </strong>
          </Link>
        </p>
      </div>
      <div className="absolute xl:bottom-4 xl:right-4 lg:bottom-4 lg:right-4 md:bottom-16 md:right-auto sm:bottom-16 sm:right-auto">
        <RedesFooter />
      </div>
    </div>
  );
}

export default Footer;
