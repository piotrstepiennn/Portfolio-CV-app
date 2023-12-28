interface propsTypes {
    Title: string,
    Link: string,
    Description: string,
    Technologies: {
        frontend: string;
        backend: string;
        mobile_app: string;
        database: string;
        wpf_app: string;
    };
}


const Project = (props:propsTypes) => {
    const {Technologies} = props;

    const transformTechnologiesToArray = () => {
        const techArray = [];
        for (const category in Technologies) {
            if (Technologies.hasOwnProperty(category)) {
                // @ts-ignore
                techArray.push({ category, tech: Technologies[category] });
            }
        }
        return techArray;
    };
    return (
        <div className="container border border-2 rounded-top my-4 py-3 w-100 mx-auto">
            <p className="text-center text-secondary fw-bolder fs-3">{props.Title}</p>
            <a href={props.Link} target="_blank" className="justify-content-center d-flex link-secondary mb-1 fs-5">{props.Link}</a>
            <p className="mb-0 text-justify text-dark">{props.Description}</p>
            <p className="text-left text-secondary fw-bold mt-1 mb-0 fs-5">Wykorzystane technologie:</p>
            {transformTechnologiesToArray().map((tmp, index) => (
                <p key={index} className="mb-0 text-left text-dark"><span className="fw-bolder">{tmp.category}:</span> {tmp.tech}</p>
            ))}
        </div>
    );
};

export default Project;