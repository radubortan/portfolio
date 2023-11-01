import classes from "./projects.module.scss";
import { motion, useInView } from "framer-motion";
import * as variants from "./projects.variants";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className={classes.container}
      variants={variants.containerVariants}
      initial="initial"
      animate={isInView && "animate"}
      ref={ref}
    >
      <div className={classes.textContainer}>
        <motion.p variants={variants.smallTextVariants}>
          I have worked on <br />
          different projects
        </motion.p>
        <motion.hr variants={variants.lineVariants} />
      </div>

      <motion.div className={classes.titleContainer}>
        <div className={classes.title}>
          <motion.img
            src="/coding.webp"
            alt="Computer screen"
            variants={variants.textVariants}
          />
          <motion.h1 variants={variants.textVariants}>
            <motion.span
              whileHover={{
                color: "#ffa500",
                transition: {
                  duration: 0.3,
                },
              }}
            >
              Projects
            </motion.span>{" "}
            I've
          </motion.h1>
        </div>
        <div className={classes.title}>
          <motion.h1 variants={variants.textVariants}>Worked On</motion.h1>
          <motion.button
            variants={variants.textVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
          >
            GET IN TOUCH
          </motion.button>
        </div>
      </motion.div>

      <motion.div
        className={classes.listContainer}
        variants={variants.textVariants}
      >
        <motion.div
          className={classes.box}
          whileHover={{
            backgroundColor: "#d3d3d3",
            color: "#000000",
          }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            sed nam, illum minus, veritatis a quod soluta quasi autem nostrum
            consectetur voluptas reprehenderit earum quo amet. Ea exercitationem
            reiciendis minus?
          </p>
        </motion.div>
        <motion.div
          className={classes.box}
          whileHover={{
            backgroundColor: "#d3d3d3",
            color: "#000000",
          }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            sed nam, illum minus, veritatis a quod soluta quasi autem nostrum
            consectetur voluptas reprehenderit earum quo amet. Ea exercitationem
            reiciendis minus?
          </p>
        </motion.div>
        <motion.div
          className={classes.box}
          whileHover={{
            backgroundColor: "#d3d3d3",
            color: "#000000",
          }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            sed nam, illum minus, veritatis a quod soluta quasi autem nostrum
            consectetur voluptas reprehenderit earum quo amet. Ea exercitationem
            reiciendis minus?
          </p>
        </motion.div>
        <motion.div
          className={classes.box}
          whileHover={{
            backgroundColor: "#d3d3d3",
            color: "#000000",
          }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            sed nam, illum minus, veritatis a quod soluta quasi autem nostrum
            consectetur voluptas reprehenderit earum quo amet. Ea exercitationem
            reiciendis minus?
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
