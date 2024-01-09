import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import {
  experiences,
  experiences_en,
  skills_en,
  skills,
  education,
  education_en,
  projects_en,
  projects,
  global_pl,
  global_en,
  certifications,
  certifications_en,
} from "./assets";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        global: global_en,
        experiences: experiences_en,
        skills: skills_en,
        education: education_en,
        projects: projects_en,
        certifications: certifications_en,
      },
    },
    pl: {
      translation: {
        global: global_pl,
        experiences: experiences,
        skills: skills,
        education: education,
        projects: projects,
        certifications: certifications,
      },
    },
  },
  lng: "pl",
  fallbackLng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
