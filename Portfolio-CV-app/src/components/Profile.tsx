import React from "react";

const style:React.CSSProperties = {
    width: "18rem",
};
const Profile = () => {
    return (
        <div className="container" style={style}>
            <p className="justify-content-left">Cześć, jestem</p>
            <p>Piotr Stępień</p>
            <p>Full Stack Developer</p>

        </div>
    );
};

export default Profile;