import Habilidades from "./Habilidades";
import ImagenesSobreMi from "./ImagenesSobreMi";
import UnPocoDeMi from "./UnPocoDeMi";
import AcercaDeMi from "./AcercaDeMi";
import Image from "next/image";
import ImagenPrincipal from "./ImagenPrincipal";

const SobreMi = () => {
  return (
    <div className="w-10/12 ">
      <ImagenPrincipal />
      <AcercaDeMi />
      <UnPocoDeMi />
      <ImagenesSobreMi />
      <Habilidades />
    </div>
  );
};

export default SobreMi;
