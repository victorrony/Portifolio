"use client";
import React, { useEffect } from "react";
import BallCanvas from "./Ball";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { technologies } from "../../constants/index";
import { experiences } from "../../constants/index";
import ExperienceCard from "./ExperienceCard";
import { textVariant } from "@/app/utils/motion";

export default function Experience() {
   return (
      <div
         id="section"
         className="flex flex-col h-full w-[1280px] justify-center items-center m-auto text-center text-white md:w-[100%] lg:w-[100%] xl:w-[1280px]"
      >
         <motion.div variants={textVariant()}>
            <h1 className="text-4xl font-semibold text-primary "> Experiencias e Habilidades </h1>
         </motion.div>
         <div className="flex flex-col items-center gap-5 m-auto lg:m-0 mt-8 md:justify-evenly md:mt-14  lg:flex lg:justify-evenly lg:mt-10">
            <div className="flex flex-col items-center w-full">
               <h1 className="text-3xl mt-3 font-semibold md:mt-10">Experiencias</h1>

               <VerticalTimeline>
                  {experiences.map((experience) => (
                     <ExperienceCard experience={experience} key={experience.title} />
                  ))}
               </VerticalTimeline>
            </div>

            <div className="w-full">
               <h2 className="text-2xl mt-3 font-semibold md:mt-10">Habilidades</h2>
               <ul className="flex flex-row flex-wrap justify-center text-center gap-8 space-y-4 md:m-auto">
                  {technologies.map((technology) => (
                     <li className="w-20 h-20" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
}
