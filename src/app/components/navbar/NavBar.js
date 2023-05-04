// import Link from "next/link";
// import React from "react";
// import {
//   IoLogoGithub,
//   IoMenu,
//   IoLogoLinkedin,
//   IoLogoWhatsapp,
// } from "react-icons/io5";

// export default function NavBar() {
//   return (
//     <div className="flex w-full  text-blue-500 bg-black items-center   h-12 fixed md:fixed md:w-[full] md:justify-between lg:justify-between lg:fixed lg:w-[100%] xl:w-[1280px] ">
//       <div className="w-28 ml-5 font-bold hover:text-white ">
//         <Link href="#home">Victor Rony</Link>
//       </div>
//       <div className="flex place-content-end absolute right-10 w-20  font-bold hover:text-white text-4xl md:invisible">
//         <IoMenu />
//       </div>
//       <div className="invisible w-0 md:w-[400px] md:visible">
//         <ul className="flex justify-center space-x-16 md:space-x-10 ">
//           <li>
//             <Link href="/" className=" hover:text-white ">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="#main" className=" hover:text-white ">
//               Sobre Mim
//             </Link>
//           </li>
//           <li>
//             <Link href="#section" className=" hover:text-white">
//               Experiencias
//             </Link>
//           </li>
//           <li>
//             <Link href="#project" className=" hover:text-white">
//               Projecto
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="invisible w-0 lg:w-50 md:visible md:mr-5">
//         <ul className="flex justify-end space-x-6 mr-5 md:space-x-10 ">
//           <li>
//             <Link
//               href="https://www.linkedin.com/in/victorfernandes-a41030262/"
//               target="blank"
//             >
//               <IoLogoLinkedin className="w-6 h-6 hover:text-white" />
//             </Link>
//           </li>
//           <li>
//             <Link href="https://github.com/victorrony" target="_blank">
//               <IoLogoGithub className="w-6 h-6 hover:text-white " />
//             </Link>
//           </li>
//           <li>
//             <Link href="https://">
//               <IoLogoWhatsapp className="w-6 h-6 hover:text-white" />
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-600 w-full  shadow-lg fixed xl:w-[1280px]">
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
