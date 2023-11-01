import { ReactNode } from "react";
import { motion } from "framer-motion";
import classes from "./backdrop.module.scss";

interface BackdropProps {
  onClick: () => void;
  children: ReactNode;
}

const Backdrop = ({ children, onClick }: BackdropProps) => {
  return (
    <motion.div
      className={classes.backdrop}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
