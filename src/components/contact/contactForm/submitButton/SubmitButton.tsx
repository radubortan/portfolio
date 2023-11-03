import { motion, AnimatePresence } from "framer-motion";
import Cross from "./cross/Cross";
import Checkmark from "./checkmark/Checkmark";
import Loader from "./loader/Loader";
import classes from "./submitButton.module.scss";

export const buttonVariants = {
  whileHover: {
    scale: 1.02,
  },
  whileTap: { scale: 1 },
};

interface SubmitButtonProps {
  isSent: boolean;
  isSending: boolean;
  isError: boolean;
}

const SubmitButton = ({ isSent, isSending, isError }: SubmitButtonProps) => {
  const isInitial = !isSending && !isSent && !isError;

  return (
    <motion.button
      className={classes.button}
      variants={buttonVariants}
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
  );
};

export default SubmitButton;
