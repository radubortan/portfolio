import classes from "./studies.module.scss";
import { motion } from "framer-motion";
import * as variants from "./studies.variants";
import useScreenSize from "../../hooks/useScreenSize";

const Studies = () => {
  const screenSize = useScreenSize();
  const isMobileDevice = screenSize.width <= 768;
  const isTablet = screenSize.width > 768 && screenSize.width <= 1024;

  return (
    <section className={classes.container}>
      <div className={classes.content}>
        <motion.div
          className={classes.imageContainer}
          whileInView="whileInView"
          initial={
            isMobileDevice
              ? { ...variants.schoolVariants.initial, x: 100 }
              : { ...variants.schoolVariants.initial, y: 100 }
          }
          variants={variants.schoolVariants}
          transition={{ opacity: { duration: 1 } }}
          viewport={{ once: isMobileDevice }}
        >
          <img src="polytech.png" alt="Polytech logo" />
        </motion.div>

        <motion.div
          variants={variants.textVariants}
          initial={
            isMobileDevice
              ? { ...variants.textVariants.initial, x: -100 }
              : isTablet
              ? { ...variants.textVariants.initial, x: -200 }
              : { ...variants.textVariants.initial, x: -400 }
          }
          whileInView="whileInView"
          className={classes.headers}
          viewport={{ once: isMobileDevice }}
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
            variants={
              isMobileDevice
                ? variants.dividerVariantsMobile
                : variants.dividerVariantsDesktop
            }
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: isMobileDevice }}
          />
        </div>

        <motion.div
          className={classes.text}
          variants={variants.textVariants}
          initial={
            isMobileDevice
              ? { ...variants.textVariants.initial, x: 100 }
              : isTablet
              ? { ...variants.textVariants.initial, x: 200 }
              : { ...variants.textVariants.initial, x: 400 }
          }
          whileInView="whileInView"
          viewport={{ once: isMobileDevice }}
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
          initial={
            isMobileDevice
              ? { ...variants.schoolVariants.initial, x: -100 }
              : { ...variants.schoolVariants.initial, y: -100 }
          }
          variants={variants.schoolVariants}
          transition={{ scale: { duration: 0.2 }, opacity: { duration: 1 } }}
          href="https://www.polytech.umontpellier.fr/formation/cycle-ingenieur/informatique-et-gestion"
          target="_blank"
          viewport={{ once: isMobileDevice }}
        >
          Site école
        </motion.a>
      </div>
    </section>
  );
};

export default Studies;
