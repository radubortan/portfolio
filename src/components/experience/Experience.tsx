import { useRef } from "react";
import classes from "./experience.module.scss";
import { experiences } from "./experiences.data";
import { motion, useScroll, useSpring } from "framer-motion";
import ExperienceSection from "./experienceSection/ExperienceSection";

const Experience = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div id="experience" className={classes.container} ref={ref}>
      <div className={classes.progress}>
        <h1>Expérience</h1>
        <motion.div style={{ scaleX }} className={classes.progressBar} />
      </div>

      {experiences.map((experience) => {
        return (
          <ExperienceSection experience={experience} key={experience.id} />
        );
      })}
    </div>
  );
};

export default Experience;
