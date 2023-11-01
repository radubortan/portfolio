export const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    duration: 10,

    transition: {
      type: "spring",
      bounce: 100,
      damping: 15,
    },
  },
};

export const smallTextVariants = {
  initial: { x: -200, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 200,
      damping: 17,
    },
  },
};

export const lineVariants = {
  initial: { x: 100, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 200,
      damping: 17,
    },
  },
};
