"use client";
import React from "react";
import { motion } from "framer-motion";

import {
  fadeIn,
  textVariant,
  staggerContainer,
  revealText,
} from "../../utils/motion";
import { services, socialLinks } from "../../constants/index";
import { AboutCard } from "./AboutCard";
import { SectionWrapper } from "@/app/hoc";

const About = () => {
  return (
    <motion.section
      suppressHydrationWarning
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
      exit="hidden"
    >
      <div className="overflow-hidden">
        <motion.h1
          variants={revealText()}
          className="text-4xl md:text-6xl font-semibold text-white"
        >
          About Me
        </motion.h1>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.15, 1)}
        className="mt-5 text-white-100 text-[19px] max-w-3xl leading-[30px]"
      >
        Sou um desenvolvedor web apaixonado por criar experiências digitais
        envolventes e funcionais. Com um conhecimento sólido em tecnologias
        modernas, estou sempre em busca de novos desafios e oportunidades de
        aprendizado.
      </motion.p>

      <div className="flex flex-wrap gap-10 mt-10">
        {services?.map((service, index) => (
          <AboutCard key={`service-${index}`} index={index} {...service} />
        ))}
      </div>
    </motion.section>
  );
};

export default SectionWrapper(About, "about");
