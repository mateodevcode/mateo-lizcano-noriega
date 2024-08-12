"use client";
import { useEffect, useRef } from "react";
import { mensaje_secreto } from "@/data/mensaje.inicio";
import Typed from "typed.js";

function TextoSecreto() {
  const saludo = useRef(null);

  useEffect(() => {
    const typed = new Typed(saludo.current, {
      strings: mensaje_secreto,
      typeSpeed: 80,
      startDelay: 1000*200,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-32 mt-5 opacity-20">
      <span ref={saludo} className="lg:text-sm md:text-sm sm:text-xs text-green-600" />
    </div>
  );
}

export default TextoSecreto;
