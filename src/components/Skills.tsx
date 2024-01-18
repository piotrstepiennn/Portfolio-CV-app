import React, { useEffect, useState } from "react";
import Skill from "./Skill.tsx";
import { useTranslation } from "react-i18next";
import { loadJson } from "../utils.ts";

const style: React.CSSProperties = {
  marginTop: "30rem",
};

interface skill {
  id: number;
  name: string;
  level: string;
}

const Skills = () => {
  const [t, i18n] = useTranslation();
  const [skills, setSkills] = useState([]);
  const currentLanguage = i18n.language;

  useEffect(() => {
    Promise.all([loadJson("skills", setSkills, currentLanguage)]);
  }, [currentLanguage]);

  return (
    <div
      data-testid="skills"
      id="skills"
      className="container mt-5 align-items-center justify-content-center container"
    >
      <p
        className="text-center text-nowrap text-secondary fw-bold fs-5"
        style={style}
      >
        {t("global.skills.message")}
      </p>
      <p className="text-center text-nowrap text-black fw-bold fs-1 mt-0 mb-5">
        {t("global.skills.message2")}
      </p>

      <div className="container border border-2 rounded my-4 py-3 w-100 mx-auto">
        <p className="text-center text-secondary fw-bold fs-3">
          {t("global.skills.list_of_skills_header")}
        </p>
        <div className="row">
          {skills.map((skill: skill) => (
            <Skill key={skill.id} Skill={skill.name} Level={skill.level} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
