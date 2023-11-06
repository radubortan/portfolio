import classes from "./projects.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import * as variants from "./projects.variants";
import { useState } from "react";
import ProjectModal from "./projectModal/ProjectModal";
import { projects } from "./projects.data";
import { Project } from "./projects.data";
import useScreenSize from "../../hooks/useScreenSize";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const screenSize = useScreenSize();
  const isMobileDevice = screenSize.width <= 768;

  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      viewport={{
        once: isMobileDevice,
      }}
      className={classes.container}
    >
      <AnimatePresence mode="wait">
        {isModalOpen && (
          <ProjectModal
            project={selectedProject}
            handleClose={() => {
              setIsModalOpen(false);
              document.body.style.overflow = "auto";
            }}
          />
        )}
      </AnimatePresence>

      <div className={classes.titleContainer}>
        <motion.h1 variants={variants.textVariants}>
          Mes <span>Projets</span>
        </motion.h1>
      </div>

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
                document.body.style.overflow = "hidden";
                setIsModalOpen(true);
                setSelectedProject(project);
              }}
            >
              <h2>{project.title}</h2>
              <p className={classes.learnMore}>Plus d'infos</p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
