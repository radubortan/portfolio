import { useRef } from "react";
import classes from "./parallax.module.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import useScreenSize from "../../hooks/useScreenSize";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

const Parallax = ({ type }: { type: string }) => {
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "end start"],
  });

  const screenSize = useScreenSize();
  const isMobileDevice = screenSize.width <= 768;
  const isTablet = screenSize.width > 768 && screenSize.width <= 1024;

  const yText = useTransform(scrollYProgress, [0, 1], ["-300%", "300%"]);
  const yPlanets = useTransform(
    scrollYProgress,
    [0, 1],
    [
      isMobileDevice ? "-40%" : isTablet ? "-30%" : "-20%",
      isMobileDevice ? "0%" : isTablet ? "20%" : "30%",
    ]
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
            ? "linear-gradient(180deg, var(--medium-blue), var(--dark-blue))"
            : "linear-gradient(180deg, var(--medium-blue), var(--light-blue))",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "skills" ? t("SKILLS") : t("STUDIES")}
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
      <motion.div
        style={{ x: yStars }}
        className={classNames(
          classes.stars,
          type === "skills" && classes.skillsStars
        )}
      />
    </section>
  );
};

export default Parallax;
