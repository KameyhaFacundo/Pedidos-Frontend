import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const Order = () => {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const mostrarAlerta = () => {
    Swal.fire({
      title: '¡Compra Realizada!',
      text: '¡Muchas Gracias por confiar en nosotros!',
      icon: 'success',
      confirmButtonText: 'Cerrar'
    }).then(() => {
      localStorage.removeItem("carrito");
      localStorage.removeItem("contadorCarrito");
      location.reload(); 
    });
  };


  return (
    <div>
      <h2 className="text-center my-5">Orden de Compra</h2>
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
        <h4 className="text-center">No hay elementos en el carrito</h4>
      )}
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Link to="/">
    <Button variant="secondary">Volver</Button>
  </Link>

  {carrito.length > 0 && (
        <Button variant="success" className="mx-4" onClick={mostrarAlerta}>
          Comprar
        </Button>
      )}
</div>
    </div>
  );
      };

export default Order;
