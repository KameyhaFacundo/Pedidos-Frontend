import React from "react";
import { Carousel, Form, FormGroup, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { listProducts } from "../helpers/queries";
import CardProductos from "./producto/CardProductos";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Order from "./Order";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Inicio = ({ activeUser }) => {
  const [products, setProducts] = useState([]);
  const [productsfilter, setProductsFilter] = useState([]);
  const [search, setSearch] = useState("");
  const carritoAntiguo = JSON.parse(localStorage.getItem("carrito")) || [];
  const [carrito, setCarrito] = useState(carritoAntiguo);
  const [contadorCarrito, setContadorCarrito] = useState(
    parseInt(localStorage.getItem("contadorCarrito")) || 0
  );

  const [carritoTable, setCarritoTable] = useState([]);

  const agregarAlCarrito = (product) => {
    if (activeUser) {
      const updatedCarrito = [...carrito, product];
      setCarrito(updatedCarrito);
      localStorage.setItem("carrito", JSON.stringify(updatedCarrito));
      setContadorCarrito((prevContador) => {
        const newCounter = prevContador + 1;
        localStorage.setItem("contadorCarrito", newCounter.toString());
        return newCounter;
      });
    } else {
      setContadorCarrito(0);
    }
  };

  const cerrarSesion = () => {
    setCarritoTable([...carrito]);
    setCarrito([]);
    setContadorCarrito(0);

    localStorage.removeItem("carrito");
    localStorage.removeItem("contadorCarrito");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const searchProduct = (term) => {
    const filterProduct = products.filter((product) =>
      product.nameProduct.toLowerCase().startsWith(term.toLowerCase())
    );
    setProductsFilter(filterProduct);
  };

  useEffect(() => {
    listProducts().then((answer) => {
      if (answer) {
        setProducts(answer);
        setProductsFilter(answer);
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Intente realizar esta operación mas tarde",
          "error"
        );
      }
    });
  }, []);
  return (
    <>
      <div className="carrito-flotante">
        <Link className="text-center " to={"/order"}>
          <FontAwesomeIcon
            icon={faCartShopping}
            size="2xl"
            beat
            style={{ color: "#000000" }}
          />
          <span className="carrito-cantidad">{contadorCarrito}</span>
        </Link>
      </div>
      <div className="img-container">
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/dgzimgpia/image/upload/v1696039061/EDIDOS_ROLLING_zg3dzc.png"
          alt="Imagen de bienvenida"
        />
        <div className="img-text">
          <h2 className="title">BIENVENIDOS</h2>
          <p className="subtitle">Hace tu pedido fácil y rápido.</p>
        </div>
      </div>
      <section className="search-name">
        <Form>
          <FormGroup>
            <Form.Control
              type="text"
              placeholder="Buscar por nombre..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                searchProduct(e.target.value);
              }}
            />
          </FormGroup>
        </Form>
      </section>
      <CardProductos
        products={productsfilter}
        activeUser={activeUser}
        agregarAlCarrito={agregarAlCarrito}
      />
      {activeUser.id === 0 && (
        <div>
          <div className="w-100 h-100 mt-3 py-3 register">
            <div className="w-50 d-flex justify-content-center align-items-center">
              <img
                className=" image-register m-4"
                src="https://res.cloudinary.com/dgzimgpia/image/upload/v1693144025/samples/people/kitchen-bar.jpg"
                alt="anuncio-img"
                onError={(e) => {
                  e.target.src = "https://i.stack.imgur.com/lnYep.png";
                }}
              />
            </div>
            <div className=" text-center d-flex h-100 flex-column w-50 body-card-top">
              <h3>Te podes registrar aqui 👇</h3>
              <Link to={"/registro"}>
                <Button className="mx-5 color-button ">Registrate</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Inicio;
