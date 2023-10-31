import { motion } from "framer-motion";
import classes from "./toggleButton.module.scss";

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
              duration: 0.4,
              backgroundColor: {
                duration: 1,
              },
            },
          },
          closed: {
            rotate: 0,
            translateY: 0,
            transition: { duration: 0.5 },
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
              duration: 0.4,
              backgroundColor: {
                duration: 1,
              },
            },
          },
          closed: {
            rotate: 0,
            translateY: 0,
            transition: { duration: 0.5 },
          },
        }}
      />
    </button>
  );
};

export default ToggleButton;
