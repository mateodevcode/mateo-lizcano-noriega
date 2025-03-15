import Saludo from "./Saludo";
import TextoSecreto from "./TextoSecreto";
import Link from "next/link";
import ImageSlider from "./ImageSlider";

const Inicio = () => {
  return (
    <div className="flex xl:flex-row lg:flex-row sm:flex-col-reverse md:flex-col justify-between items-center w-full">
      <div className="mx-0 xl:w-[800px] lg:w-[600px] md:w-[650px] sm:w-full lg:px-0 md:px-0 sm:px-5 xl:mt-0 lg:mt-0 md:mt-0 sm:mt-10">
        <Saludo />
        <p className="w-full lg:text-xl md:text-xl sm:text-base text-zinc-500">
          <strong>MateoDev</strong> es solo el reflejo profesional de toda mi
          trayectoria, un espacio donde podrás ver mis{" "}
          <Link href="/portafolio">
            <strong className="text-green-500">proyectos</strong>
          </Link>{" "}
          y disfrutar del aprendizaje que brindamos a través de todos los
          recursos obtenidos de esta{" "}
          <Link href="/">
            <strong className="text-blue-500">comunidad.</strong>
          </Link>
        </p>
        <TextoSecreto />
      </div>
      <div className="xl:mr-10 md:mr-10 sm:mr-0 lg:mt-0 md:mt-0 sm:mt-5 lg:ml-10 xl:ml-10">
        <ImageSlider />
      </div>
    </div>
  );
};

export default Inicio;
