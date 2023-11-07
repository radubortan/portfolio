export const textVariants = {
  initial: { opacity: 0 },
  whileInView: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      ease: "circOut",
      duration: 0.5,
      opacity: {
        duration: 1,
      },
    },
  },
};

export const dividerVariantsDesktop = {
  initial: {
    height: 0,
  },
  whileInView: {
    height: "100%",
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const dividerVariantsMobile = {
  initial: {
    width: 0,
  },
  whileInView: {
    width: "100%",
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const schoolVariants = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1, y: 0, x: 0, transition: { y: { duration: 0.5 } } },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 1 },
};
