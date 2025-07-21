"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "@/app/utils/motion";
import { SectionWrapper } from "@/app/hoc";
import ProjectCard from "./ProjectCard";
import { projects } from "../../constants";

// Add container variant for staggering child animations
const containerVariants = {
   hidden: {},
   show: {
      transition: { staggerChildren: 0.2 },
      opacity: 1,
      y: 0,
   },
};

const Project = () => {
   return (
      <motion.section
         suppressHydrationWarning
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.2 }} // ajuste here
         transition={{ staggerChildren: 0.2, delayChildren: 0.2 }} // ajuste here
         exit="hidden" // nova prop
      >
         <motion.h1 variants={textVariant()} className="text-4xl md:text-6xl font-semibold text-white">
            Projects
         </motion.h1>
         <motion.p variants={fadeIn()} className="mt-5 text-white-100 text-[19px] max-w-3xl leading-[30px]">
            Below is a selection of projects that showcase my skills and experience. Each project highlights my ability
            to solve problems and deliver high-quality solutions.
         </motion.p>
         {/* Stagger the child ProjectCard animations using containerVariants */}
         <motion.div variants={containerVariants} className="mt-20 w-full flex flex-wrap gap-7">
            {projects?.map((project, index) => (
               <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
         </motion.div>
      </motion.section>
   );
};

export default SectionWrapper(Project, "projects");
