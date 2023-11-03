import { motion, AnimatePresence } from "framer-motion";
import Checkmark from "./checkmark/Checkmark";
import Loader from "./loader/Loader";
import classes from "./submitButton.module.scss";
import { FormState } from "../ContactForm";

export const buttonVariants = {
  whileHover: {
    scale: 1.02,
  },
  whileTap: { scale: 1 },
};

const SubmitButton = ({ formState }: { formState: FormState }) => {
  const isIdle = formState === FormState.IDLE;
  const isLoading = formState === FormState.LOADING;
  const isSuccess = formState === FormState.SUCCESS;
  const isError = formState === FormState.ERROR;

  const buttonAnimation =
    isIdle || isSuccess
      ? { backgroundColor: "#ffa500" }
      : isError && { backgroundColor: "#ff0000" };

  return (
    <motion.button
      className={classes.button}
      variants={buttonVariants}
      animate={buttonAnimation}
      whileHover="whileHover"
      whileTap="whileTap"
      transition={{ scale: { duration: 0.2 } }}
    >
      <AnimatePresence mode="wait">
        {isIdle && (
          <motion.p exit={{ opacity: 0, transition: { duration: 0.3 } }}>
            Send
          </motion.p>
        )}
        {isLoading && <Loader />}
      </AnimatePresence>

      {isSuccess && <Checkmark />}
      {isError && (
        <motion.p
          className={classes.errorMessage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          An error has occurred. Try again.
        </motion.p>
      )}
    </motion.button>
  );
};

export default SubmitButton;
