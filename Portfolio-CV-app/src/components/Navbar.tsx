import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { flag_pl, flag_uk } from "../assets";

const Navbar = () => {
  const [t, i18n] = useTranslation();
  const [language, setLanguage] = useState("pl");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    setLanguage((lang) => (lang === "en" ? "pl" : "en"));
  };

  return (
    <div>
      <nav
        data-testid="navbar"
        className="navbar navbar-expand-lg navbar-light bg-white mt-3 mb-5"
      >
        <div className="container">
          <a className="navbar-brand fs-1" href="#">
            Piotr Stępień
          </a>
          <div className="navbar-nav ml-auto">
            <a className="nav-link fs-4" href="#about">
              {t("global.navbar.about")}
            </a>
            <a className="nav-link fs-4" href="#skills">
              {t("global.navbar.skills")}
            </a>
            <a className="nav-link fs-4" href="#projects">
              {t("global.navbar.projects")}
            </a>
            <a className="nav-link fs-4" href="#contact">
              {t("global.navbar.contact")}
            </a>
            <button
              onClick={toggleLanguage}
              style={{ border: "none", background: "none" }}
            >
              <img
                className="ms-4 border border-black"
                src={language === "en" ? flag_uk : flag_pl}
                alt={language === "en" ? "english" : "polski"}
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
