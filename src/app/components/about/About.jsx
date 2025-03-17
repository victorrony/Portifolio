"use client";
import React from "react";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../../utils/motion";
import { services, socialLinks } from "@/app/constants";
import { AboutCard } from "./AboutCard";

export default function About() {
   return (
      <div
         id="main"
         className="flex flex-col mt-10 w-full justify-start h-screen  bg-  text-white lg:w-[100%] xl:w-[1280px] "
      >
         <div className="mt-20 flex flex-col justify-items-start lg:mt- ">
            <motion.div variants={textVariant()}>
               <h1 className="text-4xl font-semibold text-white "> Sobre mim </h1>
            </motion.div>
            <motion.p
               variants={fadeIn("", "", 0.1, 1)}
               className="mt-4 text-secondary text-[17px] items-left max-w-3xl leading-[30px]"
            >
               {" "}
               Olá, Éu sou <span className="font-semibold">Victor Rony Pereira Fernandes,</span> um desenvolvedor{" "}
               <span className="font-semibold">Full Stack</span> especializado em JavaScript, React, Next.js, Node.js e
               bancos de dados SQL. Com experiência no desenvolvimento de aplicações web escaláveis e de alto
               desempenho, estou sempre buscando aprimorar minhas habilidades e aprender novas tecnologias. sou
               apaixonado pela tecnologia. O meu primeiro contacto com a programaçao foi no inicio 2022, quando um amigo
               me apresentou o Desemvolvimento web.
            </motion.p>

            <motion.div className="flex ml-[80px] w-70 my-6">
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
}
