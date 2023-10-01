import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerProduct } from "../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Container, Row, Card, Col, Button, Badge } from "react-bootstrap";

const DetalleProducto = ({ activeUser }) => {
  const [product, setProduct] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { id } = useParams();

  useEffect(() => {
    obtenerProduct(id).then((resp) => {
      const variable = resp;
      setProduct(variable);
    });
  }, []);

  return (
    <Container
      style={{
        margin: "10px",
        borderRadius: "15px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Row>
        <Col md={6} style={{ padding: "10px" }}>
          <Card.Img
            src={product.image}
            style={{ borderRadius: "15px", width: "60%", height: "auto" }}
            className=""
          />
        </Col>
        <Col md={6} style={{ padding: "10px" }}>
          <Card border="0">
            <Card.Body>
              <Card.Title style={{ fontSize: "18px", fontWeight: "bold" }}>
                {product.name}
              </Card.Title>
              <Card.Text style={{ fontSize: "14px" }}>
                {product.description}
              </Card.Text>
              <Card.Text style={{ fontSize: "16px", fontWeight: "bold" }}>
                Price: ${product.price}
              </Card.Text>
              <Card.Text>
                <Badge bg="info">{product.category}</Badge>
              </Card.Text>
              <Button
                href={`/products/${product.id}`}
                variant="primary"
                size="sm"
              >
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
