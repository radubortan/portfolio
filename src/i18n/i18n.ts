import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import englishTranslations from "./translations/en.json";
import frenchTranslations from "./translations/fr.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: englishTranslations,
      },
      fr: {
        translation: frenchTranslations,
      },
    },
  });

const storedLanguage = localStorage.getItem("language");
if (storedLanguage) {
  i18n.changeLanguage(storedLanguage);
}

export default i18n;
