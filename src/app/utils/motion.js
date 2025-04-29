// Definition of reusable motion variants
// This file contains reusable motion variants that can be used in components

// Variants for text animations
// These variants can be used for animating text elements
export const textVariant = (delay) => {
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
export const fadeIn = (direction, type, delay, duration) => {
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
export const zoomIn = (delay, duration) => {
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
export const slideIn = (direction, type, delay, duration) => {
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

// Variants for stagger animations
// These variants can be used for animating stagger elements
export const staggerContainer = (staggerChildren, delayChildren) => {
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
