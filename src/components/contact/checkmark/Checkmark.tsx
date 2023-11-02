import { MotionValue, motion } from "framer-motion";
import classes from "./checkmark.module.scss";

interface CheckmarkProps {
  isSent: boolean;
  pathLength: MotionValue<number>;
  opacity: MotionValue<number>;
}

const Checkmark = ({ isSent, pathLength, opacity }: CheckmarkProps) => {
  return (
    <svg className={classes.checkmark} viewBox="30 45 87 65">
      <motion.path
        d="M38 74.707l24.647 24.646L116.5 45.5"
        animate={{
          pathLength: isSent ? 0.9 : 0,
          transition: { delay: 0.3 },
        }}
        style={{ pathLength, opacity }}
      />
    </svg>
  );
};

export default Checkmark;
