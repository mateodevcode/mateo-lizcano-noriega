"use client";
import { useEffect } from "react";
import { skills } from "@/data/skills";
import ImageGallery from "react-image-gallery";

const Skills = () => {
  const images = skills.map((skill) => {
    return {
      original: skill.imagen_512,
      thumbnail: skill.imagen_512,
      originalAlt: skill.alt,
    };
  });

  return (
    <div
      className="flex flex-row justify-center items-center skill-contenedor"
      style={{ width: "200px", height: "200px", margin: "auto" }}
    >
      <ImageGallery
        items={images}
        infinite={true}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={false}
        showThumbnails={false}
        showBullets={false}
        slideInterval={2500}
        autoPlay={true}
        lazyLoad={true}
      />
    </div>
  );
};

export default Skills;
