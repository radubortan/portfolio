import classes from "./hero.module.scss";
import { motion } from "framer-motion";
import * as variants from "./hero.variants";

const Hero = () => {
  return (
    <div className={classes.container}>
      <motion.div
        className={classes.textWrapper}
        variants={variants.wrapperVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h2 variants={variants.textVariants}>RADU BORTAN</motion.h2>
        <motion.h1 variants={variants.textVariants}>
          Full-Stack Engineer
        </motion.h1>
        <motion.div className={classes.buttons}>
          <motion.button
            variants={variants.textVariants}
            whileHover={{ backgroundColor: "#663399" }}
          >
            My Experience
          </motion.button>
          <motion.button
            variants={variants.textVariants}
            whileHover={{ backgroundColor: "#663399" }}
          >
            Contact Me
          </motion.button>
        </motion.div>
        <motion.div variants={variants.textVariants}>
          <motion.img
            variants={variants.scrollVariant}
            src="/scroll.png"
            alt="Scroll animation"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className={classes.slidingTextContainer}
        variants={variants.sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full-Stack Engineer
      </motion.div>
    </div>
  );
};

export default Hero;
