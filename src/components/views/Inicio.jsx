import React from "react";
import { Carousel, Form, FormGroup, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { listProducts } from "../helpers/queries";
import { listUsers } from "../helpers/queries";
import CardProductos from "./producto/CardProductos";
import { Link } from "react-router-dom";

const Inicio = ({ activeUser }) => {
  const [products, setProducts] = useState([]);
  const [productsfilter, setProductsFilter] = useState([]);
  const [search, setSearch] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    listProducts().then((answer) => {
      setProducts(answer);
      setProductsFilter(answer);
    });
  }, []);

  const searchProduct = (term) => {
    const filterProduct = products.filter((product) =>
      product.nombreProducto.toLowerCase().includes(term.toLowerCase())
    );
    setProductsFilter(filterProduct);
  };

  return (
    <>
      <div className="carrousel-container">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <div className="image-container">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dgzimgpia/image/upload/v1695263656/istockphoto-508219808-170667a_hofcum.jpg"
                alt="Primera imagen"
              />
            </div>
            <Carousel.Caption>
              <h2 className="title">Restaurante el 10</h2>
              <p className="subtitle">Hace tu pedido facil y rapido!!!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/dgzimgpia/image/upload/v1693144054/cld-sample-4.jpg"
                alt="Segunda imagen"
              />
            </div>
            <Carousel.Caption>
              <h2 className="title">Restaurante el 10</h2>
              <p className="subtitle">Hace tu pedido facil y rapido!!!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
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
      <CardProductos productos={productsfilter} />

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
