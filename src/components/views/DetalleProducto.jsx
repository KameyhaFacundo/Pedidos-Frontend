import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { obtenerProduct } from "../helpers/queries";
import { useForm } from "react-hook-form";
import { Container, Row, Card, Col, Button, Badge } from "react-bootstrap";

const DetalleProducto = () => {
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
      className="my-3 mainSection px-5"
      style={{
        margin: "10px",
        borderRadius: "15px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Card className="px-0">
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              className="detalle-imagen"
              src={product.image}
              alt={product.nameProduct}
            />
          </Col>
          <Col md={6} className="m-0">
            <Card.Body>
              <Card.Title className="fs-1 fw-bold text-center">
                {product &&
                  product.nameProduct &&
                  product.nameProduct.toUpperCase()}
              </Card.Title>
              <hr />
              <Card.Text>
                <br />
                <span className="text-danger fw-semibold fs-3">Categoria:</span>
                <p className="fs-2">{product.category}</p>
                <br />
                <span className="text-danger fw-semibold fs-3">Precio:</span>
                <p className="fs-2">${product.price}</p>
                <br />
                <p>{product.description}</p>
                <br />
                <br />
              </Card.Text>
              <Link className="btn btn-primary bg-orange border-0" to="/">
                Volver inicio
              </Link>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
