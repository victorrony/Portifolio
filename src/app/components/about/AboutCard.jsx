"use client";

import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn } from "../../utils/motion";
import Image from "next/image";

export const AboutCard = ({ index, title, icon }) => (
   <Tilt className="xs:w-[250px] w-fu">
      <motion.div
         variants={fadeIn("right", "spring", index * 0.5, 1.75)}
         className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
         <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
            <Image src={icon} alt={title} width={50} height={50} className="object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
         </div>
      </motion.div>
   </Tilt>
);
