// filepath: /home/victor-rony/Documents/RONY/Portifolio/src/app/components/experience/Experience.jsx
"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { technologies, experiences, tolls } from "../../constants/index";
import ExperienceCard from "./ExperienceCard";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { SectionWrapper } from "@/app/hoc";
import BallCanvas from "./BallCanvas";
import { gsap } from "gsap";

const Experience = () => {
   const skillsContainerRef = useRef(null);
   const toolsContainerRef = useRef(null);
   const [technologiesState, setTechnologiesState] = useState([...technologies]);
   const [tollsState, setTollsState] = useState([...tolls]);
   const [isAnimating, setIsAnimating] = useState(false);

   // Função otimizada para embaralhar array
   const shuffleArray = useCallback((array) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
   }, []);

   // Função para animar as tecnologias
   const animateTechnologies = useCallback(() => {
      if (!isAnimating && (skillsContainerRef.current || toolsContainerRef.current)) {
         setIsAnimating(true);

         const skillsCards = skillsContainerRef.current?.querySelectorAll(".tech-card") || [];
         const toolsCards = toolsContainerRef.current?.querySelectorAll(".tech-card") || [];
         const allCards = [...skillsCards, ...toolsCards];

         if (allCards.length > 0) {
            const tl = gsap.timeline({
               onComplete: () => {
                  setTechnologiesState(shuffleArray(technologiesState));
                  setTollsState(shuffleArray(tollsState));
                  setIsAnimating(false);
               },
            });

            tl.to(allCards, {
               duration: 0.5,
               opacity: 0.6,
               scale: 0.9,
               rotationY: 15,
               ease: "power2.inOut",
               stagger: 0.05,
            }).to(allCards, {
               duration: 0.5,
               opacity: 1,
               scale: 1,
               rotationY: 0,
               ease: "back.out(1.7)",
               stagger: 0.05,
            });
         } else {
            setIsAnimating(false);
         }
      }
   }, [technologiesState, tollsState, shuffleArray, isAnimating]);

   useEffect(() => {
      const interval = setInterval(animateTechnologies, 5000);
      return () => clearInterval(interval);
   }, [animateTechnologies]);

   return (
      <motion.section
         className="relative w-full flex flex-col justify-center items-center mx-auto mt-20"
         id="experience"
         variants={textVariant(0.1)}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true }}
      >
         <motion.div className="w-full max-w-7xl">
            <motion.h1 variants={textVariant()} className="text-6xl font-semibold text-white mb-6 text-center">
               Experiences and Skills
            </motion.h1>

            <VerticalTimeline>
               {experiences.map((experience, index) => (
                  <ExperienceCard experience={experience} key={`experience-${index}`} />
               ))}
            </VerticalTimeline>

            <motion.div className="flex flex-col lg:flex-row justify-between w-full mt-10 md:mt-20 xl:mt-10 lg:mt-10 lg:gap-20 gap-10">
               {[
                  { title: "Skills", items: technologiesState, ref: skillsContainerRef },
                  { title: "Tools", items: tollsState, ref: toolsContainerRef },
               ].map(({ title, items, ref }) => (
                  <motion.div key={title} className="w-full">
                     <motion.h2
                        variants={textVariant( 0.2)}
                        className="text-5xl font-semibold mb-8 text-center lg:text-left"
                     >
                        {title}
                     </motion.h2>
                     <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                        {items?.map(({ name, icon }, index) => (
                           <motion.div
                              key={`${name}-${index}`}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
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
         </motion.div>
      </motion.section>
   );
};

export default SectionWrapper(Experience, "experience");
