"use client";

import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "@/app/utils/motion";
import Image from "next/image";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, source_code_link_vercel }) => {
   return (
      <motion.div
         className="flex flex-col items-center justify-center "
         variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      >
         <Tilt
            options={{ max: 45, scale: 1, speed: 450 }}
            tiltMaxAngleX={45}
            tiltMaxAngleY={45}
            perspective={1000}
            transitionSpeed={450}
            scale={1}
            className="bg-tertiary p-5 sm:w-[360px] w-full overflow-visible rounded-[20px] shadow-card"
         >
            <div className="relative w-full h-[230px]">
               <Image src={image} alt="project_image" fill className="object-cover rounded-2xl" />
               <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <button
                     onClick={() => window.open(source_code_link, "_blank")}
                     className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
                  >
                     <Image src="/assets/github.png" alt="source code" className="object-contain" />
                  </button>
               </div>
            </div>
            <div className="mt-5">
               <h3 className="text-white font-bold text-[24px]">{name}</h3>
               <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
               {tags.map(({ name, icon }) => (
                  <div
                     key={`${name}-${icon}`}
                     className={`group relative cursor-pointer flex items-center justify-center gap-0.5 backdrop-blur rounded-xl size-9 lg:size-12 p-2 bg-zinc-800/80 max-lg:hidden`}
                  >
                     {icon && <Image src={icon} alt={name} className="w-full h-full" />}
                     <span className="text-xs text-white invisible absolute top-[-20px] px-2 py-1 bg-black rounded-md group-hover:visible">
                        {name}
                     </span>
                  </div>
               ))}
            </div>
            <div className="mt-5 flex justify-center items-center gap-3">
               <a href={source_code_link_vercel} target="_blank" rel="noopener noreferrer">
                  {source_code_link_vercel && (
                     <button className="bg-tertiary border px-4 rounded-lg text-white font-medium">Live Demo</button>
                  )}
               </a>
            </div>
         </Tilt>
      </motion.div>
   );
};

export default ProjectCard;
