import React from "react";
import Card from "./Card.tsx";
import {
  experiences,
  education,
  certifications,
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
  console.log(logo);
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
  return (
    <div
      id="about"
      className="container mt-5 align-items-center justify-content-center container"
    >
      <p
        className="text-center text-nowrap text-secondary fw-bold fs-5"
        style={style}
      >
        Więcej informacji
      </p>
      <p className="text-center text-nowrap text-dark fw-bold fs-1 mt-0 mb-5">
        O mnie!
      </p>

      <div className="row">
        <p className="text-center text-nowrap text-dark fw-bold fs-3 mt-0 ">
          Doświadczenie zawodowe
        </p>
        {experiences.map((experience: exp) => (
          <Card
            key={experience.id}
            Title="Doświadczenie"
            Subtitle={experience.position}
            Duration={experience.date}
            Text={experience.company}
            Location={experience.location}
            Image={getLogo(experience.logo)}
          />
        ))}
        <p className="text-center text-nowrap text-dark fw-bold fs-3 mt-0 ">
          Wykształcenie
        </p>
        {education.map((edu: edu) => (
          <Card
            key={edu.id}
            Title="Wykształcenie"
            Duration={edu.date}
            Subtitle={edu.degree}
            Text={edu.institution}
            Location={edu.location}
            Image={getLogo(edu.logo)}
          />
        ))}
        <p className="text-center text-nowrap text-dark fw-bold fs-3 mt-0 ">
          Zdobyte certyfikaty
        </p>
        {certifications.map((cert: cert) => (
          <Card
            key={cert.id}
            Title="Certyfikat"
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
