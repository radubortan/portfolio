import classes from "./projects.module.scss";
import { motion, useInView, AnimatePresence } from "framer-motion";
import * as variants from "./projects.variants";
import { useRef, useState } from "react";
import ProjectModal from "./ProjectModal";
import { projects } from "./projects.data";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);

  const [currentId, setCurrentId] = useState<string>("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className={classes.container}
      variants={variants.containerVariants}
      initial="initial"
      animate={isInView && "animate"}
      ref={ref}
    >
      {/* <AnimatePresence initial={false} mode="wait">
        {isModalOpen && (
          // <ProjectModal
          //   project="temp"
          //   handleClose={() => setIsModalOpen((prev) => !prev)}
          // />
        )}
      </AnimatePresence> */}

      <AnimatePresence initial={false} mode="wait">
        {isModalOpen && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              backgroundColor: "#00000055",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => setIsModalOpen((prev) => !prev)}
          >
            <motion.div
              layoutId={currentId}
              style={{
                width: "50vw",
                height: "400px",
                backgroundColor: "white",
                borderRadius: "20px",
                userSelect: "none",
              }}
            ></motion.div>
          </div>
        )}
      </AnimatePresence>

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
        {projects.map((project, index) => {
          return (
            <>
              <motion.div
                className={classes.box}
                style={{ borderRadius: "20px" }}
                // whileHover={{
                //   backgroundColor: "#d3d3d3",
                //   color: "#000000",
                // }}
                onClick={() => {
                  setIsModalOpen((prev) => !prev);
                  setCurrentId(index.toString());
                }}
                layoutId={index.toString()}
              >
                <h2>{project.title}</h2>
                <p>{project.longDescription}</p>
              </motion.div>
            </>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Projects;

/*  
- add hover effect
- create backdrop component
- create modal
*/
