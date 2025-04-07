"use client";

import dynamic from "next/dynamic";
const BallCanvas = dynamic(() => import("./BallCanvas"), { ssr: false });

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { technologies, experiences, tolls } from "../../constants/index";
import ExperienceCard from "./ExperienceCard";
import { fadeIn, textVariant, staggerContainer } from "@/app/utils/motion";
import { SectionWrapper } from "@/app/hoc";

const Experience = () => {
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true);
      // Import CSS only on the client side
      import("react-vertical-timeline-component/style.min.css");
   }, []);

   return (
      <motion.section
         variants={staggerContainer()}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true, amount: 0.25 }}
         className="flex flex-col h-full justify-center items-center m-auto text-center text-white md:w-[100%] lg:w-[100%]"
      >
         <div className="flex flex-col items-center gap-5 m-auto lg:m-0 mt-8 md:justify-evenly md:mt-14  lg:flex lg:justify-evenly lg:mt-10">
            <div className="flex flex-col items-center w-full">
               <h1 className="text-4xl font-semibold text-white "> Experiences and Skills </h1>

               {isClient && (
                  <VerticalTimeline>
                     {experiences?.map((experience) => (
                        <ExperienceCard experience={experience} key={experience?.title} />
                     ))}
                  </VerticalTimeline>
               )}
            </div>

            <div className="flex flex-row justify-between w-full mt-10 md:mt-20">
               <div className="w-full ">
                  <h2 className="text-3xl font-semibold ">Skills</h2>
                  <ul className="flex flex-row flex-wrap justify-center text-center gap-5 md:m-auto">
                     {technologies?.map((technology) => (
                        <motion.div
                           key={technology?.name}
                           variants={fadeIn("", "", 0.1, 1)}
                           layout
                           transition={{ duration: 0.5 }}
                           className="w-20 h-w-20 overflow-visible group relative flex items-center justify-center"
                        >
                           {technology?.icon && <BallCanvas icon={technology.icon} name={technology.name} />}
                           <span className="text-xs text-white invisible absolute top-[-20px] px-2 py-1 bg-black rounded-md group-hover:visible">
                              {technology.name}
                           </span>
                        </motion.div>
                     ))}
                  </ul>
               </div>

               <div className="w-full ">
                  <h2 className="text-3xl font-semibold "> Tolls </h2>
                  <ul className="flex flex-row flex-wrap justify-center text-center gap-5 md:m-auto">
                     {tolls?.map((toll) => (
                        <motion.div
                           key={toll?.name}
                           variants={fadeIn("", "", 0.1, 1)}
                           layout
                           transition={{ duration: 0.5 }}
                           className="w-20 h-20 overflow-visible group relative flex items-center justify-center"
                        >
                           {toll?.icon && <BallCanvas icon={toll.icon} name={toll.name} />}
                           <span className="text-xs text-white invisible absolute top-[-20px] px-2 py-1 bg-black rounded-md group-hover:visible">
                              {toll.name}
                           </span>
                        </motion.div>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </motion.section>
   );
};

export default SectionWrapper(Experience, "experience");
// export default Experience;
