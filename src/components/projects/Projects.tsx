import classes from "./projects.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import * as variants from "./projects.variants";
import { useState } from "react";
import ProjectModal from "./projectModal/ProjectModal";
import { projects } from "./projects.data";
import { Project } from "./projects.data";
import useScreenSize from "../../hooks/useScreenSize";
import { Trans, useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  const [selectedProject, setSelectedProject] = useState<Project>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const screenSize = useScreenSize();
  const isMobileDevice = screenSize.width <= 768;

  return (
    <section id="projects" className={classes.container}>
      <motion.div
        className={classes.content}
        initial="initial"
        whileInView="whileInView"
        viewport={{
          once: isMobileDevice,
        }}
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
          <motion.h1
            variants={
              isMobileDevice
                ? variants.textVariantsMobile
                : variants.textVariants
            }
          >
            <Trans i18nKey="MY_PROJECTS_HTML">
              <span></span>
            </Trans>
          </motion.h1>
        </div>

        <motion.div
          className={classes.listContainer}
          variants={
            isMobileDevice ? variants.textVariantsMobile : variants.textVariants
          }
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
                <h2>{t(project.title)}</h2>
                <p className={classes.learnMore}>{t("MORE_INFO")}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
