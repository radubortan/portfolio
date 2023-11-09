import classes from "./contact.module.scss";
import { motion } from "framer-motion";
import * as variants from "./contact.variants.ts";
import PhoneSvg from "./phoneSvg/PhoneSvg.tsx";
import ContactForm from "./contactForm/ContactForm.tsx";
import useScreenSize from "../../hooks/useScreenSize.ts";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();

  const screenSize = useScreenSize();
  const isMobileDevice = screenSize.width <= 768;
  const isTablet = screenSize.width > 768 && screenSize.width <= 1024;

  return (
    <section id="contact" className={classes.container}>
      <motion.div className={classes.content}>
        <motion.div
          className={classes.textContainer}
          variants={
            isMobileDevice || isTablet
              ? variants.contactVariantsMobile
              : variants.contactVariantsDesktop
          }
          initial="initial"
          whileInView="animate"
          viewport={{ once: isMobileDevice }}
        >
          <motion.h1
            variants={
              isMobileDevice || isTablet ? {} : variants.contactVariantsDesktop
            }
          >
            {t("LETS_GET_IN_TOUCH")}
          </motion.h1>
          <motion.div
            className={classes.item}
            variants={
              isMobileDevice || isTablet ? {} : variants.contactVariantsDesktop
            }
          >
            <h2>Email</h2>
            <p>bortanradu@gmail.com</p>
          </motion.div>
          <motion.div
            className={classes.item}
            variants={
              isMobileDevice || isTablet ? {} : variants.contactVariantsDesktop
            }
          >
            <h2>{t("ADDRESS")}</h2>
            <p>Montpellier, France</p>
          </motion.div>
          <motion.div
            className={classes.socialLinks}
            variants={
              isMobileDevice || isTablet ? {} : variants.contactVariantsDesktop
            }
          >
            <motion.a
              variants={variants.buttonVariants}
              whileHover="whileHover"
              href="https://www.linkedin.com/in/radu-bortan/"
              target="_blank"
            >
              LinkedIn
            </motion.a>

            <motion.a
              variants={variants.buttonVariants}
              whileHover="whileHover"
              href={
                i18n.language === "fr-FR" ? "cv_francais.pdf" : "cv_english.pdf"
              }
              download={
                i18n.language === "fr-FR"
                  ? "Bortan Radu CV Francais.pdf"
                  : "Bortan Radu CV English.pdf"
              }
            >
              CV
            </motion.a>
          </motion.div>
        </motion.div>

        <div className={classes.formContainer}>
          <PhoneSvg />
          <ContactForm />
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
