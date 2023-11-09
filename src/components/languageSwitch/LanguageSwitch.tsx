import { useTranslation } from "react-i18next";
import { useState } from "react";
import classes from "./languageSwitch.module.scss";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={classes.container}>
      <button
        className={i18n.language === "en-GB" ? classes.active : ""}
        onClick={() => changeLanguage("en-GB")}
      >
        EN
      </button>
      <span className={classes.divider} />
      <button
        className={i18n.language === "fr-FR" ? classes.active : ""}
        onClick={() => {
          changeLanguage("fr-FR");
        }}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitch;
