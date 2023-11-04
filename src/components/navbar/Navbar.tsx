import Sidebar from "../sidebar/Sidebar";
import classes from "./navbar.module.scss";
import { motion } from "framer-motion";
import * as variants from "./navbar.variants";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <Sidebar />
      <motion.p
        variants={variants.nameVariants}
        initial="initial"
        animate="animate"
      >
        Radu Bortan
      </motion.p>
    </div>
  );
};

export default Navbar;
