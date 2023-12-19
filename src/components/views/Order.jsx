import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Order = () => {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  return (
    <div>
      <h2>Orden de Compra</h2>
      {carrito.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item, index) => (
              <tr key={index}>
                <td>{item.nameProduct}</td>
                <td>{item.price}</td>
                <td>
                  <img
                    src={item.image}
                    alt="Imagen del producto"
                    style={{ width: "50px" }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No hay elementos en el carrito</p>
      )}
      <Link to="/">
        <Button>Volver</Button>
      </Link>
    </div>
  );
};

export default Order;
