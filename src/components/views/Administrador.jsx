import React from "react";
import { Table, Button } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { tolistProducts } from "../helpers/queries";
import Swal from "sweetalert2";

const Administrador = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    tolistProducts().then((answerProducts) => {
      if (answerProducts) {
        // actualizar el estado
        setProducts(answerProducts);
      } else {
        Swal.fire("An error occurred", "Try again", "error");
      }
    });
  }, []);
  return (
    <section className="container mainSection">
      <div className="d-flex justify-content-between align-items-center mt-5">
        <h1 className="display-4 ">Productos disponibles</h1>
        <Link className="btn btn-primary" to="/administracion/crear">
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ItemProducto
              {...product}
              key={product._id}
              setProducts={setProducts}
            ></ItemProducto>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Administrador;
