import React from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listUsers } from "../helpers/queries";

const Menu = ({ setActiveUser, activeUser }) => {
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    if (!activeUser || !Array.isArray(users)) {
      return;
    }
    const searchUser = users.find((user) => user.id === activeUser);

    if (searchUser) {
      setAdmin(searchUser.rol);
    }
  }, [users, activeUser]);

  useEffect(() => {
    listUsers().then((user) => {
      setUsers(user);
    });
  }, []);

  const logOut = () => {
    setActiveUser(0);
    sessionStorage.removeItem("usuarioLogueado");
    localStorage.removeItem("contadorCarrito");
    localStorage.removeItem("carrito");
    window.location.href = "/";
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="sticky-top body-nav p-0 bg-color"
      >
        <Container className="mb-2">
          <Navbar.Brand>
            <Link to={"/"}>
              <img
                className="login"
                src="https://res.cloudinary.com/dgzimgpia/image/upload/v1696038559/logo_shsofa.png"
                alt="logo"
                onError={(e) => {
                  e.target.src = "https://i.stack.imgur.com/lnYep.png";
                }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav buttons-nav" />
          <Navbar.Collapse id="responsive-navbar-nav collapsex buttons-nav">
            <Nav className="me-auto buttons-nav">
              {(() => {
                if (activeUser.id === 0 && activeUser.rol !== "administrador") {
                  return (
                    <>
                      <Link to={"/acerca-de-nosotros"} className="text-center">
                        <Button
                          className="mx-1 color-button mt-2"
                          type="submit"
                        >
                          Acerca de Nosotros
                        </Button>
                      </Link>
                      <Link to={"/login"} className="text-center">
                        <Button
                          className="mx-1 color-button mt-2"
                          type="submit"
                        >
                          Iniciar sesión
                        </Button>
                      </Link>
                      <Link to={"/registro"} className="text-center">
                        <Button
                          className="mx-1 color-button my-2"
                          type="submit"
                        >
                          Registro
                        </Button>
                      </Link>
                    </>
                  );
                } else if (activeUser.rol === "administrador") {
                  return (
                    <>
                      <Link to={"/acerca-de-nosotros"} className="text-center">
                        <Button
                          className="mx-1 color-button mt-2"
                          type="submit"
                        >
                          Acerca de Nosotros
                        </Button>
                      </Link>

                      <Link to={"/administrador"} className="text-center">
                        <Button
                          className="mx-1 color-button mt-2"
                          type="submit"
                        >
                          Administrador
                        </Button>
                      </Link>

                      <Link className="mr-5 text-center">
                        <Button
                          // className="mx-1 mr-5 close-button"
                          className="mx-1 close-button mt-2"
                          onClick={() => {
                            logOut();
                          }}
                        >
                          Cerrar sesión
                        </Button>
                      </Link>
                    </>
                  );
                } else {
                  return (
                    <>
                      <Link to={"/acerca-de-nosotros"} className="text-center">
                        <Button className="mx-1 color-button" type="submit">
                          Acerca de Nosotros
                        </Button>
                      </Link>

                      <Nav>
                        <Link to={"/order"} className="text-center">
                          <Button className="mx-1 color-button" type="submit">
                            Pedidos
                          </Button>
                        </Link>
                      </Nav>
                      <Link className="mr-5 text-center">
                        <Button
                          className=" mx-1 mr-5 close-button"
                          onClick={() => {
                            logOut();
                          }}
                        >
                          Cerrar sesión
                        </Button>
                      </Link>
                    </>
                  );
                }
              })()}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
