import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { ReactNode } from "react";
import classes from "./modal.module.scss";
import { modalVariants } from "./modal.variants";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  handleClose: () => void;
  children: ReactNode;
}

const Modal = ({ handleClose, children }: ModalProps) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className={classes.modal}
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.button
          initial={{ color: "#ffffff" }}
          whileHover={{
            backgroundColor: "#eeeeee",
          }}
          transition={{
            type: "",
            duration: 1,
          }}
          onClick={handleClose}
        >
          <AiOutlineClose size={20} className={classes.icon} />
        </motion.button>
        {children}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
