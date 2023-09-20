import React from "react";
import { Carousel } from "react-bootstrap";

const Inicio = () => {
  return (
    <>
      <div className="carrousel-container">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <div className="image-container">
              <img
                className="d-block w-100"
                src="https://i.stack.imgur.com/lnYep.png"
                alt="Primera imagen"
              />
            </div>
            <Carousel.Caption>
              <h5 className="fs-1 text">Restaurante el 10</h5>
              <p className="fs-2 text">Hace tu pedido facil y rapido!!!</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image-container">
              <img
                className="d-block w-100"
                src="https://i.stack.imgur.com/lnYep.png"
                alt="Segunda imagen"
              />
            </div>
            <Carousel.Caption>
              <h5 className="fs-1 text">Restaurante el 10</h5>
              <p className="fs-2 text">Hace tu pedido facil y rapido!!!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Inicio;
