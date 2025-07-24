"use client";
import Image from "next/image";
import { navLinks } from "../../constants/index";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

   useEffect(() => {
      const handleScroll = () => {
         const scrollTop = window.scrollY;
         if (scrollTop > 100) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <>
         <nav
            className={`w-full xl:w-[1280px] opacity-1 top-0 z-10 transition-all duration-300 sticky ${
               scrolled ? "bg-primary bg-opacity-50 backdrop-blur-sm" : "bg-transparent"
            } `}
         >
            <div className="mx-auto px-4">
               <div className="flex justify-between">
                  <a href="/" className="flex items-center py-4 px-2 text-white-100 text-2xl font-semibold">
                     <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Victor Rony
                     </span>
                  </a>
                  <button onClick={handleToggleMenu} className="md:hidden flex items-center outline-none">
                     {isMenuOpen ? (
                        <FiX className="text-white-100 w-6 h-6" />
                     ) : (
                        <FiMenu className="text-white-100 w-6 h-6" />
                     )}
                  </button>
                  <div className="hidden md:flex items-center space-x-2">
                     {navLinks?.map((link) => (
                        <a
                           key={link.href}
                           href={link.href}
                           className="py-4 px-4 text-gray-400 font-semibold hover:text-white-100 flex items-center gap-2"
                        >
                           {link.icon && (
                              <Image
                                 src={link.icon}
                                 width={20}
                                 height={20}
                                 alt={link.label}
                                 className="filter brightness-0 invert hover:text-white-100 transition duration-300 ease-in-out"
                              />
                           )}
                           {link.label}
                        </a>
                     ))}
                  </div>
               </div>
            </div>
            {isMenuOpen && (
               <div className="md:hidden flex flex-col items-center space-y-4 py-4">
                  {navLinks?.map((link) => (
                     <a
                        key={link.href}
                        href={link.href}
                        className="py-2 px-4 text-gray-400 font-semibold hover:text-white-100 flex items-center gap-2"
                     >
                        {link.icon && (
                           <Image
                              src={link.icon}
                              width={20}
                              height={20}
                              alt={link.label}
                              className="filter brightness-0 invert hover:text-white-100 transition duration-300 ease-in-out"
                           />
                        )}
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
