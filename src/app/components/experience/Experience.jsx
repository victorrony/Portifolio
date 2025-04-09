"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { technologies, experiences, tolls } from "../../constants/index";
import ExperienceCard from "./ExperienceCard";
import { fadeIn, staggerContainer, textVariant } from "@/app/utils/motion";
import { SectionWrapper } from "@/app/hoc";
import BallCanvas from "./Ball";

const Experience = () => {
   const [experiencesList, setExperiencesList] = useState([]);

   useEffect(() => {
      setExperiencesList(experiences);
   }, []);

   return (
      <motion.section
         className="flex flex-col h-full justify-center items-center m-auto text-center text-white md:w-[100%] lg:w-[100%]"
         variants={staggerContainer()}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true, amount: 0.25 }}
         transition={{ staggerChildren: 0.1 }}
         id="experience"
         // style={{ scrollBehavior: "smooth" }}
      >
         <motion.div className="flex flex-col items-center gap-5 m-auto lg:m-0 mt-8 md:justify-evenly md:mt-14 lg:flex lg:justify-evenly lg:mt-10">
            <motion.div className="flex flex-col items-center w-full">
               <motion.h1 variants={textVariant()} className="text-7xl font-semibold text-white mb-6">
                  Experiences and Skills
               </motion.h1>
               <VerticalTimeline>
                  {experiencesList?.map((experience) => (
                     <ExperienceCard experience={experience} key={experience?.title} />
                  ))}
               </VerticalTimeline>
            </motion.div>
            <motion.div className="flex flex-row justify-between w-full mt-10 md:mt-20 xl:mt-10 lg:mt-10 lg:gap-20">
               {[
                  { title: "Skills", items: technologies },
                  { title: "Tolls", items: tolls },
               ].map((section) => (
                  <motion.div key={section.title} className="w-full">
                     <motion.h2 variants={textVariant()} className="text-5xl font-semibold">
                        {section.title}
                     </motion.h2>
                     <ul className="flex flex-row flex-wrap justify-center text-center gap-5 md:m-auto">
                        {section.items?.map((item) => (
                           <motion.div
                              key={item?.name}
                              variants={fadeIn("", "", 0.1, 1)}
                              layout
                              transition={{ duration: 0.5 }}
                              className="w-20 h-20 overflow-visible group relative flex items-center justify-center"
                           >
                              {item?.icon && <BallCanvas icon={item.icon} name={item.name} />}
                              <span className="text-xs text-white invisible absolute top-[-20px] px-2 py-1 bg-black rounded-md group-hover:visible">
                                 {item.name}
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
