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
    } else if (color === "bg-gray-700") {
      return "hover:bg-gray-700";
    } else {
      return "hover:bg-gray-800";
    }
  };

  return (
    <div className="flex flex-row justify-center items-center">
      {iconos.map((icono, i) => {
        return (
          <Link
            key={i}
            href={icono.linkTo}
            aria-label={icono.label}
            target="_blank"
          >
            <div
              className={`mx-2 duration-300 p-1.5 rounded-full text-xs hover:opacity-100 opacity-40 ${colorHover(
                icono.colorHover
              )} bg-gray-800 text-white`}
            >
              {icono.icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RedesFooter;
