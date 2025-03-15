import Link from "next/link";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { VscClose } from "react-icons/vsc";

const Botones = ({ cerrar }) => {
  return (
    <div className="flex flex-row justify-center items-center mb-5">
      <Link
        href="https://www.linkedin.com/in/mateo-lizcano-noriega/"
        className="text-white font-semibold p-2 rounded-md cursor-pointer mx-1 select-none dark:bg-white/20 dark:hover:bg-white/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin className="text-base" />
      </Link>
      <Link
        href="https://api.whatsapp.com/message/YZ472YWAWRA5E1?autoload=1&app_absent=0"
        className="text-white font-semibold p-2 rounded-md cursor-pointer mx-1 select-none dark:bg-white/20 dark:hover:bg-white/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsWhatsapp className="text-base" />
      </Link>
      <div className="flex flex-row justify-end items-center">
        <div
          className="text-white font-semibold p-2 rounded-md cursor-pointer mx-1 select-none dark:bg-white/20 dark:hover:bg-white/30 text-xs flex flex-row items-center justify-center"
          onClick={() => window.open("/mateo-lizcano.pdf")}
        >
          <FiDownload className="text-sm mr-2 ml-1" />{" "}
          <span className="mr-2">Descargar</span>
        </div>
        <div
          className="text-white font-semibold p-2 rounded-md cursor-pointer mx-1 select-none dark:bg-white/20 dark:hover:bg-white/30 text-xs flex flex-row items-center justify-center"
          onClick={cerrar}
        >
          <VscClose className="text-sm mr-2 ml-1" />{" "}
          <span className="mr-2">Cerrar</span>
        </div>
      </div>
    </div>
  );
};

export default Botones;
