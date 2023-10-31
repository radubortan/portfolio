import { useState } from "react";
import Links from "./links/Links";
import classes from "./sidebar.module.scss";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: "circle(2160px at 50px 50px)",
      transition: {
        type: "tween",
        duration: 1,
        delay: 0.1,
      },
    },
    closed: {
      clipPath: "circle(0px at 50px 50px)",
      transition: {
        type: "tween",
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div className={classes.sidebar} animate={open ? "open" : "closed"}>
      <motion.div className={classes.background} variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      />
    </motion.div>
  );
};

export default Sidebar;
