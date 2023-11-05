import { useRef } from "react";
import classes from "./parallax.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }: { type: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["-200%", "200%"]);
  const yPlantes = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);
  const yStars = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <div
      className={classes.parallax}
      ref={ref}
      style={{
        background:
          type === "skills"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "skills" ? "Compétences" : "Etudes"}
      </motion.h1>
      <motion.div className={classes.mountains} />
      <motion.div
        className={classes.planets}
        style={{
          y: yPlantes,
          backgroundImage: `url(${
            type === "skills" ? "/planets.png" : "/sun.png"
          })`,
        }}
      />
      <motion.div style={{ x: yStars }} className={classes.stars} />
    </div>
  );
};

export default Parallax;
