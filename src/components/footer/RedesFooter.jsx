import { Tooltip } from "@chakra-ui/react";
import { iconos } from "@/data/icons.footer";
import Link from "next/link";

const RedesFooter = () => {
  const colorHover = (color) => {
    if (color === "bg-blue-600") {
      return "hover:bg-blue-600";
    } else if (color === "bg-green-600") {
      return "hover:bg-green-600";
    } else if (color === "bg-pink-500") {
      return "hover:bg-pink-500";
    } else if (color === "bg-blue-500") {
      return "hover:bg-blue-500";
    } else {
      return "hover:bg-gray-800";
    }
  };

  return (
    <div className="flex flex-row justify-center items-center">
      {iconos.map((icono, i) => {
        return (
          <Tooltip
            key={i}
            label={icono.nombre}
            placement={"top"}
            className="bg-gray-700 px-2 rounded-md text-white"
          >
            <Link href={icono.linkTo} aria-label={icono.label} target="_blank">
              <div
                className={`mx-2 duration-300 p-2 rounded-full ${colorHover(icono.colorHover)} bg-gray-800 text-white`}
              >
                {icono.icon}
              </div>
            </Link>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default RedesFooter;
