import { skills } from "@/data/skills.sobremi";

const Habilidades = () => {
  return (
    <div className="my-10">
      <h2 className="lg:text-4xl md:text-4xl sm:text-3xl font-bold lg:mb-10 md:mb-10 sm:mb-5">Habilidades</h2>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="border-2 border-black dark:border-white text-center font-bold py-2 px-4 rounded-full inline-block mt-5 mx-1 hover:bg-blue-600/80 dark:hover:bg-green-600/80 cursor-move select-none lg:text-base md:text-base sm:text-xs hover:text-white"
        >
          <p>{skill.nombre}</p>
        </div>
      ))}
    </div>
  );
};

export default Habilidades;
