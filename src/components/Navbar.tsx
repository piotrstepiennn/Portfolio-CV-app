import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { flag_pl, flag_uk } from "../assets";

const Navbar = () => {
  const [t, i18n] = useTranslation();
  const [language, setLanguage] = useState("pl");
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };
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
            <a className="navbar-brand fs-1" href="/">
              Piotr Stępień
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded={!isNavCollapsed}
                aria-label="Toggle navigation"
                onClick={toggleNavbar}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarNav">
              <div className="navbar-nav">
                <a className="nav-link fs-4" href="#about" onClick={toggleNavbar}>
                  {t('global.navbar.about')}
                </a>
                <a className="nav-link fs-4" href="#skills" onClick={toggleNavbar}>
                  {t('global.navbar.skills')}
                </a>
                <a className="nav-link fs-4" href="#projects" onClick={toggleNavbar}>
                  {t('global.navbar.projects')}
                </a>
                <a className="nav-link fs-4" href="#contact" onClick={toggleNavbar}>
                  {t('global.navbar.contact')}
                </a>
                <button
                    onClick={toggleLanguage}
                    style={{border: 'none', background: 'none'}}
                    className="ms-4"
                >
                  <img
                      className="border border-black"
                      src={language === 'en' ? flag_uk : flag_pl}
                      alt={language === 'en' ? 'english' : 'polski'}
                      style={{width: '40px', height: '30px'}}
                  />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default Navbar;
