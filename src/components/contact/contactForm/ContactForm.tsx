import { motion } from "framer-motion";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import * as variants from "./contactForm.variants";
import classes from "./contactForm.module.scss";
import SubmitButton from "./submitButton/SubmitButton";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isError, setIsError] = useState(false);

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
        <SubmitButton isSent={isSent} isSending={isSending} isError={isError} />
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
