import classes from "./links.module.scss";
import { motion } from "framer-motion";
import * as variants from "./links.variants";

const items = [
  "Home",
  "Presentation",
  "Projects",
  "Technologies",
  "Education",
  "Contact",
];

const Links = () => {
  return (
    <motion.div className={classes.links} variants={variants.wrapperVariants}>
      {items.map((item) => {
        return (
          <motion.a
            href={`#${item}`}
            key={item}
            variants={variants.itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Links;
