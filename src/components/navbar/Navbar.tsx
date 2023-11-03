import Sidebar from "../sidebar/Sidebar";
import classes from "./navbar.module.scss";
import { motion } from "framer-motion";
import * as variants from "./navbar.variants";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <Sidebar />
      <div className={classes.wrapper}>
        <div className={classes.alignmentDiv} />
        <motion.span
          variants={variants.nameVariants}
          initial="initial"
          animate="animate"
        >
          Radu Bortan
        </motion.span>

        <a href="https://www.linkedin.com/in/radu-bortan/" target="_blank">
          <motion.img
            variants={variants.linkedinVariants}
            whileHover="whileHover"
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
            src="/linkedin.svg"
            alt="LinkedIn logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
