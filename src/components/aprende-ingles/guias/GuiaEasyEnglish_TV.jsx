import { Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPaypal,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const GuiaEasyEnglish_TV = () => {
  return (
    <div className="flex flex-col justify-center items-start lg:text-base md:text-base sm:text-xs mt-10 font-mono w-full">
      <p className="italic">
        Esta guía está diseñada para orientarte sobre cómo usar o sacarle el
        máximo provecho al recurso.
      </p>
      <p className="mt-5">
        En este lugar, adjuntaremos todas las redes sociales donde puedes
        aprovechar el contenido de esta influencer y profesional enseñando
        inglés. ¡No te pierdas sus publicaciones!📲
      </p>
      <div className="flex flex-row justify-around items-center w-full mt-20 mb-10">
        <Tooltip label="YouTube">
          <Link
            className="mb-6"
            href={"https://www.youtube.com/@EasyEnglishTVJL"}
            target="_blank"
          >
            <FaYoutube className="lg:text-4xl md:text-4xl sm:text-3xl text-red-600" />
          </Link>
        </Tooltip>
        <Tooltip label="Facebook">
          <Link
            className="mb-6"
            href={"https://www.facebook.com/EasyEnglishTv.1"}
            target="_blank"
          >
            <FaFacebook className="lg:text-4xl md:text-4xl sm:text-3xl text-blue-600" />
          </Link>
        </Tooltip>
        <Tooltip label="Instagram">
          <Link
            className="mb-6"
            href={"https://www.instagram.com/easyenglishtv/?hl=es"}
            target="_blank"
          >
            <FaInstagram className="lg:text-4xl md:text-4xl sm:text-3xl text-rose-500" />
          </Link>
        </Tooltip>
        <Tooltip label="TikTok">
          <Link
            className="mb-6"
            href={"tiktok.com/@easyenglishtv"}
            target="_blank"
          >
            <FaTiktok className="lg:text-4xl md:text-4xl sm:text-3xl" />
          </Link>
        </Tooltip>
        <Tooltip label="Paypal">
          <Link
            className="mb-6"
            href={
              "https://www.paypal.com/donate?hosted_button_id=8PUXEQPWDTVCQ"
            }
            target="_blank"
          >
            <FaPaypal className="lg:text-4xl md:text-4xl sm:text-3xl text-sky-500" />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};

export default GuiaEasyEnglish_TV;
