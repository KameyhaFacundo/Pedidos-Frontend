import { useParams } from 'react-router-dom';
import { searchProductId } from '../../helpers/serchproduct';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';



const DetailProduct = () => {
    const { id } = useParams();
    
    console.log({idParmas: id})
    const product = searchProductId(Number(id))
    

    return (
    <Container >
      <Row>
        <Col md={6}>
          <Card.Img src={product.images}  style={{borderRadius: '15px'}} />
        </Col>
        <Col md={6}>
          <Card border='0'>
            <Card.Body>
              <Card.Title style={{ fontSize: '40px' }}>{product.name}</Card.Title>
              <Card.Text style={{ fontSize: '20px' }}>{product.description}</Card.Text>
              <Card.Text style={{ fontSize: '20px' }}>${product.price}</Card.Text>
              <Card.Text>
              <Badge bg="info">{product.category}</Badge>
              </Card.Text>
              
              <Button href={`/productos/${product.id}`}>Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    )
  }
  
  export default DetailProduct