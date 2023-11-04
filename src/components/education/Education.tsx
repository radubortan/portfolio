import classes from "./education.module.scss";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <motion.div
          className={classes.imageContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ opacity: { duration: 1 } }}
        >
          <img src="polytech.png" alt="" />
        </motion.div>

        <motion.div
          initial={{ x: -400, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 80,
              damping: 20,
              opacity: {
                duration: 1,
              },
            },
          }}
          className={classes.headers}
        >
          <h1>Engineering Degree in Computer Science</h1>
          <h2>Polytech Montpellier</h2>
          <h3>2018 - 2023</h3>
        </motion.div>

        <div className={classes.divider}>
          <motion.span
            initial={{ height: 0 }}
            whileInView={{
              height: "100%",
              transition: { type: "spring", stiffness: 30, duration: 1 },
            }}
          />
        </div>

        <motion.div
          className={classes.text}
          initial={{ opacity: 0, x: 400 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              opacity: {
                duration: 1,
              },
              type: "spring",
              stiffness: 80,
              damping: 20,
            },
          }}
        >
          <p>
            This degree has allowed me to explore the different parts of
            computer science, such as web development, mobile app development,
            software engineering, databases and IoT.
          </p>
        </motion.div>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
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

export default Education;
