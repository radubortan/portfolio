import { motion } from "framer-motion";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import * as variants from "./contactForm.variants";
import classes from "./contactForm.module.scss";
import SubmitButton from "./submitButton/SubmitButton";
import useScreenSize from "../../../hooks/useScreenSize";
import { useTranslation } from "react-i18next";

export enum FormState {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

const ContactForm = () => {
  const { t } = useTranslation();

  const screenSize = useScreenSize();
  const isMobileDevice = screenSize.width <= 768;
  const isShortDevice = screenSize.height <= 730;

  const formRef = useRef<HTMLFormElement>(null);

  const [formState, setFormState] = useState<FormState>(FormState.IDLE);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState(FormState.LOADING);

    try {
      await emailjs.sendForm(
        "service_5zlqqxm",
        "template_nhpgnvq",
        formRef.current!,
        "1JBZTvX7jz72hdRc4"
      );
      setFormState(FormState.SUCCESS);
      formRef.current!.reset();
    } catch (e) {
      setFormState(FormState.ERROR);
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
      viewport={{ once: isMobileDevice }}
    >
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        autoComplete="off"
        variants={isMobileDevice || isShortDevice ? {} : variants.formVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <input type="text" placeholder={t("NAME")} required name="name" />
        <input type="email" placeholder="Email" required name="email" />
        <textarea name="message" placeholder="Message" rows={8} />
        <SubmitButton formState={formState} />
      </motion.form>
    </motion.div>
  );
};

export default ContactForm;
