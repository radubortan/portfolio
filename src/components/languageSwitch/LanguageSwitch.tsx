import { useTranslation } from "react-i18next";
import { useState } from "react";
import classes from "./languageSwitch.module.scss";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setCurrentLanguage(language);
  };

  return (
    <div className={classes.container}>
      <button
        className={currentLanguage === "en" ? classes.active : ""}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <span className={classes.divider} />
      <button
        className={currentLanguage === "fr" ? classes.active : ""}
        onClick={() => {
          changeLanguage("fr");
        }}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitch;
