import Link from "next/link";
import RedesFooter from "./RedesFooter";

function Footer() {
  return (
    <div className={`w-full flex flex-col lg:h-96 md:h-96 sm:h-72 justify-end items-center`}>
      <div className="flex md:flex-row sm:flex-col justify-around items-center md:my-2">
        <RedesFooter />
      </div>
      <div className="text-center text-sm mt-5 mb-10 flex flex-row justify-center items-center">
        <p className="select-none">
          Desarrollado por{" "}
          <Link
            href={"https://one-second-cybersecurity.vercel.app/"}
            target="_blank"
          >
            <strong className="text-blue-800">One Second CyberSecurity</strong>
          </Link>{" "}
          © 2024.
        </p>
      </div>
    </div>
  );
}

export default Footer;
