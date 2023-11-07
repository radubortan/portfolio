import classes from "./aboutMe.module.scss";
import { motion } from "framer-motion";
import useScreenSize from "../../hooks/useScreenSize";

const containerVariants = {
  whileInView: { transition: { staggerChildren: 0.05 } },
};

const textVariants = {
  initial: { y: 120, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { y: { type: "spring", stiffness: 100, damping: 20 } },
  },
};

const AboutMe = () => {
  const screenSize = useScreenSize();
  const isMobileDevice = screenSize.width <= 768;

  return (
    <motion.section
      variants={containerVariants}
      initial="initial"
      whileInView="whileInView"
      className={classes.container}
      viewport={{
        margin: !isMobileDevice ? "-100px" : "",
        once: isMobileDevice,
      }}
      id="aboutMe"
    >
      <div className={classes.headers}>
        <motion.h1 variants={textVariants}>
          Bonjour, je m'appelle Radu!
        </motion.h1>
        <motion.h2 variants={textVariants}>Ingénieur Full-Stack</motion.h2>
      </div>

      <div className={classes.smallTextContainer}>
        <motion.p variants={textVariants}>
          J'adore collaborer sur des projets ayant un impact. J'ai une affection
          particulière pour le développement front-end et l'UI/UX.
        </motion.p>
        <motion.p variants={textVariants}>
          Je suis actuellement à la recherche d'un poste de développeur
          full-stack. Si vous avez un projet intéressant, n'hésitez pas à me
          contacter!
        </motion.p>
        <motion.p variants={textVariants}>
          En dehors du travail, j'aime suivre les sports mécaniques, découvrir
          les derniers gadgets et jouer avec mon chat.
        </motion.p>
      </div>
      <motion.img variants={textVariants} src="cat.png" alt="ginger cat icon" />
    </motion.section>
  );
};

export default AboutMe;
