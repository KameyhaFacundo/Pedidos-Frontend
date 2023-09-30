import "../../styles/error404.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import error from "../../assets/error404.png";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-center Min-vh">
        <Col xs={12} md={6} className="text-center">
          <div className="mt-5">
            <p className="Texto-G">ERROR 404 !</p>
            <p className="Texto-S">Page not found</p>
            <Link to={"/"}>
              <Button className="margin-left-4" variant="outline-danger">
                Return
              </Button>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <img src={error} alt="error 404" />
        </Col>
      </Row>
    </Container>
  );
};

export default Error404;
