import classes from "./contact.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import * as variants from "./contact.variants.ts";
import { useState } from "react";
import Checkmark from "./checkmark/Checkmark.tsx";
import Loader from "./loader/Loader.tsx";
import PhoneSvg from "./phoneSvg/PhoneSvg.tsx";

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  return (
    <motion.div
      className={classes.container}
      variants={variants.contactVariants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        className={classes.textContainer}
        variants={variants.contactVariants}
      >
        <motion.h1 variants={variants.contactVariants}>
          Let's work together
        </motion.h1>
        <motion.div
          className={classes.item}
          variants={variants.contactVariants}
        >
          <h2>Mail</h2>
          <button
            onClick={() => {
              setIsSending(true);

              setTimeout(() => {
                setIsSending(false);
                setIsSent(true);
              }, 3000);
            }}
          >
            click
          </button>
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
          className={classes.item}
          variants={variants.contactVariants}
        >
          <h2>Phone</h2>
          <p>(+33) 6 03 51 52 78</p>
        </motion.div>
      </motion.div>

      <div className={classes.formContainer}>
        <PhoneSvg />
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { delay: 4, duration: 1 } }}
        >
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" rows={8} />
          <button>
            <AnimatePresence mode="wait">
              {!isSent && !isSending && (
                <motion.p
                  animate={isSent && { opacity: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                >
                  Send
                </motion.p>
              )}
              {!isSent && isSending && <Loader />}
            </AnimatePresence>

            {isSent && !isSending && <Checkmark />}
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
