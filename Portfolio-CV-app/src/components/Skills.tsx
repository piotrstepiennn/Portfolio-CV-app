import React from 'react';
import Skill from "./Skill.tsx"
import skills from "../assets/skills.json"
const style:React.CSSProperties = {
    "marginTop": "30rem"
};
const Skills = () => {
    return (
        <div id="skills" className="container mt-5 align-items-center justify-content-center container">
            <p className="text-center text-nowrap text-secondary fw-bold fs-5" style={style}>Poznaj moje</p>
            <p className="text-center text-nowrap text-black fw-bold fs-1 mt-0 mb-5">Umiejętności!</p>

            <div className="container border border-2 rounded my-4 py-3 w-100 mx-auto">
                <p className="text-center text-secondary fw-bold fs-3">Wykaz umiejętności oraz stopień znajomości danej technologii</p>
                <div className="row">
                    {skills.map((skill)=>(
                        <Skill key={skill.id} Skill={skill.name} Level={skill.level}/>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Skills;