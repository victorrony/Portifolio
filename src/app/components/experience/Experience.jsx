"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { technologies, experiences, tolls } from "../../constants/index";
import ExperienceCard from "./ExperienceCard";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { SectionWrapper } from "@/app/hoc";
import BallCanvas from "./BallCanvas";
import Ball from "./Ball";

// import Gestures from "./Gestures";

const Experience = () => {
   const experiencesList = experiences;

   return (
      <motion.section
         className="relative w-full flex flex-col justify-center items-center mx-auto mt-20"
         id="experience"
         variants={textVariant(0.1)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
      >
         <motion.div>
            <motion.h1 variants={textVariant()} className="text-6xl font-semibold text-white mb-6">
               Experiences and Skills
            </motion.h1>
            <VerticalTimeline>
               {experiencesList.map((experience, index) => (
                  <ExperienceCard experience={experience} key={`experience-${index}`} />
               ))}
            </VerticalTimeline>
            <motion.div className="flex flex-row justify-between w-full mt-10 md:mt-20 xl:mt-10 lg:mt-10 lg:gap-20">
               {[
                  { title: "Skills", items: technologies },
                  { title: "Tolls", items: tolls },
               ].map(({ title, items }, index) => (
                  <motion.div key={title} className="w-full">
                     <motion.h2 variants={textVariant()} className="text-5xl font-semibold">
                        {title}
                     </motion.h2>
                     <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:m-auto">
                        {items.map(({ name, icon }) => (
                           <motion.div
                              key={name}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.1 }}
                              className="w-full h-20 overflow-visible group relative flex items-center justify-center"
                           >
                              {icon ? <BallCanvas icon={icon} name={name} /> : (
                                 <span className="text-xs w-full text-white">{name}</span>
                              )}
                              <span className="text-xs text-white invisible absolute top-[-20px] px-2 py-1 bg-black rounded-md group-hover:visible">
                                 {name}
                              </span>
                           </motion.div>
                        ))}
                     </ul>
                  </motion.div>
               ))}
            </motion.div>
         </motion.div>
      </motion.section>
   );
};

export default SectionWrapper(Experience, "experience");
// export default Experience;
