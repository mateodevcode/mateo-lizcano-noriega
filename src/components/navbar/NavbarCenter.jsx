import React from "react";
import EnlaceNav from "./EnlaceNav";
import { enlaces } from "@/data/enlaces.navbar";
import CardContacto from "./contacto/CardContacto";
import Games from "./games/Games";
import Recursos from "./recursos/Recursos";

const NavbarCenter = () => {
  return (
    <div
      className="flex lg:flex-row md:flex-row sm:flex-col justify-center items-center lg:md:flex md:hidden sm:hidden xs:hidden"
    >
      {enlaces.map((enlace, index) => (
        <EnlaceNav
          key={index}
          nombre={enlace.nombre}
          LinkTo={enlace.LinkTo}
          target={enlace.target}
        />
      ))}
      <Recursos />
      <Games />
      <CardContacto />
    </div>
  );
};

export default NavbarCenter;
