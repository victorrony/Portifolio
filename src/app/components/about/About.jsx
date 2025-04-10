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
         className="flex flex-col w-full h-full items-start justify-center text-white lg:w-[100%] xl:w-[1280px]"
         variants={staggerContainer()}
         initial="hidden"
         whileInView="show"
         viewport={{ once: true, amount: 0.25 }}
         transition={{ staggerChildren: 0.1 }}
      >
         <motion.h1 variants={textVariant()} className="text-6xl font-semibold">
            About Me
         </motion.h1>
         <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-justify w-2/3 text-[19px] text-wrap leading-[30px]"
         >
            <span className="font-semibold text-white-100 text-[19px]">Hi,</span> I am{" "}
            <span className="font-semibold text-white-100 text-[19px]">Victor Rony Fernandes</span>, a{" "}
            <span className="font-semibold text-white-100 text-[19px]">Full Stack</span> developer specialized in
            JavaScript, React, Next.js, Node.js, and SQL databases. With experience in developing scalable and
            high-performance web applications, I am always looking to improve my skills and learn new technologies. I am
            passionate about technology. My first contact with programming was at the beginning of 2022, when a friend
            introduced me to web development.
         </motion.p>
         <ul className="space-x-16 flex flex-row z-10 cursor-pointer mt-3">
            {socialLinks.map((link, index) => (
               <motion.li key={index} variants={fadeIn("", "", 0.1, 1)}>
                  <a href={link.href} target="blank">
                     {link.icon}
                  </a>
               </motion.li>
            ))}
         </ul>
         <motion.div className="mt-20 w-full flex flex-row flex-wrap gap-7" variants={staggerContainer(0.1, 0.25)}>
            {services.map((service, index) => (
               <AboutCard key={service.title} index={index} {...service} />
            ))}
         </motion.div>
      </motion.section>
   );
};

export default SectionWrapper(About, "about");
// export default About;
