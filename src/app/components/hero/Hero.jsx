"use client";
import dynamic from "next/dynamic";
import { socialLinks } from "../../constants/index";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";

const ComputersCanvas = dynamic(() => import("./Computers"), { ssr: false });

export default function Hero() {
   return (
      <header className="relative w-full h-full flex flex-col items-st justify-center md:w-full lg:w-full xl:w-[1280px]">
         <div className="absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-st justify-center w-full gap-10 lg:gap-20 xl:gap-10">
            <div className="w-[3px] h-48 bg-white left-12 abso transform -translate-x-1/2"></div>
            <div className="flex flex-col items-center gap-7">
               <h2 className="text-2xl font-sans lg:text-3xl text-white">
                  Hi, my name is <span className="font-bold font-serif text-3xl text-blue-700">Victor Rony.</span> I'm
               </h2>
               <h1 className="text-4xl mt-4 lg:mt-6 text-white">
                  <span className="font-bold">Full Stack Developer </span>
               </h1>

               <ul className="flex justify-center items-center space-x-20 mt-10 xl:mt-[-10px] xl:mr-[80px] z-20">
                  {socialLinks?.map((link, index) => (
                     <li key={index}>
                        <a href={link.href} target="blank">
                           {link.icon}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         <ComputersCanvas className="absolute inset-0 w-full h-full" />
      </header>
   );
}
