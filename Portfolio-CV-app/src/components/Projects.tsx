import React, { useState, useEffect } from "react";
import Project from "./Project.tsx";
import { useTranslation } from "react-i18next";
import { loadJson } from "../utils.ts";

const style: React.CSSProperties = {
  marginTop: "25rem",
};

interface project {
  id: number;
  title: string;
  link: string;
  description: string;
  technologies: object;
}

const Projects = () => {
  const [t, i18n] = useTranslation();
  const [projects, setProjects] = useState([]);
  const currentLanguage = i18n.language;

  useEffect(() => {
    Promise.all([loadJson("projects", setProjects, currentLanguage)]);
  }, [currentLanguage]);

  return (
    <div
      id="projects"
      className="container mt-5 align-items-center justify-content-center container"
    >
      <p
        className="text-center text-nowrap text-secondary fw-bold fs-5"
        style={style}
      >
        {t("global.projects.message")}
      </p>
      <p className="text-center text-nowrap text-dark fw-bold fs-1 mt-0">
        {t("global.projects.message2")}
      </p>
      <p className="text-center text-nowrap text-secondary fw-bold fs-5 mb-5">
        {t("global.projects.message3")}
      </p>
      <div className="row">
        {projects.map((project: project) => (
          <Project
            key={project.id}
            Title={project.title}
            Link={project.link}
            Description={project.description}
            Technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
