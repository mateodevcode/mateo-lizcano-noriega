import Habilidades from "./Habilidades";
import ImagenesSobreMi from "./ImagenesSobreMi";
import UnPocoDeMi from "./UnPocoDeMi";
import AcercaDeMi from "./AcercaDeMi";
import ImagenPrincipal from "./ImagenPrincipal";

const SobreMi = () => {
  return (
    <div className="lg:w-8/12 md:w-8/12 sm:w-11/12">
      <ImagenPrincipal />
      <AcercaDeMi />
      <UnPocoDeMi />
      <ImagenesSobreMi />
      <Habilidades />
    </div>
  );
};

export default SobreMi;
