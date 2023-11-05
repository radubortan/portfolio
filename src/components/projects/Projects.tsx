import classes from "./projects.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import * as variants from "./projects.variants";
import { useState } from "react";
import ProjectModal from "./projectModal/ProjectModal";
import { projects } from "./projects.data";
import { Project } from "./projects.data";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={classes.container}>
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

      <div className={classes.titleContainer}>
        <motion.h1
          variants={variants.textVariants}
          initial="initial"
          whileInView="whileInView"
        >
          Mes <span>Projets</span>
        </motion.h1>
      </div>

      <motion.div
        initial="initial"
        whileInView="whileInView"
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
              <p className={classes.learnMore}>Plus d'infos</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Projects;
