import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';



const CardProducto = ({product}) => {
 
  

    return (
        <Card style={{width: '400px'}}>
          <Card.Img width={360} height={400} variant='top' src={product.images} />
          <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Button href={`/productos/${product.id}`}>
            Ver mas
            </Button>
          </Card.Body>
        </Card>
    )
  }
  CardProducto.propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };
  export default CardProducto