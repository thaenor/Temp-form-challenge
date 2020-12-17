import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          name: "name :",
          "last name": "last name :",
          countries: "countries :",
          birthday: "birthday :",
          save: "save",
          "change language": "change language"
        }
      },
      pt: {
        translations: {
          name: "primeiro nome :",
          "last name": "ultimo nome :",
          countries: "país de origem :",
          birthday: "data de aniversário :",
          save: "guardar",
          "change language": "change language"
        }
      }
    },
    fallbackLng: "en",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
