"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { skills as images } from "@/data/skills";

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative xl:w-40 lg:w-32 md:w-20 sm:w-20 mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={img.imagen_512}
              alt={`Logo ${img.nombre} ${index + 1}`}
              width={800}
              height={400}
              className="xl:w-40 lg:w-32 md:w-20 sm:w-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
