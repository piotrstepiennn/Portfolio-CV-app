import React from "react";
import { useTranslation } from "react-i18next";

const style: React.CSSProperties = {
  marginTop: "30rem",
};
const inlineMarginBottom: React.CSSProperties = {
  marginBottom: "17rem",
};
const iconSize: React.CSSProperties = {
  height: "2rem",
  width: "2rem",
  color: "black",
  borderRadius: "13px",
};
const ContactInfo = () => {
  const [t] = useTranslation();
  return (
      <div
          id="contact"
          className="container mt-5 align-items-center justify-content-center mt-5 mb-5"
      >
        <p
            className="text-center text-nowrap text-dark fw-bold fs-5 mb-0"
            style={style}
        >
          {t("global.contact.contact_me")}
        </p>
        <p className="text-center text-nowrap text-black fw-bold fs-1 mt-0">
          {t("global.contact.body")}
        </p>
        <div
            className="container border border-2 rounded-pill p-3 w-75" // Dodałem więcej paddingu
            style={inlineMarginBottom}
        >
          <div className="d-flex flex-column align-items-center justify-content-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-envelope-at-fill mb-2"
                viewBox="0 0 16 16"
            >
              <path
                  d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546L0 11.801Zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 9.671V4.697l-5.803 3.546.338.208A4.482 4.482 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
              <path
                  d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791Z"/>
            </svg>
            <a
                href="mailto:piotr.stepien997@gmail.com"
                className="link-secondary text-black mb-2"
            >
              piotr.stepien997@gmail.com
            </a>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-linkedin mb-2"
                viewBox="0 0 16 16"
                style={iconSize}
            >
              <path
                  d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4"/>
            </svg>
            <a
                href="https://www.linkedin.com/in/piotr-st%C4%99pie%C5%84-b3a015285/"
                className="link-secondary text-black mb-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

  );
};

export default ContactInfo;
