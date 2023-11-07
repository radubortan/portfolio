import { useRef } from "react";
import classes from "./parallax.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import useScreenSize from "../../hooks/useScreenSize";

const Parallax = ({ type }: { type: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "end start"],
  });

  const screenSize = useScreenSize();
  const isMobileDevice = screenSize.width <= 768;

  const yText = useTransform(scrollYProgress, [0, 1], ["-300%", "300%"]);
  const yPlanets = useTransform(
    scrollYProgress,
    [0, 1],
    [isMobileDevice ? "-40%" : "-20%", isMobileDevice ? "10%" : "30%"]
  );
  const yStars = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section
      id={type === "skills" ? "skills" : "studies"}
      className={classes.container}
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
          y: yPlanets,
          backgroundImage: `url(${
            type === "skills" ? "planets.png" : "sun.png"
          })`,
        }}
      />
      <motion.div style={{ x: yStars }} className={classes.stars} />
    </section>
  );
};

export default Parallax;
