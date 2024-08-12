import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";

const Botones = ({ cerrar }) => {
  return (
    <div className="flex flex-row justify-between items-center mb-5">
      <Link
        href="https://www.linkedin.com/in/mateo-lizcano-noriega/"
        className="bg-blue-600 dark:bg-green-600 text-white dark:text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600/50 dark:hover:bg-green-600/50 mx-2 select-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin className="cursor-pointer text-2xl" />
      </Link>
      <div className="flex flex-row justify-end items-center">
        <div
          className="bg-blue-600 dark:bg-green-600 text-white dark:text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600/50 dark:hover:bg-green-600/50 mx-2 select-none"
          onClick={() => window.open("/mateo-lizcano.pdf")}
        >
          Descargar
        </div>
        <div
          className="bg-blue-600 dark:bg-green-600 text-white dark:text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600/50 dark:hover:bg-green-600/50 mx-2 select-none"
          onClick={cerrar}
        >
          Cerrar
        </div>
      </div>
    </div>
  );
};

export default Botones;
