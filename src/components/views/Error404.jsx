import { Button, Col, Container, Row } from 'react-bootstrap';
import error from '../../assets/error404.png';

const Error404 = () => {
    return (
        <Container>
            <Row className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
                <Col xs={12} md={6} className="text-center">
                   
                    <div className='mt-5'>
                        <p style={{ fontSize: '52px' , marginBottom: '0'}}>ERROR 404 !</p>
                        <p style={{ fontSize: '32px' }}>Page not found</p>
                        <Button className='margin-left-4' variant="outline-danger">Return</Button>
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