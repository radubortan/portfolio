import { motion, useMotionValue, useTransform } from "framer-motion";
import classes from "./checkmark.module.scss";

const Checkmark = () => {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <svg className={classes.checkmark} viewBox="30 45 87 65">
      <motion.path
        d="M38 74.707l24.647 24.646L116.5 45.5"
        animate={{
          pathLength: 1,
          transition: { delay: 0.3 },
        }}
        style={{ pathLength, opacity }}
      />
    </svg>
  );
};

export default Checkmark;
