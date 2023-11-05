import classes from "./skills.module.scss";
import { motion } from "framer-motion";
import * as variants from "./skills.variants";

const Skills = () => {
  return (
    <motion.div className={classes.container}>
      <div className={classes.content}>
        <motion.div
          className={classes.division}
          variants={variants.divisonVariants}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.div
            className={classes.imageContainer}
            variants={variants.divisionElementVariants}
          >
            <img src="frontend.png" alt="Front-end icon" />
          </motion.div>
          <div className={classes.h1Container}>
            <motion.h1 variants={variants.divisionElementVariants}>
              Front-End
            </motion.h1>
          </div>
          <div className={classes.list}>
            <motion.p variants={variants.divisionElementVariants}>
              React
            </motion.p>
            <motion.p variants={variants.divisionElementVariants}>
              Angular
            </motion.p>
            <motion.p variants={variants.divisionElementVariants}>
              VueJS
            </motion.p>
            <motion.p variants={variants.divisionElementVariants}>
              SCSS
            </motion.p>
            <motion.p variants={variants.divisionElementVariants}>
              Bootstrap
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className={classes.division}
          variants={variants.divisonVariants}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.div
            variants={variants.divisionElementVariants}
            className={classes.imageContainer}
          >
            <img src="backend.png" alt="Back-end icon" />
          </motion.div>
          <div className={classes.h1Container}>
            <motion.h1 variants={variants.divisionElementVariants}>
              Back-End
            </motion.h1>
          </div>
          <div className={classes.list}>
            <motion.p variants={variants.divisionElementVariants}>
              NodeJS
            </motion.p>
            <motion.p variants={variants.divisionElementVariants}>
              ExpressJS
            </motion.p>
            <motion.p variants={variants.divisionElementVariants}>
              Java
            </motion.p>
            <motion.p variants={variants.divisionElementVariants}>
              TypeScript
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className={classes.division}
          variants={variants.divisonVariants}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.div
            variants={variants.divisionElementVariants}
            className={classes.imageContainer}
          >
            <img src="database.png" alt="Database icon" />
          </motion.div>
          <div className={classes.h1Container}>
            <motion.h1 variants={variants.divisionElementVariants}>
              Bases de données
            </motion.h1>
          </div>

          <div className={classes.list}>
            <motion.p variants={variants.divisionElementVariants}>
              PostgreSQL
            </motion.p>
            <motion.p variants={variants.divisionElementVariants}>
              MongoDB
            </motion.p>
            <motion.p variants={variants.divisionElementVariants}>
              MySQL
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className={classes.division}
          variants={variants.divisonVariants}
          initial="initial"
          whileInView="whileInView"
        >
          <motion.div
            variants={variants.divisionElementVariants}
            className={classes.imageContainer}
          >
            <img src="tools.png" alt="Tools icon" />
          </motion.div>
          <div className={classes.h1Container}>
            <motion.h1 variants={variants.divisionElementVariants}>
              Outils
            </motion.h1>
          </div>
          <div className={classes.list}>
            <motion.p variants={variants.divisionElementVariants}>Git</motion.p>
            <motion.p variants={variants.divisionElementVariants}>
              Docker
            </motion.p>
            <motion.p variants={variants.divisionElementVariants}>
              Figma
            </motion.p>
            <motion.p variants={variants.divisionElementVariants}>
              Photoshop
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
