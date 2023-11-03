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
