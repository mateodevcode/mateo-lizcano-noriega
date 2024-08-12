import GuiaEasyEnglish_TV from "./guias/GuiaEasyEnglish_TV";
import GuiaGenerica from "./guias/GuiaGenerica";
import GuiaRossetaStone from "./guias/GuiaRossetaStone";

const InfoDetalle = ({ estado }) => {
  switch (estado) {
    case "rosseta":
      return (
        <>
          <GuiaRossetaStone />
        </>
      );
    case "EasyEnglish_TV":
      return (
        <>
          <GuiaEasyEnglish_TV />
        </>
      );
    case "generico":
      return (
        <>
          <GuiaGenerica />
        </>
      );
  }
};

export default InfoDetalle;
