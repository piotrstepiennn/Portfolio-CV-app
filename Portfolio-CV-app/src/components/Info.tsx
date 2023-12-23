
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Img from '../assets/react.svg'
import Profile from "./Profile.tsx";

const Info = () => {
    return (
        <div className="mt-5 justify-content-center">
            <Container>
                <Row>
                    <div className="col-8 pt-5 mt-5">
                        <img src={Img} className="rounded mx-auto d-block img-fluid w-75 h-75" alt="..."/>
                    </div>
                    <div className="col-4 pt-5 mt-5" >
                        <Profile/>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Info;