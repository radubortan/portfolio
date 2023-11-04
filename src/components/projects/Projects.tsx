import classes from "./projects.module.scss";
import { motion, useInView, AnimatePresence } from "framer-motion";
import * as variants from "./projects.variants";
import { useRef, useState } from "react";
import ProjectModal from "./projectModal/ProjectModal";
import { projects } from "./projects.data";
import { Project } from "./projects.data";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);

  // const [currentLayoutId, setCurrentLayoutId] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project>();

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
      <AnimatePresence mode="wait">
        {isModalOpen && (
          <ProjectModal
            // layoutId={currentLayoutId}
            project={selectedProject}
            handleClose={() => {
              setIsModalOpen(false);
            }}
          />
          // <div
          //   style={{
          //     position: "absolute",
          //     top: 0,
          //     left: 0,
          //     height: "100%",
          //     width: "100%",
          //     backgroundColor: "#00000055",
          //     display: "flex",
          //     alignItems: "center",
          //     justifyContent: "center",
          //   }}
          //   onClick={() => setIsModalOpen(false)}
          // >
          //   <motion.div
          //     layoutId={currentLayoutId}
          //     style={{
          //       width: "50vw",
          //       height: "400px",
          //       backgroundColor: "white",
          //       borderRadius: "20px",
          //       userSelect: "none",
          //       color: "black",
          //       fontSize: "30px",
          //     }}
          //   >
          //     This is an example
          //   </motion.div>
          // </div>
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
          <motion.a
            href="#Contact"
            variants={variants.textVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
          >
            GET IN TOUCH
          </motion.a>
        </div>
      </motion.div>

      <motion.div
        className={classes.listContainer}
        variants={variants.textVariants}
      >
        {projects.map((project, index) => {
          return (
            <motion.div
              key={project.title}
              className={classes.box}
              // style={{ borderRadius: "20px" }}
              whileHover={{
                backgroundColor: "#d3d3d3",
                color: "#000000",
              }}
              onClick={() => {
                setIsModalOpen(true);
                // setCurrentLayoutId(index.toString());
                setSelectedProject(project);
              }}
              // layoutId={index.toString()}
            >
              <h2>{project.title}</h2>
              <p>{project.longDescription}</p>
            </motion.div>
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
