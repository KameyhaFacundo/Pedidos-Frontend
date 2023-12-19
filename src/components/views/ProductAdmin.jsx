import { Table } from "react-bootstrap";
import ItemProducto from "./producto/ItemProducto";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { tolistProducts } from "../helpers/queries";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUtensils,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const ProductAdmin = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    tolistProducts().then((answerProducts) => {
      if (answerProducts) {
        setProducts(answerProducts);
      } else {
        Swal.fire("A ocurrido un error", "Intente mas tarde", "error");
      }
    });
  }, []);

  return (
    <section className="container my-4">
      <div className="row">
        <div className="col">
          <div className="d-grid gap-2 mb-4 d-md-flex justify-content-md-end">
          <Link
          className="btn btn-primary bg-orange border-0"
          to="/administrador/crear"
        >
          Agregar
        </Link>
            <Link className="btn btn-primary" to={"/administrador/usuarios"}>
              <FontAwesomeIcon className="mx-2" icon={faUser} />
              Usuarios
            </Link>
            
          </div>
          <h3 className="text-center mb-4">
            <FontAwesomeIcon className="mx-2" icon={faUtensils} />
            Administración de productos
          </h3>
          <hr />
          {products.length === 0 ? (
            <h5 className="text-center">No hay productos para cargar.</h5>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover border shadow">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th style={{ width: "150px" }}>Precio</th>
                    <th style={{ marginRight: "0px" }}>Imagen</th>
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
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductAdmin;
