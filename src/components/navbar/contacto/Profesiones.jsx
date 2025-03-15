import { MdSecurity } from "react-icons/md";
import { AiOutlineCode } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { VscProject } from "react-icons/vsc";

const Profesiones = () => {
  return (
    <div className="flex flex-col justify-center items-start text-lg mt-5 mb-10 text-white/70">
      <div className="my-1 flex flex-row justify-center items-center hover:bg-white/20 p-2 rounded-lg px-3">
        <FaCode /> <span className="ml-2 text-sm">Desarrollador Frontend</span>
      </div>
      <div className="my-1 flex flex-row justify-center items-center hover:bg-white/20 p-2 rounded-lg px-3">
        <AiOutlineCode />{" "}
        <span className="ml-2 text-sm">Desarrollador Backend</span>
      </div>
      <div className="my-1 flex flex-row justify-center items-center hover:bg-white/20 p-2 rounded-lg px-3">
        <MdSecurity />{" "}
        <span className="ml-2 text-sm">Analista en Ciberseguridad</span>
      </div>
      <div className="my-1 flex flex-row justify-center items-center hover:bg-white/20 p-2 rounded-lg px-3">
        <VscProject /> <span className="ml-2 text-sm">Project Manager</span>
      </div>
    </div>
  );
};

export default Profesiones;
