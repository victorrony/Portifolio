// Definition of reusable motion variants
// This file contains reusable motion variants that can be used in components

import { Variants } from "framer-motion";

type Direction = "left" | "right" | "up" | "down" | "";
type AnimationType = "spring" | "tween" | "inertia";

// Variants for text animations
// These variants can be used for animating text elements
export const textVariant = (delay: number = 0): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

// Variants for image animations
// These variants can be used for animating image elements
export const fadeIn = (
  direction: Direction = "",
  type: AnimationType = "tween",
  delay: number = 0,
  duration: number = 0.75,
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Variants for zoom animations
// These variants can be used for animating zoom elements
export const zoomIn = (
  delay: number = 0,
  duration: number = 0.75,
): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Variants for slide animations
// These variants can be used for animating slide elements
export const slideIn = (
  direction: Direction,
  type: AnimationType = "tween",
  delay: number = 0,
  duration: number = 0.75,
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Clip-path reveal — texto "saindo de baixo de uma máscara"
export const revealText = (delay: number = 0): Variants => {
  return {
    hidden: {
      clipPath: "inset(0 0 100% 0)",
      y: 20,
      opacity: 0,
    },
    show: {
      clipPath: "inset(0 0 0% 0)",
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
};

// Variants for stagger animations
// These variants can be used for animating stagger elements
export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0,
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};
