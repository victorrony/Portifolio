"use client";

import { memo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { technologies, experiences, tools } from "../../constants/index";
import ExperienceCard from "./ExperienceCard";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { SectionWrapper } from "@/app/hoc";

import DynamicBallCanvas from "./DynamicBallCanvas";

const Experience = () => {
   const skillsContainerRef = useRef(null);
   const toolsContainerRef = useRef(null);
   const [technologiesState, setTechnologiesState] = useState([...technologies]);
   const [toolsState, setToolsState] = useState([...tools]);

   return (
      <motion.section
         className="relative w-full flex flex-col justify-center items-center mx-auto mt-20"
         id="experience"
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.5 }}
         transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
         exit="hidden"
      >
         <motion.h1
            variants={textVariant()}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, type: "spring" }}
            className="text-4xl md:text-6xl font-semibold text-white mb-6 text-center"
         >
            Experiences and Skills
         </motion.h1>

         <VerticalTimeline>
            {experiences.map((experience, index) => (
               <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
         </VerticalTimeline>

         <motion.div className="flex flex-col lg:flex-row justify-between w-full mt-10 md:mt-20 xl:mt-10 lg:mt-10 lg:gap-20 gap-10">
            {[
               { title: "Skills", items: technologiesState, ref: skillsContainerRef },
               { title: "Tools", items: toolsState, ref: toolsContainerRef },
            ].map(({ title, items, ref }) => (
               <motion.div
                  key={title}
                  className="w-full"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, type: "spring" }}
               >
                  <motion.h2
                     variants={textVariant(0.2)}
                     initial="hidden"
                     animate="show"
                     transition={{ duration: 0.7, type: "spring" }}
                     className="text-2xl md:text-5xl font-semibold mb-8 text-center lg:text-left"
                  >
                     {title}
                  </motion.h2>
                  <div
                     ref={ref}
                     className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5"
                     aria-label={title}
                     role="list"
                  >
                     {items?.map(({ name, icon }, index) => (
                        <motion.div
                           key={`${name}-${index}`}
                           initial={{ opacity: 0, y: 20, scale: 0.95 }}
                           whileInView={{ opacity: 1, y: 0, scale: 1 }}
                           whileHover={{ scale: 1.08, boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
                           transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                           className="tech-card w-full h-20 overflow-visible group relative flex items-center justify-center rounded-lg transition-colors duration-300"
                           tabIndex={0}
                           aria-label={name}
                           role="listitem"
                           aria-describedby={`tooltip-${name}`}
                        >
                           {icon ? (
                              <DynamicBallCanvas icon={icon} name={name} index={index} alt={name + " icon"} />
                           ) : (
                              <span className="text-xs text-center text-white px-2">{name}</span>
                           )}
                           <span
                              id={`tooltip-${name}`}
                              className="text-xs text-white invisible absolute top-[-40px] px-2 py-1 bg-black/90 rounded-md group-hover:visible transition-all duration-300 whitespace-nowrap z-10"
                           >
                              {name}
                           </span>
                        </motion.div>
                     ))}
                  </div>
               </motion.div>
            ))}
         </motion.div>
      </motion.section>
   );
};

export default SectionWrapper(memo(Experience), "experience");
