import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { ReactNode } from "react";
import classes from "./modal.module.scss";
import { modalVariants } from "./modal.variants";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  handleClose: () => void;
  children: ReactNode;
  // layoutId: string;
}

const Modal = ({ handleClose, children }: ModalProps) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        // layoutId={layoutId}
        className={classes.modal}
        onClick={(e) => e.stopPropagation()}
        // style={{ borderRadius: "20px" }}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.button onClick={handleClose}>
          <AiOutlineClose size={20} className={classes.icon} />
        </motion.button>
        <div className={classes.children}>{children}</div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
