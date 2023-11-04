import classes from "./studies.module.scss";
import { motion } from "framer-motion";
import * as variants from "./studies.variants";

const Studies = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <motion.div
          className={classes.imageContainer}
          whileInView="whileInView"
          initial={{ ...variants.schoolVariants.initial, y: 100 }}
          variants={variants.schoolVariants}
          transition={{ opacity: { duration: 1 } }}
        >
          <img src="polytech.png" alt="Polytech logo" />
        </motion.div>

        <motion.div
          variants={variants.textVariants}
          initial={{ ...variants.textVariants.initial, x: -400 }}
          whileInView="whileInView"
          className={classes.headers}
        >
          <h1>Engineering Degree in Computer Science</h1>
          <h2>Polytech Montpellier</h2>
          <h3>2018 - 2023</h3>
        </motion.div>

        <div className={classes.divider}>
          <motion.span
            variants={variants.dividerVariants}
            initial="initial"
            whileInView="whileInView"
          />
        </div>

        <motion.div
          className={classes.text}
          variants={variants.textVariants}
          initial={{ ...variants.textVariants.initial, x: 400 }}
          whileInView="whileInView"
        >
          <p>
            This degree has allowed me to explore the different parts of
            computer science, such as web development, mobile app development,
            software engineering, databases and IoT.
          </p>
        </motion.div>

        <motion.a
          whileTap="whileTap"
          whileHover="whileHover"
          whileInView="whileInView"
          initial={{ ...variants.schoolVariants.initial, y: -100 }}
          variants={variants.schoolVariants}
          transition={{ scale: { duration: 0.2 }, opacity: { duration: 1 } }}
          href="https://www.polytech.umontpellier.fr/formation/cycle-ingenieur/informatique-et-gestion"
          target="_blank"
        >
          School Website
        </motion.a>
      </div>
    </div>
  );
};

export default Studies;
