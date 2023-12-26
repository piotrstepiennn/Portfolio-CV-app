interface propsTypes {
    Title: string,
    Subtitle: string
    Duration: string
    Text: string
    Location?: string
}
const Card = (props:propsTypes) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="d-flex flex-column h-100">
                <div className="card h-100">
                    <h5 className="card-header text-center text-dark fw-bold">{props.Title}</h5>
                    <div className="card-body d-flex flex-column flex-grow-1">
                        <h5 className="card-title text-center text-dark">{props.Subtitle}</h5>
                        <h6 className="card-subtitle text-center">{props.Duration}</h6>
                        <p className="card-text text-center text-secondary mb-0">{props.Text}</p>
                        <p className="card-text text-center text-secondary">{props.Location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;