export const contactVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      type: "spring",
      stiffness: 50,
    },
  },
};

export const buttonVariants = {
  whileHover: {
    backgroundColor: "#ffa500",
    color: "black",
    borderColor: "#ffa500",
    transition: { duration: 0.3, borderColor: { duration: 0.1 } },
  },
};
