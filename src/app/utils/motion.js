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

// Clip-path reveal — texto "saindo de baixo de uma máscara"
export const revealText = (delay = 0) => {
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

// Card entrance — filho de container com stagger
export const cardItem = (axis = "y", distance = 40) => ({
  hidden: {
    opacity: 0,
    ...(axis === "y" ? { y: distance } : { x: distance }),
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 22,
    },
  },
});

// Seção inteira: fade + rise ao entrar na viewport
export const sectionEntrance = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 24,
      delay,
    },
  },
});
