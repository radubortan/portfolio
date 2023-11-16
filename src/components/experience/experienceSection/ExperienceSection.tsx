import classes from "./experienceSection.module.scss";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Experience } from "../experiences.data";
import useScreenSize from "../../../hooks/useScreenSize";
import { useTranslation } from "react-i18next";

const ExperienceSection = ({ experience }: { experience: Experience }) => {
  const { t } = useTranslation();

  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  const screenSize = useScreenSize();
  const isMobileDevice = screenSize.width <= 768;
  const isShortDevice = screenSize.height <= 700;

  return (
    <section key={experience.id} className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.imageContainer} ref={ref}>
          <img src={experience.image} alt={experience.imageAlt} />
        </div>
        <motion.div
          className={classes.textContainer}
          style={{ y: isMobileDevice || isShortDevice ? "" : y }}
        >
          <div className={classes.headers}>
            <h2>{t(experience.title)}</h2>
            <h3>{experience.company}</h3>
            <p>{experience.dates}</p>
          </div>

          <div className={classes.descriptions}>
            <p>{t(experience.description)}</p>
            {experience.description2 && <p>{t(experience.description2)}</p>}
          </div>

          <div className={classes.skills}>
            {experience.skills.map((skill) => {
              return <span key={skill}>{skill}</span>;
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
