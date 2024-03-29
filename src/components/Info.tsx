import { logo_react_dotnet } from "../assets";
import Profile from "./Profile.tsx";

const Info = () => {
  return (
    <div className="mt-5 d-flex align-items-center justify-content-center container">
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center align-items-center pt-5 mt-5">
          <img
            src={logo_react_dotnet}
            className="rounded mx-auto d-block img-fluid w-50 h-50"
            alt="..."
          />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Info;
