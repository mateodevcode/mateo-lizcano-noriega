import Inicio from "@/components/inicio/Inicio";
import ProyectosTerminados from "@/components/portafolio/ProyectosTerminados";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <main className="flex flex-row justify-center items-center h-screen">
        <Inicio />
      </main>
      <ProyectosTerminados />
    </div>
  );
}
