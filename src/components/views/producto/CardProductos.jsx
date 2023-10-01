import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function CardProductos({ products, activeUser }) {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const navegacion = useNavigate();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProductos = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const añadirAlCarrito = () => {
    if (activeUser.id !== 0) {
      navegacion("/Pedidos");
    } else {
      Swal.fire("Debes iniciar Sesion");
    }
  };

  return (
    <div className="result-none">
      <>
        {currentProductos.length === 0 ? (
          <p className="result-none">No se encontraron resultados</p>
        ) : (
          <div className="d-flex flex-wrap justify-content-center card-page-body">
            {currentProductos.map((product) => (
              <Card
                className="mx-3 Nav-link card-product"
                key={product.id}
                style={{ width: "18rem" }}
              >
                <Card.Img
                  className="h-100"
                  variant="top"
                  src={product.image}
                  onError={(e) => {
                    e.target.src = "https://i.stack.imgur.com/lnYep.png";
                  }}
                />
                <Card.Body className="card-body-size d-flex flex-column justify-content-center">
                  <div className="d-flex justify-content-between">
                    <Card.Text>{product.nameProduct}</Card.Text>

                    <Card.Title className="custom-card-size">
                      {"$" + product.price}
                    </Card.Title>
                  </div>
                  {/* <Link className="w-100" to={"/pedidos" + product.id}> */}

                  <Link className="w-100" to={"/"}>
                    <Button
                      variant="danger"
                      className="mb-1 w-100"
                      onClick={añadirAlCarrito}
                    >
                      Comprar
                    </Button>
                  </Link>
                  <Link className="w-100" to={"/detalle/" + product.id}>
                    <Button variant="warning" className="mb-1 w-100">
                      Ver más
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </>
    </div>
  );
}

export default CardProductos;
