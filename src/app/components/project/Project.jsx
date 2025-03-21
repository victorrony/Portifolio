"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "@/app/utils/motion";
import { SectionWrapper } from "@/app/hoc";
import ProjectCard from "./ProjectCard";
import { projects } from "../../constants";

const Project = () => {
   return (
      <>
         <motion.div variants={textVariant()}>
            <p className="text-4xl mt-3 font-semibold">Portfolio</p>
            <h2 className="text-3xl font-semibold md:mt-10">Featured Projects.</h2>
         </motion.div>

         <div>
            <motion.p variants={fadeIn()} className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]">
               Below is a selection of projects that showcase my skills and experience. Each project highlights my
               ability to solve problems and deliver high-quality solutions.
            </motion.p>
         </div>

         <div className="mt-20 w-full flex flex-wrap gap-7">
            {projects?.map((project, index) => (
               <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
         </div>
      </>
   );
};

export default SectionWrapper(Project, "projects");
