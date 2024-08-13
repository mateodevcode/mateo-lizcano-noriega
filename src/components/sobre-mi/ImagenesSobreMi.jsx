import React from "react";
import ImgSobreMi from "./ImgSobreMi";

const ImagenesSobreMi = () => {
  return (
    <div className="mt-10 w-full">
      <div className="md:flex md:flex-row sm:flex-col justify-center items-center">
        <ImgSobreMi imgPerfil={0} />
        <div className="flex md:flex-col sm:flex-col justify-center items-center">
          <ImgSobreMi imgPerfil={1} />
          <ImgSobreMi imgPerfil={2} />
        </div>

        <div className="flex md:flex-col sm:flex-col justify-center items-center">
          <ImgSobreMi imgPerfil={4} />
          <ImgSobreMi imgPerfil={5} />
          <ImgSobreMi imgPerfil={6} />
        </div>
      </div>
    </div>
  );
};

export default ImagenesSobreMi;
