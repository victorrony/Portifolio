"use client";
import React from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../../utils/motion";
import { services, socialLinks } from "@/app/constants";
import { AboutCard } from "./AboutCard";
import { SectionWrapper } from "@/app/hoc";

const About = () => {
   return (
      <div className="flex flex-col w-full h-full items-start justify-center text-white lg:w-[100%] xl:w-[1280px] ">
         <div className=" flex flex-col justify-items-start ">
            <motion.div variants={textVariant()}>
               <h1 className="text-4xl font-semibold text-white "> About Me </h1>
            </motion.div>
            <motion.div
               variants={fadeIn("", "", 0.1, 1)}
               className="mt-4 text-secondary text-[17px] items-left max-w-3xl leading-[30px]"
            >
               <p>
                  Hello, I am{" "}
                  <span className="font-semibold text-white-100 text-[19px]  ">Victor Rony Pereira Fernandes,</span> a{" "}
                  <span className="font-semibold text-white-100 text-[19px] ">Full Stack</span> developer specialized in
                  JavaScript, React, Next.js, Node.js, and SQL databases. With experience in developing scalable and
                  high-performance web applications, I am always looking to improve my skills and learn new technologies.
                  I am passionate about technology. My first contact with programming was at the beginning of 2022, when a
                  friend introduced me to web development.
               </p>
            </motion.div>

            <motion.div className="flex w-70 my-6">
               <ul className=" space-x-16 flex ">
                  {socialLinks.map((link, index) => (
                     <li key={index}>
                        <a href={link.href} target="blank">
                           {link.icon}
                        </a>
                     </li>
                  ))}
               </ul>
            </motion.div>
         </div>

         <div className="flex gap-10 mb-4 lg:mb-10 xl:mt-16">
            {services.map((service, index) => (
               <AboutCard key={service.title} index={index} {...service} />
            ))}
         </div>
      </div>
   );
};

export default SectionWrapper(About, "about");
// export default About;
