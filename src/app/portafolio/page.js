import ProyectosEnProceso from "@/components/portafolio/ProyectosEnProceso";
import ProyectosTerminados from "@/components/portafolio/ProyectosTerminados";


const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="lg:text-5xl md:text-5xl sm:text-4xl font-bold mt-16">Proyectos</h2>
      <ProyectosTerminados />
      <ProyectosEnProceso />
    </div>
  );
};

export default page;
