import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mateo Dev",
  description: "Mateo Dev - Desarrollador web",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} dark bg-[#eaf8ff] dark:bg-black text-black dark:text-white w-full`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
