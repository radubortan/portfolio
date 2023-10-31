import Sidebar from "../sidebar/Sidebar";
import classes from "./navbar.module.scss";
import { motion } from "framer-motion";
import * as variants from "./navbar.variants";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <Sidebar />
      <div className={classes.wrapper}>
        <motion.span
          variants={variants.nameVariants}
          initial="initial"
          animate="animate"
        >
          Radu Bortan
        </motion.span>
        <motion.a
          href="https://www.linkedin.com/in/radu-bortan/"
          target="_blank"
          variants={variants.test}
          whileHover="whileHover"
        >
          <img src="/linkedin.svg" alt="LinkedIn logo"></img>
        </motion.a>
      </div>
    </div>
  );
};

export default Navbar;
