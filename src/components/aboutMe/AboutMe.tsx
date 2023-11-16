import classes from "./aboutMe.module.scss";
import { motion } from "framer-motion";
import useScreenSize from "../../hooks/useScreenSize";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const screenSize = useScreenSize();
  const isMobileDevice = screenSize.width <= 768;
  const isShortDevice = screenSize.height <= 700;

  return (
    <motion.section
      variants={containerVariants}
      initial="initial"
      whileInView="whileInView"
      className={classes.container}
      viewport={{
        margin: !isMobileDevice ? "-100px" : "",
        once: isMobileDevice || isShortDevice,
      }}
      id="aboutMe"
    >
      <div className={classes.headers}>
        <motion.h1 variants={textVariants}>{t("HELLO_MY_NAME")}</motion.h1>
        <motion.h2 variants={textVariants}>
          {" "}
          {t("FULL_STACK_ENGINEER")}
        </motion.h2>
      </div>

      <div className={classes.smallTextContainer}>
        <motion.p variants={textVariants}>{t("ABOUT_ME_1")}</motion.p>
        <motion.p variants={textVariants}>{t("ABOUT_ME_2")}</motion.p>
        <motion.p variants={textVariants}>{t("ABOUT_ME_3")}</motion.p>
      </div>
      <motion.img variants={textVariants} src="cat.png" alt="ginger cat icon" />
    </motion.section>
  );
};

export default AboutMe;
