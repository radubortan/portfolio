import classes from "./links.module.scss";
import { motion } from "framer-motion";
import * as variants from "./links.variants";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

const Links = ({ onClick }: { onClick: () => void }) => {
  const { t } = useTranslation();

  const items = useMemo(
    () => [
      { id: "home", title: t("HOME") },
      { id: "aboutMe", title: t("ABOUT_ME") },
      { id: "experience", title: t("EXPERIENCE") },
      { id: "projects", title: t("PROJECTS") },
      { id: "skills", title: t("SKILLS") },
      { id: "studies", title: t("STUDIES") },
      { id: "contact", title: t("CONTACT") },
    ],
    []
  );

  return (
    <motion.div className={classes.links} variants={variants.wrapperVariants}>
      {items.map((item) => {
        return (
          <motion.a
            onClick={onClick}
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
