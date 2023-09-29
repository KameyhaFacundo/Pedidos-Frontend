import { Col, Container, Row } from "react-bootstrap";
import { allProducts } from "../../data/dataProducts";
import CardProducto from "../views/producto/CardProducto";

const ListProduct = () => {
  return (
    <Container>
      <Row>
        {allProducts?.map((product) => (
          <Col key={product.id}>
            <CardProducto product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ListProduct;
