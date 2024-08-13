export const metadata = {
  title: "Aprende ingles - Mateo Dev",
  description:
    "Accede a una selección de cursos gratuitos para aprender inglés online. Mejora tu gramática, vocabulario, y habilidades de conversación con recursos de calidad. Ideal para todos los niveles, desde principiantes hasta avanzados. Mateo Dev - Desarrollador web",
  keywords: [
    "aprender inglés",
    "cursos de inglés",
    "clases de inglés",
    "inglés online",
    "clases de inglés gratis",
    "cursos gratuitos de inglés",
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
