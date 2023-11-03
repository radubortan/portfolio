export const contactVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      type: "spring",
      stiffness: 50,
    },
  },
};

export const formVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 4, duration: 1 } },
};
