import { transJsonToArray } from "../utils.ts";
import { useTranslation } from "react-i18next";

interface propsTypes {
  Title: string;
  Link: string;
  Description: string;
  Technologies: {
    frontend?: string;
    backend?: string;
    mobile_app?: string;
    database?: string;
    wpf_app?: string;
    "CI/CD"?: string;
  };
}

const Project = (props: propsTypes) => {
  const [t] = useTranslation();
  const { Technologies } = props;

  return (
    <div className="container border border-2 rounded-top my-4 py-3 w-100 mx-auto">
      <p className="text-center text-secondary fw-bolder fs-3">{props.Title}</p>
      <a
        href={props.Link}
        target="_blank"
        className="justify-content-center d-flex link-secondary mb-1 fs-5"
      >
        {props.Link}
      </a>
      <p className="mb-0 text-justify text-dark">{props.Description}</p>
      <p className="text-left text-secondary fw-bold mt-1 mb-0 fs-5">
        {t("global.projects.used_technologies")}
      </p>
      {transJsonToArray(Technologies).map((tmp, index) => (
        <p key={index} className="mb-0 text-left text-dark">
          <span className="fw-bolder">{tmp.category}:</span> {tmp.tech}
        </p>
      ))}
    </div>
  );
};

export default Project;
