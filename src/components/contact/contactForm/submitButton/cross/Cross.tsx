import { motion, useMotionValue, useTransform } from "framer-motion";
import classes from "./cross.module.scss";

const Cross = () => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <svg
      className={classes.cross}
      viewBox="-0.5 0 25 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d="M3 21.32L21 3.32001"
        animate={{
          pathLength: 1,
          transition: { delay: 0.3 },
        }}
        style={{ pathLength, opacity }}
      />
      <motion.path
        d="M3 3.32001L21 21.32"
        animate={{
          pathLength: 1,
          transition: { delay: 0.3 },
        }}
        style={{ pathLength, opacity }}
      />
    </svg>
  );
};

export default Cross;
