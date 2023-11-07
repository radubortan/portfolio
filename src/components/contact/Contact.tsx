import classes from "./contact.module.scss";
import { motion } from "framer-motion";
import * as variants from "./contact.variants.ts";
import PhoneSvg from "./phoneSvg/PhoneSvg.tsx";
import ContactForm from "./contactForm/ContactForm.tsx";
import useScreenSize from "../../hooks/useScreenSize.ts";

const Contact = () => {
  const screenSize = useScreenSize();
  const isMobileDevice = screenSize.width <= 768;

  return (
    <div className={classes.container}>
      <motion.div className={classes.content}>
        <motion.div
          className={classes.textContainer}
          variants={
            isMobileDevice
              ? variants.contactVariantsMobile
              : variants.contactVariantsDesktop
          }
          initial="initial"
          whileInView="animate"
          viewport={{ once: isMobileDevice }}
        >
          <motion.h1
            variants={isMobileDevice ? {} : variants.contactVariantsDesktop}
          >
            Prenons contact
          </motion.h1>
          <motion.div
            className={classes.item}
            variants={isMobileDevice ? {} : variants.contactVariantsDesktop}
          >
            <h2>Email</h2>
            <p>bortanradu@gmail.com</p>
          </motion.div>
          <motion.div
            className={classes.item}
            variants={isMobileDevice ? {} : variants.contactVariantsDesktop}
          >
            <h2>Adresse</h2>
            <p>Montpellier, France</p>
          </motion.div>
          <motion.div
            className={classes.socialLinks}
            variants={isMobileDevice ? {} : variants.contactVariantsDesktop}
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
              href="resume.pdf"
              download="Bortan Radu CV.pdf"
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
    </div>
  );
};

export default Contact;
