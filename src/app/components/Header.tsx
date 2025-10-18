"use client";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22 pt-5">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center space-x-2">
            <Image
              src="/imgs/logo_original_caucionar.png"
              alt="Logo Caucionar"
              width={180}
              height={70}
              className="object-contain sm:w-1/3 md:w-2/3 lg:w-2/3 pt-3"
             /*  className="object-contain" */
            />
            <span className="font-normal text-[#e46308] text-[1.5vw] md:text-[1.5vw] lg:text-[1vw] pb-5">Seguro de garantías simples</span>
          </Link>

          {/* Navegación */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="font-normal text-[#e46308] text-[1.5vw] md:text-[1.5vw] lg:text-[1vw] pb-5 hover:text-red-700 transition">
              HOME
            </Link>
            <Link href="/servicios" className="font-normal text-[#e46308] text-[1.5vw] md:text-[1.5vw] lg:text-[1vw] pb-5 hover:text-red-700 transition">
              INICIAR SESIÓN
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
