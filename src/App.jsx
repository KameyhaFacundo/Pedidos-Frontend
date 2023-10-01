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
import Pedidos from "./components/views/Pedidos";
import Administrador from "./components/views/Administrador";
import { useState } from "react";
import ProductAdmin from "./components/views/ProductAdmin";
import CrearProducto from "./components/views/producto/CrearProducto";
import EditarProducto from "./components/views/producto/EditarProducto";

function App() {
  const userNoLogueado = {
    id: 0,
    rol: false,
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
            element={<Login setActiveUser={setActiveUser}></Login>}
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
            path="/administracion"
            element={<Administrador></Administrador>}
          ></Route>
          <Route
            exact
            path="/administracion/pedido"
            element={<ProductAdmin></ProductAdmin>}
          ></Route>
          <Route
            exact
            path="/administracion/editar/:id"
            element={<EditarProducto></EditarProducto>}
          ></Route>
          <Route
            exact
            path="/administracion/crear"
            element={<CrearProducto></CrearProducto>}
          ></Route>
          <Route exact path="/pedidos" element={<Pedidos></Pedidos>}></Route>
          <Route exact path="*" element={<Error404></Error404>}></Route>
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
