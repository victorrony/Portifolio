"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "../../constants/index";
import ExperienceCard from "./ExperienceCard";
import { revealText, fadeIn } from "@/app/utils/motion";
import { SectionWrapper } from "@/app/hoc";
import { SkillsBento } from "./SkillsBento";

const Experience = () => {
  return (
    <motion.section
      className="relative w-full flex flex-col justify-center items-center mx-auto mt-20"
      id="experience"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      exit="hidden"
    >
      {/* Título */}
      <div className="overflow-hidden w-full text-center mb-6">
        <motion.h1
          variants={revealText()}
          className="text-4xl md:text-6xl font-semibold text-white"
        >
          Experience
        </motion.h1>
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.8)}
        className="text-white/50 text-base max-w-xl text-center mb-12"
      >
        Where I&apos;ve built, shipped and learned.
      </motion.p>

      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>

      {/* Bento Grid de Skills */}
      <div className="w-full mt-20">
        <div className="overflow-hidden mb-4">
          <motion.h2
            variants={revealText()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold text-white"
          >
            Stack
          </motion.h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/40 text-sm font-mono tracking-wide mb-2"
        >
          Technologies I use to build production-grade products
        </motion.p>
        <SkillsBento />
      </div>
    </motion.section>
  );
};

export default SectionWrapper(memo(Experience), "experience");
