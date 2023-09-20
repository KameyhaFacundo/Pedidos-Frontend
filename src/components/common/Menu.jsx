import React from "react";
import { Container, Button, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { listarUsuarios } from "../helpers/queries";

const Menu = ({ setUsuarioActivo, usuarioActivo }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [admin, setAdmin] = useState([]);

  const navagacion = useNavigate();

  useEffect(() => {
    listarUsuarios().then((usuario) => {
      setUsuarios(usuario);
    });
  }, []);

  useEffect(() => {
    usuarios.map((usuariobuscado) => {
      if (usuariobuscado.id === usuarioActivo) {
        setAdmin(usuariobuscado.rol);
      }
    });
  }, [usuarios]);

  const cerrarSesion = () => {
    setUsuarioActivo(0);
    sessionStorage.removeItem("usuarioLogeado");
    window.location.reload();
    navagacion("/");
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-dark sticky-top body-nav p-0"
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
              {usuarioActivo.id === 0 ? (
                <>
                  <Link to={"/acerca-de-nosotros"}>
                    <Button variant="light" className="mx-1" type="submit">
                      Acerca de Nosotros
                    </Button>
                  </Link>
                  <Link to={"/login"}>
                    <Button className="mx-1" variant="danger" type="submit">
                      Iniciar sesión
                    </Button>
                  </Link>
                  <Link to={"/registro"}>
                    <Button variant="light" className="mx-1" type="submit">
                      Registro
                    </Button>
                  </Link>

                  {/* <Login className="h-25" /> */}
                </>
              ) : usuarioActivo.rol === true ? (
                <>
                  <Nav>
                    <Link to={"/administrador"}>
                      <Button
                        className="mx-1 buttonx"
                        variant="secondary"
                        type="submit"
                      >
                        Administrador
                      </Button>
                    </Link>
                  </Nav>
                  <Link to={"/micuenta"}>
                    <Button className="buttonx mx-1" variant="secondary">
                      Mi Cuenta
                    </Button>
                  </Link>

                  <Nav>
                    <Link to={"/acerca-de-nosotros"}>
                      <Button
                        className="mx-1"
                        variant="secondary"
                        type="submit"
                      >
                        Acerca de Nosotros
                      </Button>
                    </Link>
                    <Link to={"/administrador"} className="mr-5">
                      <Button
                        className="mx-1 mr-5"
                        variant="danger"
                        onClick={() => {
                          cerrarSesion();
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
                    <Button variant="secondary" className="mx-1" type="submit">
                      Acerca de Nosotros
                    </Button>
                  </Link>
                  <Link to={"/micuenta"}>
                    <Button variant="secondary" className="mx-1" type="submit">
                      Mi Cuenta
                    </Button>
                  </Link>
                  <Link to={"/"} className="mr-5">
                    <Button
                      className=" mx-1 mr-5 "
                      variant="danger"
                      onClick={() => {
                        cerrarSesion();
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
