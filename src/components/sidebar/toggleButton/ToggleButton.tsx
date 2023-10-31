import { motion } from "framer-motion";
import classes from "./toggleButton.module.scss";

const BACKGROUND_COLOR_ON_OPEN = 0.7;
const BACKGROUND_COLOR_ON_CLOSE = 0.5;
const GENERAL_ANIMATION_ON_OPEN = 0.4;

const ToggleButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <motion.span
        variants={{
          open: {
            rotate: 45,
            translateY: 7,
            backgroundColor: "rgb(0,0,0)",
            transition: {
              duration: GENERAL_ANIMATION_ON_OPEN,
              backgroundColor: {
                duration: BACKGROUND_COLOR_ON_OPEN,
              },
            },
          },
          closed: {
            rotate: 0,
            translateY: 0,
            transition: { duration: BACKGROUND_COLOR_ON_CLOSE },
          },
        }}
      />
      <motion.span
        variants={{
          open: {
            translateX: 20,
            opacity: 0,
          },
        }}
      />
      <motion.span
        variants={{
          open: {
            rotate: -45,
            translateY: -7,
            backgroundColor: "rgb(0,0,0)",
            transition: {
              duration: GENERAL_ANIMATION_ON_OPEN,
              backgroundColor: {
                duration: BACKGROUND_COLOR_ON_OPEN,
              },
            },
          },
          closed: {
            rotate: 0,
            translateY: 0,
            transition: { duration: BACKGROUND_COLOR_ON_CLOSE },
          },
        }}
      />
    </button>
  );
};

export default ToggleButton;
