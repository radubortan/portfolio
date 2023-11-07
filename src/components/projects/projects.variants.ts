export const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  whileInView: {
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

export const textVariantsMobile = {
  initial: {
    y: 100,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 100, damping: 15 },
  },
};
