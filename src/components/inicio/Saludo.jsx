"use client";
import { useEffect, useRef } from "react";
import { mensaje_inicio } from "@/data/mensaje.inicio";
import Typed from "typed.js";

function Saludo() {
  const saludo = useRef(null);

  useEffect(() => {
    const typed = new Typed(saludo.current, {
      strings: mensaje_inicio,
      typeSpeed: 80,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="lg:h-28 md:h-24 sm:h-16 lg:text-5xl md:text-4xl sm:text-xl font-bold">
      <span ref={saludo} />
    </div>
  );
}

export default Saludo;
