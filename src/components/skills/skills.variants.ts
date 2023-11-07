export const divisionVariantsDesktop = {
  initial: { opacity: 0, y: 100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, staggerChildren: 0.1 },
  },
};

export const divisionVariantsMobile = {
  initial: { opacity: 0, y: 100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
};

export const divisionElementVariants = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
};
