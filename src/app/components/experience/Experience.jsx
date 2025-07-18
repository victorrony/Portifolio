"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { technologies, experiences, tolls } from "../../constants/index";
import ExperienceCard from "./ExperienceCard";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { SectionWrapper } from "@/app/hoc";
import BallCanvas from "./BallCanvas";

const Experience = () => {
   const skillsContainerRef = useRef(null);
   const toolsContainerRef = useRef(null);
   const [technologiesState, setTechnologiesState] = useState([...technologies]);
   const [tollsState, setTollsState] = useState([...tolls]);

   return (
      <motion.section
         className="relative w-full flex flex-col justify-center items-center mx-auto mt-20"
         id="experience"
         suppressHydrationWarning
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.5 }} // ajuste here
         transition={{ staggerChildren: 0.2, delayChildren: 0.2 }} // ajuste here
         exit="hidden" // nova prop
      >
         {/* <motion.div className="w-full max-w-7xl"> */}
            <motion.h1
               variants={textVariant()}
               initial="hidden"
               animate="show"
               transition={{ duration: 0.8, type: "spring" }}
               className="text-6xl font-semibold text-white mb-6 text-center"
            >
               Experiences and Skills
            </motion.h1>

            <VerticalTimeline>
               {experiences.map((experience, index) => (
                  // <motion.div
                  //    key={`experience-${index}`}
                  //    initial={{ opacity: 0 }}
                  //    whileInView={{ opacity: 1 }}
                  //    transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
                  // >
                  <ExperienceCard key={`experience-${index}`} experience={experience} />
                  // </motion.div>
               ))}
            </VerticalTimeline>

            <motion.div className="flex flex-col lg:flex-row justify-between w-full mt-10 md:mt-20 xl:mt-10 lg:mt-10 lg:gap-20 gap-10">
               {[
                  { title: "Skills", items: technologiesState, ref: skillsContainerRef },
                  { title: "Tools", items: tollsState, ref: toolsContainerRef },
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
                        className="text-5xl font-semibold mb-8 text-center lg:text-left"
                     >
                        {title}
                     </motion.h2>
                     <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                        {items?.map(({ name, icon }, index) => (
                           <motion.div
                              key={`${name}-${index}`}
                              initial={{ opacity: 0, y: 20, scale: 0.95 }}
                              whileInView={{ opacity: 1, y: 0, scale: 1 }}
                              whileHover={{ scale: 1.08, boxShadow: "0 4px 20px rgba(0,0,0,0.15)" }}
                              transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                              className="tech-card w-full h-20 overflow-visible group relative flex items-center justify-center rounded-lg hover:bg-gray-700/30 transition-colors duration-300"
                           >
                              {icon ? (
                                 <BallCanvas icon={icon} name={name} />
                              ) : (
                                 <span className="text-xs text-center text-white px-2">{name}</span>
                              )}
                              <span className="text-xs text-white invisible absolute top-[-40px] px-2 py-1 bg-black/90 rounded-md group-hover:visible transition-all duration-300 whitespace-nowrap z-10">
                                 {name}
                              </span>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>
               ))}
            </motion.div>
         {/* </motion.div> */}
      </motion.section>
   );
};

export default SectionWrapper(Experience, "experience");
