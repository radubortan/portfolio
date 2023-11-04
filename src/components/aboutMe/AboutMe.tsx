import classes from "./aboutMe.module.scss";
import { motion } from "framer-motion";

const containerVariants = {
  whileInView: { transition: { staggerChildren: 0.05 } },
};

const textVariants = {
  initial: { y: 120, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { y: { type: "spring", stiffness: 100, damping: 20 } },
  },
};

const AboutMe = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      whileInView="whileInView"
      className={classes.container}
      viewport={{ margin: "-100px" }}
    >
      <div className={classes.headers}>
        <motion.h1 variants={textVariants}>Hi, my name is Radu!</motion.h1>
        <motion.h2 variants={textVariants}>
          Full-Stack Software Engineer
        </motion.h2>
      </div>

      <div className={classes.smallTextContainer}>
        <motion.p variants={textVariants}>
          I love collaborating on projects with real world impact. I'm
          particulartly fond of front-end development and UI/UX.
        </motion.p>
        <motion.p variants={textVariants}>
          I am currently looking for a full-stack position. If you have an
          interesting project, don't desitate to get in touch!
        </motion.p>
        <motion.p variants={textVariants}>
          Out of the office, I like following motorsport, looking at the latest
          gadgets, and playing with my cat.
        </motion.p>
      </div>
      <motion.img variants={textVariants} src="cat.png" alt="ginger cat icon" />
    </motion.div>
  );
};

export default AboutMe;
