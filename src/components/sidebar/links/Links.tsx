import classes from "./links.module.scss";
import { motion } from "framer-motion";
import * as variants from "./links.variants";

const items: { id: string; title: string }[] = [
  { id: "home", title: "Accueil" },
  { id: "aboutMe", title: "A Propos De Moi" },
  { id: "experience", title: "Expérience" },
  { id: "projects", title: "Projets" },
  { id: "skills", title: "Compétences" },
  { id: "studies", title: "Etudes" },
  { id: "contact", title: "Contact" },
];

const Links = () => {
  return (
    <motion.div className={classes.links} variants={variants.wrapperVariants}>
      {items.map((item) => {
        return (
          <motion.a
            href={`#${item.id}`}
            key={item.id}
            variants={variants.itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.title}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Links;
