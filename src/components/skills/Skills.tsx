import classes from "./skills.module.scss";
import { motion } from "framer-motion";
import * as variants from "./skills.variants";
import useScreenSize from "../../hooks/useScreenSize";
import { domains } from "./skills.data";

const Skills = () => {
  const screenSize = useScreenSize();
  const isMobileDevice = screenSize.width <= 768;

  return (
    <section className={classes.container}>
      <div className={classes.content}>
        {domains.map((domain) => {
          return (
            <motion.div
              key={domain.title}
              className={classes.division}
              variants={
                isMobileDevice
                  ? variants.divisionVariantsMobile
                  : variants.divisionVariantsDesktop
              }
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: isMobileDevice }}
            >
              <motion.div
                className={classes.imageContainer}
                variants={
                  isMobileDevice ? {} : variants.divisionElementVariants
                }
              >
                <img src={domain.image} alt={domain.imageAlt} />
              </motion.div>
              <div className={classes.h1Container}>
                <motion.h1
                  variants={
                    isMobileDevice ? {} : variants.divisionElementVariants
                  }
                >
                  {domain.title}
                </motion.h1>
              </div>
              <div className={classes.list}>
                {domain.skills.map((skill) => {
                  return (
                    <motion.p
                      key={skill}
                      variants={
                        isMobileDevice ? {} : variants.divisionElementVariants
                      }
                    >
                      {skill}
                    </motion.p>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
