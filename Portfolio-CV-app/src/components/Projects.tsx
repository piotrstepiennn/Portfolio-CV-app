import React from 'react';
import Project from "./Project.tsx"
import projects from "../assets/projects.json";
const style:React.CSSProperties = {
    "marginTop": "25rem"
};

const Projects = () => {
    return (
        <div className="container mt-5 align-items-center justify-content-center container">
            <p className="text-center text-nowrap text-secondary fw-bold fs-5" style={style}>Moje najciekawsze</p>
            <p className="text-center text-nowrap text-dark fw-bold fs-1 mt-0">Projekty!</p>
            <p className="text-center text-nowrap text-secondary fw-bold fs-5 mb-5">Wejdź w link przy opisie projektu
                aby poznać więcej szczegółów</p>
            <div className="row">
                {projects.map((project) => (
                    <Project key={project.id} Title={project.title} Link={project.link} Description={project.description} Technologies={project.technologies}/>
                ))}
            </div>
        </div>
    );
};

export default Projects;