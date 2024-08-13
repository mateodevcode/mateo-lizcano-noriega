
export const metadata = {
    title: "Sobre mí - Mateo Dev",
    description: "Mateo Dev - Desarrollador web",
    authors: [{ name: "Mateodevcode", url: "https://github.com/mateodevcode" }],
  };

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}