import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/views/Inicio";
import Login from "./components/views/Login";
import AcercaDeNosotros from "./components/views/AcercaDeNosotros";
import Registro from "./components/views/Registro";
import DetalleProducto from "./components/views/DetalleProducto";
import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import { useState } from "react";
import EncapsularRutas from "./components/routes/EncapsularRutas";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import Order from "./components/views/Order";

function App() {
  const userNoLogueado = {
    id: 0,
    rol: "usuario",
  };
  const userOnline =
    JSON.parse(sessionStorage.getItem("usuarioLogeado")) || userNoLogueado;

  const [activeUser, setActiveUser] = useState(userOnline);
  return (
    <>
      <BrowserRouter>
        <Menu setActiveUser={setActiveUser} activeUser={activeUser}></Menu>
        <Routes>
          <Route
            exact
            path="/"
            element={<Inicio activeUser={activeUser}></Inicio>}
          ></Route>
          <Route
            exact
            path="/login"
            element={
              <Login
                setActiveUser={setActiveUser}
                activeUser={activeUser}
              ></Login>
            }
          ></Route>
          <Route
            exact
            path="/acerca-de-nosotros"
            element={<AcercaDeNosotros></AcercaDeNosotros>}
          ></Route>
          <Route
            exact
            path="/detalle/:id"
            element={
              <DetalleProducto activeUser={activeUser}></DetalleProducto>
            }
          ></Route>
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
          <Route
            exact
            path="/administrador/*"
            element={
              <EncapsularRutas>
                <RutasProtegidas />
              </EncapsularRutas>
            }
          ></Route>
          <Route exact path="/order" element={<Order />}></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
