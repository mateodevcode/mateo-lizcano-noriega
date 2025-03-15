import Image from "next/image";
import { TbWorldShare } from "react-icons/tb";
import { IoCodeOutline } from "react-icons/io5";

const page = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center px-40">
      <div className="w-full mt-10 p-4">
        <h2 className="lg:text-4xl md:text-4xl sm:text-4xl font-bold">
          Mis Proyectos
        </h2>
        <p className="xl:text-base lg:text-2xl md:text-2xl sm:text-xl text-gray-500 mt-2">
          Explora mi portafolio de proyectos que destacan en diseño, desarrollo
          web, aplicaciones y creatividad.
        </p>
      </div>
      <div className="w-full h-[600px] p-4 grid grid-cols-4 gap-4">
        <div className="w-96 bg-white h-[500px] flex flex-col justify-between items-center rounded-lg shadow-sm shadow-black/50 dark:shadow-black/50">
          <Image
            src="/images/hero.jpg"
            alt="hero"
            width={1920}
            height={1080}
            className="w-40 h-40"
          />
          <div className="p-5">
            <h3 className="text-2xl font-bold text-zinc-900">
              E-commerce Platform
            </h3>
            <p className="text-gray-500 text-sm font-light">
              A fully responsive e-commerce platform with product filtering,
              cart functionality, and checkout process.
            </p>
            <div className="mt-5">
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                Next.js
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                React
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                Tailwind CSS
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                Stripe
              </span>
            </div>
            <div className="w-full flex justify-between items-center mt-5">
              <button className="text-xs flex flex-row justify-center items-center border-[1px] border-zinc-100 px-3 py-2 rounded-md bg-zinc-900 text-white">
                <TbWorldShare className="mr-2 text-base" />
                Demo
              </button>
              <button className="text-xs flex flex-row justify-center items-center border-[1px] border-zinc-300 px-3 py-2 rounded-md text-zinc-900">
                <IoCodeOutline className="mr-2 text-base" />
                View Code
              </button>
            </div>
          </div>
        </div>
        <div className="w-96 bg-white h-[500px] flex flex-col justify-between items-center rounded-lg shadow-sm shadow-black/50">
          <Image
            src="/images/hero.jpg"
            alt="hero"
            width={1920}
            height={1080}
            className="w-40 h-40"
          />
          <div className="p-5">
            <h3 className="text-2xl font-bold text-zinc-900">
              E-commerce Platform
            </h3>
            <p className="text-gray-500 text-sm font-light">
              A fully responsive e-commerce platform with product filtering,
              cart functionality, and checkout process.
            </p>
            <div className="mt-5">
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                Next.js
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                React
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                Tailwind CSS
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                Stripe
              </span>
            </div>
            <div className="w-full flex justify-between items-center mt-5">
              <button className="text-xs flex flex-row justify-center items-center border-[1px] border-zinc-100 px-3 py-2 rounded-md bg-zinc-900 text-white">
                <TbWorldShare className="mr-2 text-base" />
                Demo
              </button>
              <button className="text-xs flex flex-row justify-center items-center border-[1px] border-zinc-300 px-3 py-2 rounded-md text-zinc-900">
                <IoCodeOutline className="mr-2 text-base" />
                View Code
              </button>
            </div>
          </div>
        </div>
        <div className="w-96 bg-white h-[500px] flex flex-col justify-between items-center rounded-lg shadow-sm shadow-black/50">
          <Image
            src="/images/hero.jpg"
            alt="hero"
            width={1920}
            height={1080}
            className="w-40 h-40"
          />
          <div className="p-5">
            <h3 className="text-2xl font-bold text-zinc-900">
              E-commerce Platform
            </h3>
            <p className="text-gray-500 text-sm font-light">
              A fully responsive e-commerce platform with product filtering,
              cart functionality, and checkout process.
            </p>
            <div className="mt-5">
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                Next.js
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                React
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                Tailwind CSS
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                Stripe
              </span>
            </div>
            <div className="w-full flex justify-between items-center mt-5">
              <button className="text-xs flex flex-row justify-center items-center border-[1px] border-zinc-100 px-3 py-2 rounded-md bg-zinc-900 text-white">
                <TbWorldShare className="mr-2 text-base" />
                Demo
              </button>
              <button className="text-xs flex flex-row justify-center items-center border-[1px] border-zinc-300 px-3 py-2 rounded-md text-zinc-900">
                <IoCodeOutline className="mr-2 text-base" />
                View Code
              </button>
            </div>
          </div>
        </div>
        <div className="w-96 bg-white h-[500px] flex flex-col justify-between items-center rounded-lg shadow-sm shadow-black/50">
          <Image
            src="/images/hero.jpg"
            alt="hero"
            width={1920}
            height={1080}
            className="w-40 h-40"
          />
          <div className="p-5">
            <h3 className="text-2xl font-bold text-zinc-900">
              E-commerce Platform
            </h3>
            <p className="text-gray-500 text-sm font-light">
              A fully responsive e-commerce platform with product filtering,
              cart functionality, and checkout process.
            </p>
            <div className="mt-5">
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                Next.js
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                React
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                Tailwind CSS
              </span>
              <span className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 text-[10px] font-semibold mx-1">
                Stripe
              </span>
            </div>
            <div className="w-full flex justify-between items-center mt-5">
              <button className="text-xs flex flex-row justify-center items-center border-[1px] border-zinc-100 px-3 py-2 rounded-md bg-zinc-900 text-white">
                <TbWorldShare className="mr-2 text-base" />
                Demo
              </button>
              <button className="text-xs flex flex-row justify-center items-center border-[1px] border-zinc-300 px-3 py-2 rounded-md text-zinc-900">
                <IoCodeOutline className="mr-2 text-base" />
                View Code
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <ProyectosTerminados />
      <ProyectosEnProceso /> */}
    </div>
  );
};

export default page;
