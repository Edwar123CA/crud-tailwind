import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Crud Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen">
          {/* Componente Navbar */}
          <Navbar />

          {/* Aqui se ve el page.js principal*/}
          <div className="mt-8 mx-auto p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
