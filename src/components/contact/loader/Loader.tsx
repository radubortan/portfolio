import classes from "./loader.module.scss";
import { motion } from "framer-motion";

export const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const dotVariants = {
  initial: {
    y: "-50%",
  },
  animate: {
    y: "50%",
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={classes.loadingContainer}
    >
      <motion.span variants={dotVariants} />
      <motion.span variants={dotVariants} />
      <motion.span variants={dotVariants} />
    </motion.div>
  );
};

export default Loader;
