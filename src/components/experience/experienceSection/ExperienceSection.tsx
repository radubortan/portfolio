import classes from "./experienceSection.module.scss";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Experience } from "../experiences.data";

const ExperienceSection = ({ experience }: { experience: Experience }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section key={experience.id} className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.imageContainer} ref={ref}>
          <img src={experience.image} alt={experience.imageAlt} />
        </div>
        <motion.div className={classes.textContainer} style={{ y }}>
          <h2>{experience.title}</h2>
          <h3>{experience.company}</h3>
          <p>{experience.description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
