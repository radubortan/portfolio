import { motion } from "framer-motion";
import classes from "./toggleButton.module.scss";
import * as variants from "./toggleButton.variants";

const ToggleButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <motion.span variants={variants.topLineVariants} />
      <motion.span variants={variants.middleLineVariants} />
      <motion.span variants={variants.bottomLineVariants} />
    </button>
  );
};

export default ToggleButton;
