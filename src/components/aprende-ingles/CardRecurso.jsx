import Image from "next/image";
import Info from "./Info";
import Link from "next/link";

const CardRecurso = ({ img, Alt, description, boton, download, estado, Url }) => {
  return (
    <>
      <div className="w-full flex lg:flex-row md:flex-row sm:flex-col justify-between items-center border-2 lg:p-4 md:p-4 sm:p-2 shadow-md shadow-black border-black dark:border-white">
        <div className="flex flex-row justify-start items-center lg:w-40 md:w-40 sm:w-32">
          <Image
            className="w-full rounded-full lg:mx-4 md:mx-4 sm:mx-0"
            width={500}
            height={500}
            src={img}
            alt={Alt}
          />
        </div>
        <div className="flex flex-col justify-between items-center lg:w-[550px] md:w-[550px] sm:w-full lg:h-36 md:h-36 sm:h-32 lg:my-0 md:my-0 sm:my-4">
          <p className="lg:text-sm md:text-sm sm:text-xs lg:pr-5 md:pr-5 sm:pr-0">{description}</p>
          <div className="flex flex-row justify-end items-center w-full">
            <Info estado={estado} />
            <Link
              href={Url}
              download={download}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 dark:bg-green-600 text-white dark:text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600/50 dark:hover:bg-green-600/50 mx-2 select-none lg:text-base md:text-base sm:text-xs"
            >
              {boton}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRecurso;
