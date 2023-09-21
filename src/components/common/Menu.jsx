import React from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { listUser } from "../helpers/queries";

const Menu = ({ setActiveUser, activeUser }) => {
  const [user, setUser] = useState([]);
  const [admin, setAdmin] = useState([]);

  const navigation = useNavigate();

  useEffect(() => {
    listUser().then((user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    user.map((searchUser) => {
      if (searchUser.id === activeUser) {
        setAdmin(searchUser.rol);
      }
    });
  }, [user]);

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
                src="https://i.stack.imgur.com/lnYep.png"
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
              {activeUser.id === 0 ? (
                <>
                  <Link to={"/acerca-de-nosotros"}>
                    <Button className="mx-1 custom-button mt-2" type="submit">
                      Acerca de Nosotros
                    </Button>
                  </Link>
                  <Link to={"/login"}>
                    <Button className="mx-1 color-button mt-2" type="submit">
                      Iniciar sesión
                    </Button>
                  </Link>
                  <Link to={"/registro"}>
                    <Button className="mx-1 color-button my-2" type="submit">
                      Registro
                    </Button>
                  </Link>

                  {/* <Login className="h-25" /> */}
                </>
              ) : activeUser.rol === true ? (
                <>
                  <Nav>
                    <Link to={"/administrador"}>
                      <Button className="mx-1 color-button" type="submit">
                        Administrador
                      </Button>
                    </Link>
                  </Nav>
                  {/* <Link to={"/micuenta"}>
                    <Button className="buttonx mx-1" variant="secondary">
                      Mi Cuenta
                    </Button>
                  </Link> */}

                  <Nav>
                    <Link to={"/acerca-de-nosotros"}>
                      <Button className="mx-1 custom-button" type="submit">
                        Acerca de Nosotros
                      </Button>
                    </Link>
                    <Link to={"/administrador"} className="mr-5">
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
                  <Link to={"/acerca-de-nosotros"}>
                    <Button className="mx-1 custom-button" type="submit">
                      Acerca de Nosotros
                    </Button>
                  </Link>
                  {/* <Link to={"/micuenta"}>
                    <Button variant="secondary" className="mx-1" type="submit">
                      Mi Cuenta
                    </Button>
                  </Link> */}
                  <Link to={"/"} className="mr-5">
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Menu;
