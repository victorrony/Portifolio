"use client";
import dynamic from "next/dynamic";
import { socialLinks } from "../../constants/index";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";

const ComputersCanvas = dynamic(() => import("./Computers"), { ssr: false });
const ParticleBackground = dynamic(
  () => import("./ParticleBackground").then((m) => m.ParticleBackground),
  { ssr: false },
);

export default function Hero() {
  const titleRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, -80]);
  const textOpacity = useTransform(scrollY, [100, 500], [1, 0]);
  const canvasY = useTransform(scrollY, [0, 600], [0, 60]);
  const canvasOpacity = useTransform(scrollY, [100, 500], [1, 0]);

  useEffect(() => {
    if (!titleRef.current) return;

    // Animação inicial do h1
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { duration: 0.8, opacity: 1, y: 0, ease: "back.out(1.7)", delay: 0.5 },
    );

    // Loop a cada 10s — só o h1
    const interval = setInterval(() => {
      if (!titleRef.current) return;
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { duration: 0.8, opacity: 1, y: 0, ease: "back.out(1.7)" },
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header
      ref={heroRef}
      className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden xl:w-[1280px]"
    >
      <ParticleBackground
        count={2500}
        color="#a5b4fc"
        speed={0.0003}
        className="absolute inset-0 -z-10 pointer-events-none"
      />
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row justify-center w-full gap-10 lg:gap-20 xl:gap-10"
      >
        <div className="flex flex-col items-center gap-7">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-2xl font-sans lg:text-3xl text-white"
          >
            Hi, my name is{" "}
            <span className="font-bold font-serif text-3xl text-blue-700">
              Victor Rony.
            </span>{" "}
            I&apos;m
          </motion.h2>

          <h1 ref={titleRef} className="text-5xl mt-4 lg:mt-6 text-white">
            <span className="font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h1>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.1, delayChildren: 0.8 },
              },
            }}
            className="flex justify-center items-center space-x-20 mt-10 xl:mt-[-10px] xl:mr-[80px] z-20"
          >
            {socialLinks?.map((link, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.8 },
                  show: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: canvasY }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <motion.div
          className="w-full h-full"
          style={{ opacity: canvasOpacity }}
        >
          <ComputersCanvas className="w-[20%] h-full" />
        </motion.div>
      </motion.div>
    </header>
  );
}
