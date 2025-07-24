"use client";
import dynamic from "next/dynamic";
import { socialLinks } from "../../constants/index";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

const ComputersCanvas = dynamic(() => import("./Computers"), { ssr: false });

export default function Hero() {
   const nameRef = useRef(null);
   const titleRef = useRef(null);
   const subtitleRef = useRef(null);
   const socialRef = useRef(null);

   useEffect(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      // Animação do subtítulo
      tl.from(subtitleRef.current, {
         duration: 1,
         y: 50,
         opacity: 0,
         ease: "power3.out",
      });

      // Animação do nome com efeito typewriter
      tl.from(
         nameRef.current,
         {
            duration: 0.8,
            x: -30,
            opacity: 0,
            ease: "power2.out",
         },
         "-=0.5"
      );

      // Animação do título principal
      const animateTitle = () => {
         if (titleRef.current) {
            const splitTitle = new SplitText(titleRef.current, { type: "chars" });
            tl.from(
               splitTitle.chars,
               {
                  duration: 0.05,
                  opacity: 0,
                  y: 20,
                  rotationX: -90,
                  stagger: 0.05,
                  ease: "back.out(1.7)",
                  // repeatDelay: 0.1,
                  // repeat: -1,
               },
               "-=0.2"
            );
         }
      };

      animateTitle();

      const interval = setInterval(() => {
         animateTitle();
      }, 10000);

      return () => clearInterval(interval);

      // Animação dos social links
      tl.from(
         socialRef.current.children,
         {
            duration: 0.6,
            y: 30,
            opacity: 0,
            scale: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
         },
         "-=0.3"
      );
   }, []);

   return (
      <header className="relative w-full h-full flex flex-col items-center justify-center md:w-full lg:w-full xl:w-[1280px]">
         <div className="absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row justify-center w-full gap-10 lg:gap-20 xl:gap-10">
            <div className="w-[3px] h-48 bg-white transform -translate-x-1/2"></div>
            <div className="flex flex-col items-center gap-7">
               <h2 ref={subtitleRef} className="text-2xl font-sans lg:text-3xl text-white">
                  Hi, my name is{" "}
                  <span ref={nameRef} className="font-bold font-serif text-3xl text-blue-700">
                     Victor Rony.
                  </span>{" "}
                  I&apos;m
               </h2>
               <h1 ref={titleRef} className="text-5xl mt-4 lg:mt-6 text-white">
                  <span className="font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Full Stack Developer</span>
               </h1>

               <ul
                  ref={socialRef}
                  className="flex justify-center items-center space-x-20 mt-10 xl:mt-[-10px] xl:mr-[80px] z-20"
               >
                  {socialLinks?.map((link, index) => (
                     <motion.li
                        key={index}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="hover:text-blue-400 transition-colors duration-300"
                     >
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                           {link.icon}
                        </a>
                     </motion.li>
                  ))}
               </ul>
            </div>
         </div>

         <ComputersCanvas className="absolute inset-0 w-full h-full" />
      </header>
   );
}
