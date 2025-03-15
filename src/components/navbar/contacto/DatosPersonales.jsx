import { BsGeoAlt } from "react-icons/bs";

const DatosPersonales = () => {
  return (
    <>
      <p className="lg:text-2xl md:text-3xl sm:text-xl font-bold my-1">
        Mateo Lizcano Noriega
      </p>
      <div className="flex flex-row justify-start items-center text-white/70">
        <BsGeoAlt className="text-base" />
        <p className="text-sm my-1 mx-2">Ronda Málaga, España</p>
      </div>
      <div>
        <span className="text-xs bg-white/20 px-3 rounded-full p-1 font-semibold">
          Desarrollador de Software
        </span>
      </div>
    </>
  );
};
export default DatosPersonales;
