import { imagenes_perfil } from "@/data/imagenes.sobremi";
import Image from "next/image";

const ImgSobreMi = ({ imgPerfil }) => {
  return (
      <div className="flex md:flex-col sm:flex-col justify-center items-center p-2">
        <Image
          width={900}
          height={900}
          className={`w-[400px] rounded-lg shadow-md shadow-black dark:shadow-gray-700`}
          src={imagenes_perfil[imgPerfil].original}
          alt={imagenes_perfil[imgPerfil].originalAlt}
        />
      </div>
  );
};

export default ImgSobreMi;
