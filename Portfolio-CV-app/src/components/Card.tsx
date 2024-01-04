interface propsTypes {
  Title: string;
  Subtitle: string;
  Duration: string;
  Text: string;
  Location?: string;
  Image: string;
}

const Card = (props: propsTypes) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="d-flex flex-column h-100">
        <div className="card h-100">
          <h5 className="card-header text-center text-dark fw-bold">
            {props.Title}
          </h5>
          <div className="card-body d-flex flex-column flex-grow-1">
            <h5 className="card-title text-center text-dark">
              {props.Subtitle}
            </h5>
            <p className="card-text text-center text-secondary">
              {props.Duration}
            </p>

            <div className="row justify-content-center align-items-center">
              <div className="col-md-2 justify-content-md-start">
                <img
                  className="img-fluid rounded-start rounded-end"
                  src={props.Image}
                  alt=""
                  style={{ height: "40px", width: "50px" }}
                />
              </div>
              <div className="col-md-4 justify-content-md-start mt-3 ms-0">
                <h6 className="card-subtitle text-left">{props.Text}</h6>
              </div>
            </div>
            <p className="card-text text-center text-secondary mb-0">
              {props.Location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
