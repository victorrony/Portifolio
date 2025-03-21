import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "@/app/utils/motion";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, source_code_link_vercel }) => {
   return (
      <motion.div
         className="flex flex-col items-center justify-center"
         variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      >
         <Tilt
            options={{ max: 45, scale: 1, speed: 450 }}
            tiltMaxAngleX={45}
            tiltMaxAngleY={45}
            perspective={1000}
            transitionSpeed={450}
            scale={1}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
         >
            <div className="relative w-full h-[230px]">
               <img src={image} alt="project_image" className="w-full h-full object-cover rounded-2xl" />
               <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <button
                     onClick={() => window.open(source_code_link, "_blank")}
                     className="black-gradient w-10 h-10 rounded-full flex justify-center items-center"
                  >
                     <img src="/assets/github.png" alt="source code" className="object-contain" />
                  </button>
               </div>
            </div>
            <div className="mt-5">
               <h3 className="text-white font-bold text-[24px]">{name}</h3>
               <p className="mt-2 text-secondary text-[14px]">{description}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
               {tags.map((tag) => (
                  <span key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                     #{tag.name}
                  </span>
               ))}
            </div>
            <div className="mt-5 flex justify-center items-center gap-3">
               <a href={source_code_link_vercel} target="_blank" rel="noopener noreferrer">
                  {source_code_link_vercel && (
                     <button className="bg-tertiary py-2 px-4 rounded-lg text-white font-medium">Live Demo</button>
                  )}
               </a>
            </div>
         </Tilt>
      </motion.div>
   );
};

export default ProjectCard;
