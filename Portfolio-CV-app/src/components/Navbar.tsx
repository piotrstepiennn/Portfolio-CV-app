import { useState } from "react";
//import { useTranslation } from "react-i18next";
import { flag_pl, flag_uk } from "../assets";

const Navbar = () => {
  //const [t, i18n] = useTranslation(global_pl);
  const [language, setLanguage] = useState("pl");
  const toggleLanguage = () => {
    setLanguage((lang) => (lang === "en" ? "pl" : "en"));
    //todo
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white mt-3 mb-5">
        <div className="container">
          <a className="navbar-brand fs-1" href="#">
            Piotr Stępień
          </a>
          <div className="navbar-nav ml-auto">
            <a className="nav-link fs-4" href="#about">
              O mnie
            </a>
            <a className="nav-link fs-4" href="#skills">
              Umiejętności
            </a>
            <a className="nav-link fs-4" href="#projects">
              Moje Projekty
            </a>
            <a className="nav-link fs-4" href="#contact">
              Kontakt
            </a>
            <button
              onClick={toggleLanguage}
              style={{ border: "none", background: "none" }}
            >
              <img
                className="ms-4 border border-black"
                src={language === "en" ? flag_uk : flag_pl}
                alt={language === "en" ? "polski" : "english"}
                style={{ width: "40px", height: "30px" }}
              />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
