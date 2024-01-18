import React, { useState, useEffect } from "react";
import Card from "./Card.tsx";
import { useTranslation } from "react-i18next";
import { loadJson } from "../utils.ts";
import {
  logoCisco,
  logoUJK,
  logoMicrosoft,
  logoKomputronik,
  logoZSP,
  logoGama,
  logoPSK,
  logoUdemy,
  logoFreecodecamp,
  logoNBP,
} from "../assets";

const style: React.CSSProperties = {
  marginTop: "25rem",
};

type logoMap = {
  [key: string]: string;
};

const logoMap: logoMap = {
  cisco: logoCisco,
  ujk: logoUJK,
  microsoft: logoMicrosoft,
  komputronik: logoKomputronik,
  zsp: logoZSP,
  gama: logoGama,
  psk: logoPSK,
  udemy: logoUdemy,
  freecodecamp: logoFreecodecamp,
  nbp: logoNBP,
};

const getLogo = (logo: string) => {
  return logoMap[logo] || "";
};

interface exp {
  id: React.Key | null | undefined;
  position: string;
  date: string;
  company: string;
  location: string | undefined;
  logo: string;
}

interface edu {
  id: React.Key | null | undefined;
  date: string;
  degree: string;
  institution: string;
  location: string | undefined;
  logo: string;
}

interface cert {
  id: React.Key | null | undefined;
  issuedDate: string;
  title: string;
  provider: string;
  logo: string;
}

const About = () => {
  const [t, i18n] = useTranslation();
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const currentLanguage = i18n.language;

  useEffect(() => {
    Promise.all([
      loadJson("experience", setExperiences, currentLanguage),
      loadJson("certifications", setCertifications, currentLanguage),
      loadJson("education", setEducation, currentLanguage),
    ]);
  }, [currentLanguage]);

  return (
    <div
      data-testid="about"
      id="about"
      className="container mt-5 align-items-center justify-content-center container"
    >
      <p
        className="text-center text-nowrap text-secondary fw-bold fs-5"
        style={style}
      >
        {t("global.about.message")}
      </p>
      <p className="text-center text-nowrap text-dark fw-bold fs-1 mt-0 mb-5">
        {t("global.about.message2")}
      </p>

      <div className="row">
        <p className="text-center text-nowrap text-dark fw-bold fs-3 mt-0 ">
          {t("global.about.work_experience")}
        </p>
        {experiences.map((experience: exp) => (
          <Card
            key={experience.id}
            Title={t("global.about.experience")}
            Subtitle={experience.position}
            Duration={experience.date}
            Text={experience.company}
            Location={experience.location}
            Image={getLogo(experience.logo)}
          />
        ))}
        <p className="text-center text-nowrap text-dark fw-bold fs-3 mt-0 ">
          {t("global.about.education")}
        </p>
        {education.map((edu: edu) => (
          <Card
            key={edu.id}
            Title={t("global.about.education")}
            Duration={edu.date}
            Subtitle={edu.degree}
            Text={edu.institution}
            Location={edu.location}
            Image={getLogo(edu.logo)}
          />
        ))}
        <p className="text-center text-nowrap text-dark fw-bold fs-3 mt-0 ">
          {t("global.about.earned_certs")}
        </p>
        {certifications.map((cert: cert) => (
          <Card
            key={cert.id}
            Title={t("global.about.certificate")}
            Duration={cert.issuedDate}
            Subtitle={cert.title}
            Text={cert.provider}
            Image={getLogo(cert.logo)}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
