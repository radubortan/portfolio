import classes from "./hero.module.scss";
import { motion } from "framer-motion";
import * as variants from "./hero.variants";
import { Trans, useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>
      <motion.div
        className={classes.textWrapper}
        variants={variants.wrapperVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2 variants={variants.textVariants}>RADU BORTAN</motion.h2>
        <motion.h1 variants={variants.textVariants}>
          <Trans i18nKey="FULL_STACK_ENGINEER_HTML">
            <span></span>
          </Trans>
        </motion.h1>
        <div className={classes.buttons}>
          <motion.a
            whileHover={variants.buttonVariants.whileHover}
            variants={variants.textVariants}
            href="#experience"
          >
            {t("MY_EXPERIENCE")}
          </motion.a>
          <motion.a
            href="#contact"
            variants={variants.textVariants}
            whileHover={variants.buttonVariants.whileHover}
          >
            {t("GET_IN_TOUCH")}
          </motion.a>
        </div>
        <motion.div variants={variants.textVariants}>
          <motion.img
            variants={variants.scrollVariant}
            src="scroll.png"
            alt="Scroll animation"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className={classes.slidingTextContainer}
        variants={variants.sliderVariants}
        initial="initial"
        animate="animate"
      >
        {t("FULL_STACK_ENGINEER")}
      </motion.div>
    </div>
  );
};

export default Hero;
