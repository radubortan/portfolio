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
        {/* <motion.h2 variants={variants.textVariants}>RADU BORTAN</motion.h2> */}
        <motion.h1 variants={variants.textVariants}>
          Full-Stack <br />
          <span>Software Engineer</span>
        </motion.h1>
        <motion.div className={classes.buttons}>
          <motion.a
            href="#Experience"
            variants={variants.textVariants}
            whileHover="whileHover"
          >
            My Experience
          </motion.a>
          <motion.a
            href="#Contact"
            variants={variants.textVariants}
            whileHover="whileHover"
          >
            Get In Touch
          </motion.a>
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
        Full-Stack Software Engineer
      </motion.div>
    </div>
  );
};

export default Hero;
