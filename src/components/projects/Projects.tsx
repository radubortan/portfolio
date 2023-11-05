import classes from "./projects.module.scss";
import { motion, useInView, AnimatePresence } from "framer-motion";
import * as variants from "./projects.variants";
import { useRef, useState } from "react";
import ProjectModal from "./projectModal/ProjectModal";
import { projects } from "./projects.data";
import { Project } from "./projects.data";

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);

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
            project={selectedProject}
            handleClose={() => {
              setIsModalOpen(false);
            }}
          />
        )}
      </AnimatePresence>

      <motion.div className={classes.titleContainer}>
        <motion.h1 variants={variants.textVariants}>
          Mes <span>Projets</span>
        </motion.h1>
      </motion.div>

      <motion.div
        className={classes.listContainer}
        variants={variants.textVariants}
      >
        {projects.map((project) => {
          return (
            <motion.div
              key={project.title}
              className={classes.box}
              whileHover={{
                backgroundColor: "#d3d3d3",
                color: "#000000",
              }}
              onClick={() => {
                setIsModalOpen(true);
                setSelectedProject(project);
              }}
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
