import Intro from "./Intro";
import Recurso from "./Recurso";

const AprendeIngles = () => {
  return (
    <div className="lg:w-7/12 md:w7/12 sm:w-full border-black dark:border-white lg:border-x-2 md:border-x-2 sm:border-x-0 lg:border-b-2 md:border-b-2 sm:border-b-0 pt-5 lg:px-10 md:px-5 sm:px-0 lg:pb-10 md:pb-10 sm:pb-0">
      <Intro />
      <Recurso />
    </div>
  );
};

export default AprendeIngles;
