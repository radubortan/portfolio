import classes from "./hero.module.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 9,
      duration: 1,
      staggerChildre: 0.3,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

const Hero = () => {
  return (
    <div className={classes.container}>
      <motion.div
        className={classes.textWrapper}
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2 variants={textVariants}>RADU BORTAN</motion.h2>
        <motion.h1 variants={textVariants}>Full-Stack engineer</motion.h1>
        <motion.div className={classes.buttons} variants={textVariants}>
          <motion.button
            variants={textVariants}
            whileHover={{ backgroundColor: "#663399" }}
          >
            My Experience
          </motion.button>
          <motion.button
            variants={textVariants}
            whileHover={{ backgroundColor: "#663399" }}
          >
            Contact Me
          </motion.button>
        </motion.div>
        <motion.img
          animate="scrollButton"
          src="/scroll.png"
          alt="Scroll animation"
          variants={textVariants}
        />
      </motion.div>
      <motion.div
        className={classes.slidingTextContainer}
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full-Stack engineer
      </motion.div>
    </div>
  );
};

export default Hero;
