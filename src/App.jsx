import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route exact path="/" element={<Inicio></Inicio>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route
            exact
            path="/acerca-de-nosotros"
            element={<AcercaDeNosotros></AcercaDeNosotros>}
          ></Route>
          <Route
            exact
            path="/detalle-de-producto"
            element={<DetalleProducto></DetalleProducto>}
          ></Route>
          <Route exact path="/registro" element={<Registro></Registro>}></Route>
          <Route
            exact
            path="/administracion"
            element={<Administrador></Administrador>}
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
