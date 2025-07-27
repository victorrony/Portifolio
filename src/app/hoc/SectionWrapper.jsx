"use client";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// HOC to wrap sections with stars
// This HOC wraps the component with a motion section that has a stagger effect
// and a star span that is used for scrolling to the section
const StarWrapper = (Component, idName) =>
   function HOC() {
      return (
         <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`${styles.padding} lg:w-[1280px]  mx-auto relative z-0`}
         >
            <span className="hash-span" id={idName}>
               &nbsp;
            </span>

            <Component />
         </motion.section>
      );
   };

export default StarWrapper;
