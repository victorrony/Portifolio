"use client";

// Import the BallCanvas component with dynamic import to avoid hydration issues
import dynamic from "next/dynamic";
const BallCanvas = dynamic(() => import("./BallCanvas"), { ssr: false });

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { technologies } from "../../constants/index";
import { experiences } from "../../constants/index";
import ExperienceCard from "./ExperienceCard";
import { textVariant } from "@/app/utils/motion";
import { SectionWrapper } from "@/app/hoc";

const Experience = () => {
   // Add client-side rendering protection
   const [isClient, setIsClient] = useState(false);

   useEffect(() => {
      setIsClient(true);
      // Import CSS only on the client side
      import("react-vertical-timeline-component/style.min.css");
   }, []);

   return (
      <div
         id="section"
         className="flex flex-col h-full w-[1280px] justify-center items-center m-auto text-center text-white md:w-[100%] lg:w-[100%] xl:w-[1280px]"
      >
         <motion.div variants={textVariant()}>
            <h1 className="text-4xl font-semibold text-white "> Experiencias e Habilidades </h1>
         </motion.div>
         <div className="flex flex-col items-center gap-5 m-auto lg:m-0 mt-8 md:justify-evenly md:mt-14  lg:flex lg:justify-evenly lg:mt-10">
            <div className="flex flex-col items-center w-full">
               <h1 className="text-3xl mt-3 font-semibold md:mt-10">Experiencias</h1>

               {isClient ? (
                  <VerticalTimeline>
                     {experiences.map((experience) => (
                        <ExperienceCard experience={experience} key={experience.title} />
                     ))}
                  </VerticalTimeline>
               ) : (
                  <div className="w-full py-10">Loading experience timeline...</div>
               )}
            </div>

            <div className="w-full mt-10 md:mt-10">
               <h2 className="text-3xl  font-semibold ">Habilidades</h2>
               <ul className="flex flex-row flex-wrap justify-center text-center gap-5 space-y-4 md:m-auto">
                  {technologies.map((technology) => (
                     <li className="w-24 h-24" key={technology.name}>
                        {isClient && <BallCanvas icon={technology.icon} />}
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </div>
   );
}

export default SectionWrapper(Experience, "experience");
// export default Experience;
