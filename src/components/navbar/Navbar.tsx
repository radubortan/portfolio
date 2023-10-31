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
        <div className={classes.links}>
          <a href="https://www.linkedin.com/in/radu-bortan/" target="_blank">
            <img src="/linkedin.svg" alt="LinkedIn logo"></img>
          </a>
          <a href="https://github.com/radubortan" target="_blank">
            <img src="/github.svg" alt="GitHub logo"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
