import React from 'react';
const style:React.CSSProperties = {
    "marginTop": "25rem"
};
const Projects = () => {
    return (
        <div className="container mt-5 align-items-center justify-content-center container">
            <p className="text-center text-nowrap text-secondary fw-bold fs-5" style={style}>Moje najciekawsze</p>
            <p className="text-center text-nowrap text-dark fw-bold fs-1 mt-0 mb-5">Projekty!</p>

        </div>
    );
};

export default Projects;