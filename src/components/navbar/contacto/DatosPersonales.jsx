import React from "react";
import { BsGeoAlt } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { MdOutlineAssuredWorkload } from "react-icons/md";

const DatosPersonales = () => {
  return (
    <>
      <p className="lg:text-3xl md:text-3xl sm:text-xl font-bold my-1">Mateo Lizcano Noriega</p>
      <div className="flex flex-row justify-start items-center mt-5">
        <MdOutlineAssuredWorkload size={24} />
        <p className="lg:text-xl md:text-xl sm:text-base my-1 mx-2">Project Manager Jr</p>
      </div>
      <div className="flex flex-row justify-start items-center">
        <BsGeoAlt size={24} />
        <p className="lg:text-xl md:text-xl sm:text-base my-1 mx-2">
          Ronda Málaga, España
        </p>
      </div>
      <div className="flex flex-row justify-start items-center">
        <IoIosMail size={24} cursor={"pointer"} />
        <p className="lg:text-xl md:text-xl sm:text-base my-1 mx-2">
          mateodevcode@gmail.com
        </p>
      </div>
    </>
  );
};
export default DatosPersonales;
