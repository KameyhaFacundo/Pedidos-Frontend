import React from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { listUsers } from "../helpers/queries";

const Menu = ({ setActiveUser, activeUser }) => {
  const [users, setUsers] = useState([]);
  const [admin, setAdmin] = useState([]);

  const navigation = useNavigate();

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
    sessionStorage.removeItem("usuarioLogeado");
    window.location.reload();
    navigation("/");
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="sticky-top body-nav p-0 bg-color"
      >
        <Container>
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
            {/* <Nav className="me-auto buttons-nav">
              {activeUser.id === 0 ? (
                <>
                  <Link to={"/acerca-de-nosotros"} className="text-center">
                    <Button
                      className="mx-1 custom-button-acerc mt-2"
                      type="submit"
                    >
                      Acerca de Nosotros
                    </Button>
                  </Link>
                  <Link to={"/login"} className="text-center">
                    <Button className="mx-1 color-button mt-2" type="submit">
                      Iniciar sesión
                    </Button>
                  </Link>
                  <Link to={"/registro"} className="text-center">
                    <Button className="mx-1 color-button my-2" type="submit">
                      Registro
                    </Button>
                  </Link>
                </>
              ) : activeUser.rol === "administrador" ? (
                <>
                  <Nav>
                    <Link to={"/administracion"} className="text-center">
                      <Button className="mx-1 color-button" type="submit">
                        Administrador
                      </Button>
                    </Link>
                  </Nav>
                  <Nav>
                    <Link to={"/acerca-de-nosotros"} className="text-center">
                      <Button
                        className="mx-1 custom-button-acerc"
                        type="submit"
                      >
                        Acerca de Nosotros
                      </Button>
                    </Link>
                    <Link to={"/administracion"} className="mr-5 text-center">
                      <Button
                        className="mx-1 mr-5 close-button"
                        onClick={() => {
                          logOut();
                        }}
                      >
                        Cerrar sesión
                      </Button>
                    </Link>
                  </Nav>
                </>
              ) : (
                <>
                  <Link to={"/acerca-de-nosotros"} className="text-center">
                    <Button className="mx-1 custom-button-acerc" type="submit">
                      Acerca de Nosotros
                    </Button>
                  </Link>
                  <Link to={"/pedido"} className="text-center">
                    <Button variant="secondary" className="mx-1" type="submit">
                      Mis Pedidos
                    </Button>
                  </Link>
                  <Link to={"/"} className="mr-5 text-center">
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
              )}
            </Nav> */}
            <Nav className="me-auto buttons-nav">
              {(() => {
                if (activeUser.id === 0) {
                  return (
                    <>
                      <Link to={"/acerca-de-nosotros"} className="text-center">
                        <Button
                          className="mx-1 custom-button-acerc mt-2"
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
                      <Nav>
                        <Link to={"/administracion"} className="text-center">
                          <Button className="mx-1 color-button" type="submit">
                            Administrador
                          </Button>
                        </Link>
                      </Nav>
                      <Nav>
                        <Link
                          to={"/acerca-de-nosotros"}
                          className="text-center"
                        >
                          <Button
                            className="mx-1 custom-button-acerc"
                            type="submit"
                          >
                            Acerca de Nosotros
                          </Button>
                        </Link>
                        <Link
                          to={"/administracion"}
                          className="mr-5 text-center"
                        >
                          <Button
                            className="mx-1 mr-5 close-button"
                            onClick={() => {
                              logOut();
                            }}
                          >
                            Cerrar sesión
                          </Button>
                        </Link>
                      </Nav>
                    </>
                  );
                } else {
                  return (
                    <>
                      <Link to={"/acerca-de-nosotros"} className="text-center">
                        <Button
                          className="mx-1 custom-button-acerc"
                          type="submit"
                        >
                          Acerca de Nosotros
                        </Button>
                      </Link>
                      <Link to={"/"} className="mr-5 text-center">
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
