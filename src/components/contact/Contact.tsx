import classes from "./contact.module.scss";
import { motion } from "framer-motion";
import * as variants from "./contact.variants.ts";
import PhoneSvg from "./phoneSvg/PhoneSvg.tsx";
import ContactForm from "./contactForm/ContactForm.tsx";
import classNames from "classnames";

const Contact = () => {
  return (
    <motion.div className={classes.container}>
      <motion.div
        className={classes.textContainer}
        variants={variants.contactVariants}
        initial="initial"
        whileInView="animate"
      >
        <motion.h1 variants={variants.contactVariants}>
          Let's work together
        </motion.h1>
        <motion.div
          className={classes.item}
          variants={variants.contactVariants}
        >
          <h2>Mail</h2>
          <p>bortanradu@gmail.com</p>
        </motion.div>
        <motion.div
          className={classes.item}
          variants={variants.contactVariants}
        >
          <h2>Address</h2>
          <p>Montpellier, France</p>
        </motion.div>
        <motion.div
          className={classNames(classes.item, classes.socialLinks)}
          variants={variants.contactVariants}
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
            href="/resume.pdf"
            download="Bortan Radu CV.pdf"
          >
            Resume
          </motion.a>
        </motion.div>
      </motion.div>

      <div className={classes.formContainer}>
        <PhoneSvg />
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contact;
