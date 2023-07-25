
"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-600 w-full  shadow-lg  xl:w-[1280px] top-0 z-50 sticky">
      <div className=" mx-auto px-4 ">
        <div className="flex justify-between ">
          <div className="flex ">
            <a
              href="/"
              className="flex items-center py-4 px-2 text-white text-2xl font-semibold"
            >
              Victor Rony
            </a>
          </div>
          <div className="hidden lg:-auto md:flex items-center ">
            <a
              href="/"
              className="py-4 px-4 text-gray-400 font-semibold hover:text-white"
            >
              Home
            </a>
            <a
              href="#main"
              className="py-4 px-4 text-gray-400 font-semibold hover:text-white"
            >
              Sobre Min
            </a>
            <a
              href="#section"
              className="py-4 px-4 text-gray-400 font-semibold hover:text-white"
            >
              Experiencias
            </a>
            <a
              href="#project"
              className="py-4 px-4 text-gray-400 font-semibold hover:text-white"
            >
              Projectos
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="outline-none mobile-menu-button"
            >
              {isMenuOpen ? (
                <FiX className="text-white w-6 h-6" />
              ) : (
                <FiMenu className="text-white w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "" : "hidden"} mobile-menu md:hidden `}>
        <a
          href="/"
          className="block py-2 px-4 text-sm text-gray-900 font-bold hover:bg-gray-200 "
        >
          Home
        </a>
        <a
          href="#main"
          className="block py-2 px-4 text-sm text-gray-900 font-bold hover:bg-gray-200"
        >
          Sobre Min
        </a>
        <a
          href="#section"
          className="block py-2 px-4 text-sm text-gray-900 font-bold hover:bg-gray-200"
        >
          Experiencias
        </a>
        <a
          href="#project"
          className="block py-2 px-4 text-sm text-gray-900 font-bold hover:bg-gray-200"
        >
          Projectos
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
