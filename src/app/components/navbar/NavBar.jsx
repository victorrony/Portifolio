"use client";
import { navLinks } from "@/app/constants";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

   return (
      <>
         <nav className=" w-full xl:w-[1280px] top-0 z-50 sticky">
            <div className="mx-auto px-4">
               <div className="flex justify-between">
                  <a href="/" className="flex items-center py-4 px-2 text-white text-2xl font-semibold">
                     Victor Rony
                  </a>
                  <button onClick={handleToggleMenu} className="md:hidden flex items-center outline-none">
                     {isMenuOpen ? <FiX className="text-white w-6 h-6" /> : <FiMenu className="text-white w-6 h-6" />}
                  </button>
                  <div className="hidden md:flex items-center space-x-2">
                     {navLinks.map((link) => (
                        <a
                           key={link.href}
                           href={link.href}
                           className="py-4 px-4 text-gray-400 font-semibold hover:text-white"
                        >
                           {link.label}
                        </a>
                     ))}
                  </div>
               </div>
            </div>
            {isMenuOpen && (
               <div className="md:hidden flex flex-col items-center space-y-4 py-4">
                  {navLinks.map((link) => (
                     <a
                        key={link.href}
                        href={link.href}
                        className="py-2 px-4 text-gray-400 font-semibold hover:text-white"
                     >
                        {link.label}
                     </a>
                  ))}
               </div>
            )}
         </nav>
      </>
   );
};

export default NavBar;
