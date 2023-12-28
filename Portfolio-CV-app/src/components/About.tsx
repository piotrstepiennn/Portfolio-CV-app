import React from "react";
// import Img from '../assets/react.svg'
import Card from './Card.tsx'
import experiences from '../assets/experience.json'
import education from '../assets/education.json'
import certifications from '../assets/certifications.json'

const style:React.CSSProperties = {
    "marginTop": "25rem"
};



const About = () => {
    return (
        <div id="about" className="container mt-5 align-items-center justify-content-center container">
            <p className="text-center text-nowrap text-secondary fw-bold fs-5" style={style}>Więcej informacji</p>
            <p className="text-center text-nowrap text-dark fw-bold fs-1 mt-0 mb-5">O mnie!</p>

            <div className="row">
                <p className="text-center text-nowrap text-dark fw-bold fs-3 mt-0 ">Doświadczenie zawodowe</p>
                {experiences.map((experience) => (
                    <Card key={experience.id} Title="Doświadczenie" Subtitle={experience.position}
                          Duration={experience.date} Text={experience.company} Location={experience.location}/>
                ))}
                <p className="text-center text-nowrap text-dark fw-bold fs-3 mt-0 ">Wykształcenie</p>
                {education.map((edu) => (
                    <Card key={edu.id} Title="Wykształcenie" Duration={edu.date} Subtitle={edu.degree}
                          Text={edu.institution} Location={edu.location}/>
                ))}
                <p className="text-center text-nowrap text-dark fw-bold fs-3 mt-0 ">Zdobyte certyfikaty</p>
                {certifications.map((cert) => (
                    <Card key={cert.id} Title="Certyfikat" Duration={cert.issuedDate} Subtitle={cert.title}
                          Text={cert.provider}/>
                ))}
            </div>
        </div>
    );
};

export default About;