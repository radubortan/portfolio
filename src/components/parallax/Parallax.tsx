import { useRef } from "react";
import classes from "./parallax.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "450%"]);
  const yPlantes = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yStars = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div className={classes.parallax} ref={ref}>
      <motion.h1 style={{ y: yText }}>Technologies</motion.h1>
      <motion.div className={classes.mountains}></motion.div>
      <motion.div
        style={{ y: yPlantes }}
        className={classes.planets}
      ></motion.div>
      <motion.div style={{ x: yStars }} className={classes.stars}></motion.div>
    </div>
  );
};

export default Parallax;
