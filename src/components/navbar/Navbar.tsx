import Sidebar from "../sidebar/Sidebar";
import classes from "./navbar.module.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <Sidebar />
      <div className={classes.wrapper}>
        <motion.span
          initial={{ opacity: 0.5, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
        >
          Radu Bortan
        </motion.span>
        <motion.a
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
          href="https://www.linkedin.com/in/radu-bortan/"
          target="_blank"
        >
          <img src="/linkedin.svg" alt="LinkedIn logo"></img>
        </motion.a>
      </div>
    </div>
  );
};

export default Navbar;
