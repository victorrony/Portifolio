"use client";
import React from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant, staggerContainer } from "../../utils/motion";
import { services, socialLinks } from "../../constants/index";
import { AboutCard } from "./AboutCard";
import { SectionWrapper } from "@/app/hoc";

const About = () => {
   return (
      <motion.section
         suppressHydrationWarning
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.5 }} // ajuste here
         transition={{ staggerChildren: 0.2, delayChildren: 0.2 }} // ajuste here
         exit="hidden" // nova prop
      >
         <motion.h1 variants={textVariant()} className="text-6xl font-semibold text-white">
            About Me
         </motion.h1>
         <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-5 text-white-100 text-[19px] max-w-3xl leading-[30px]"
         >
            Sou um desenvolvedor web apaixonado por criar experiências digitais envolventes e funcionais. Com um
            conhecimento sólido em tecnologias modernas, estou sempre em busca de novos desafios e oportunidades de
            aprendizado.
         </motion.p>

         <div className="mt-20 w-full flex flex-wrap gap-7">
            {services?.map((service, index) => (
               <AboutCard key={`service-${index}`} index={index} {...service} />
            ))}
         </div>
      </motion.section>
   );
};

export default SectionWrapper(About, "about");
// export default About;
