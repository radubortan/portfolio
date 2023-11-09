import classes from "./studies.module.scss";
import { motion } from "framer-motion";
import * as variants from "./studies.variants";
import useScreenSize from "../../hooks/useScreenSize";
import { Trans, useTranslation } from "react-i18next";

const Studies = () => {
  const { t } = useTranslation();

  const screenSize = useScreenSize();
  const isMobileDevice = screenSize.width <= 768;
  const isTablet = screenSize.width > 768 && screenSize.width <= 1024;
  const isShortDevice = screenSize.height <= 730;

  const showAnimationOnce = isMobileDevice || isShortDevice;

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
          viewport={{ once: showAnimationOnce }}
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
          viewport={{ once: showAnimationOnce }}
        >
          <h1>
            <Trans i18nKey="ENGINEERING_DEGREE">
              <span></span>
            </Trans>
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
            viewport={{ once: showAnimationOnce }}
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
          viewport={{ once: showAnimationOnce }}
        >
          <p>{t("STUDIES_1")}</p>
          <p>{t("STUDIES_2")}</p>
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
          viewport={{ once: showAnimationOnce }}
        >
          {t("SCHOOL_WEBSITE")}
        </motion.a>
      </div>
    </section>
  );
};

export default Studies;
