import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import "../../styles/order.css";
import { listProducts } from "../helpers/queries";

const OrderPage = () => {
  const [orders, setOrders] = useState([
    { product: "Pizza", price: 700, quantity: 1 },
    { product: "Hamburguesa", price: 600, quantity: 1 },
    { product: "Coca", price: 300, quantity: 1 },
    { product: "Jugo", price: 100, quantity: 1 },
  ]);

  // const OrderPage = ({ listProducts }) => {
  //   const [orders, setOrders] = useState(listProducts);

  const [observations, setObservations] = useState("");
  const [showModal, setShowModal] = useState(false);

  const calculateTotalPrice = () => {
    return orders.reduce(
      (total, order) => total + order.price * order.quantity,
      0
    );
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity >= 1) {
      const updatedOrders = [...orders];
      updatedOrders[index].quantity = newQuantity;
      setOrders(updatedOrders);
    }
  };

  const handleConfirmOrder = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="bodyPage">
      <Container className="mt-4">
        <Row>
          <Col md={6} className="d-none d-md-block">
            <Image
              src="https://i.ibb.co/RNL5rnY/Recurso-3.png"
              alt="Imagen de moto entregando pedido"
              fluid
            />
          </Col>
          <Col md={6}>
            <div className="order-summary bg-white p-4">
              <h3>Pedido del usuario</h3>
              <Table striped bordered hover responsive className="custom-table">
                <thead>
                  <tr className="text-left">
                    <th className="table-title">Producto</th>
                    <th className="table-title">Cantidad</th>
                    <th className="table-title">Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td>{order.product}</td>
                      <td>
                        <Form.Group className="mb-0">
                          <Form.Control
                            type="number"
                            value={order.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                index,
                                parseInt(e.target.value)
                              )
                            }
                            min="1"
                            className="quantity-input"
                          />
                        </Form.Group>
                      </td>
                      <td>${order.price * order.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <h5 className="mt-4">Detalles del pedido:</h5>
              <Form>
                <Form.Group controlId="observationsTextarea">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={observations}
                    onChange={(e) => setObservations(e.target.value)}
                    style={{ resize: "none" }}
                  />
                </Form.Group>
              </Form>
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="total-price large-text">
                  <strong>Total:</strong> ${calculateTotalPrice()}
                </div>
                <Button
                  variant="primary"
                  className="mt-3 custom-button"
                  onClick={handleConfirmOrder}
                >
                  Confirmar pedido
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación de Pedido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Pedido:</h5>
          <ul>
            {orders.map((order, index) => (
              <li key={index}>
                {order.quantity} x {order.product}: $
                {order.price * order.quantity}
              </li>
            ))}
          </ul>
          <p>Detalles del pedido: {observations} </p>
          <p>Total: ${calculateTotalPrice()}</p>
          <div className="text-center mt-4">
            <h4>¡Muchas gracias por su compra!</h4>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="mt-3 custom-button modal-button"
            onClick={() => {
              handleCloseModal();
              handleReloadPage();
            }}
          >
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderPage;
