export const metadata = {
  title: "Portafolio - Mateo Dev",
  description:
    "Explora mi portafolio de proyectos que destacan en diseño, desarrollo web, aplicaciones y creatividad. Descubre ejemplos de mi trabajo, desde conceptos innovadores hasta soluciones técnicas avanzadas. Mateo Dev - Desarrollador web",
  keywords: [
    "portafolio",
    "proyectos",
    "diseño web",
    "desarrollo web",
    "creatividad",
    "proyectos de desarrollo",
    "trabajos de diseño",
  ],
  authors: [{ name: "Mateodevcode", url: "https://github.com/mateodevcode" }],
};

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
