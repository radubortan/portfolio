import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Cross from "../cross/Cross";
import Checkmark from "../checkmark/Checkmark";
import Loader from "../loader/Loader";
import * as variants from "./contactForm.variants";
import classes from "./contactForm.module.scss";

const ContactForm = () => {
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
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { opacity: { duration: 1 } },
      }}
    >
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        autoComplete="off"
        variants={variants.formVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <input type="text" placeholder="Name" required name="name" />
        <input type="email" placeholder="Email" required name="email" />
        <textarea name="message" placeholder="Message" rows={8} />
        <motion.button
          variants={variants.buttonVariants}
          whileHover="whileHover"
          whileTap="whileTap"
          transition={{ scale: { duration: 0.2 } }}
        >
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
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
