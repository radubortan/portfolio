export const textVariants = {
  initial: { opacity: 0, x: 400 },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      opacity: {
        duration: 1,
      },
      type: "spring",
      stiffness: 80,
      damping: 20,
    },
  },
};

export const dividerVariants = {
  initial: {
    height: 0,
  },
  whileInView: {
    height: "100%",
    transition: { type: "spring", stiffness: 30, duration: 1 },
  },
};

export const headersVariants = {
  initial: {
    x: -400,
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      opacity: {
        duration: 1,
      },
    },
  },
};

export const schoolVariants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, y: 0, transition: { y: { duration: 0.5 } } },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 1 },
};
