import classes from "./contact.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import * as variants from "./contact.variants.ts";
import { useState, useRef, FormEvent } from "react";
import Checkmark from "./checkmark/Checkmark.tsx";
import Loader from "./loader/Loader.tsx";
import PhoneSvg from "./phoneSvg/PhoneSvg.tsx";
import emailjs from "@emailjs/browser";
import Cross from "./cross/Cross.tsx";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);
  const isInitial = !isSending && !isSent && !isError;

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);
    try {
      await emailjs.sendForm(
        "service_5zlqqxm",
        "template_nhpgnvq",
        formRef.current!,
        "1JBZTvX7jz72hdRc4"
      );
      setIsSending(false);
      setIsSent(true);
    } catch (e) {
      setIsSending(false);
      setIsError(true);
    }
  };

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
          ref={formRef}
          onSubmit={sendEmail}
        >
          <input type="text" placeholder="Name" required name="name" />
          <input type="email" placeholder="Email" required name="email" />
          <textarea name="message" placeholder="Message" rows={8} />
          <button>
            <AnimatePresence mode="wait">
              {isInitial && (
                <motion.p
                  animate={isSent && { opacity: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.3 } }}
                >
                  Send
                </motion.p>
              )}
              {isSending && <Loader />}
            </AnimatePresence>

            {isSent && <Checkmark />}
            {isError && <Cross />}
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
