
import Img from '../assets/react.svg'
import Profile from "./Profile.tsx";

const Info = () => {
    return (
        <div className="mt-5 d-flex align-items-center justify-content-center container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center pt-5 mt-5">
                        <img src={Img} className="rounded mx-auto d-block img-fluid w-100 h-100" alt="..."/>
                        <Profile/>
                    </div>
                </div>
        </div>
    );
};

export default Info;