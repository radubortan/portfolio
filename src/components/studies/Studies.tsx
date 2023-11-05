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
          <h1>
            Diplôme d'Ingénieur <br />
            en Informatique
          </h1>
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
            Mes études m'ont permis de découvrir les différentes facettes de
            l'informatique, comme le développement web, l'IoT, le génie logiciel
            ou les bases de données.
          </p>
          <p>
            Cette vision globale m'a doté d'une grande flexibilité pour
            m'adapter aisément à divers projets.
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
          Site école
        </motion.a>
      </div>
    </div>
  );
};

export default Studies;
