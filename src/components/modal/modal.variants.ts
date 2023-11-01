export const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
