export const wrapperVariants = {
  open: { transition: { staggerChildren: 0.1 } },
  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

export const itemVariants = {
  open: { y: 0, opacity: 1 },
  closed: { y: 50, opacity: 0 },
};
