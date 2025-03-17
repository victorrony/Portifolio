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
            <p className="text-3xl mt-3 font-semibold md:mt-10">My work</p>
            <h2 className="text-3xl font-semibold md:mt-10">Projects.</h2>
         </motion.div>

         <div>
            <motion.p variants={fadeIn()} className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]">
               I have worked on a wide range of projects, from small personal projects to large-scale applications. Here
               are some of the projects I have worked on.
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
