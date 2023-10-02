import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";
import ProductAdmin from "../views/ProductAdmin";
import Pedidos from "../views/Pedidos";

const RutasProtegidas = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Administrador></Administrador>}></Route>
      <Route
        exact
        path="/crear"
        element={<CrearProducto></CrearProducto>}
      ></Route>
      <Route
        exact
        path="/editar/:id"
        element={<EditarProducto></EditarProducto>}
      ></Route>
      <Route
        exact
        path="/productos"
        element={<ProductAdmin></ProductAdmin>}
      ></Route>
      <Route exact path="/pedidos" element={<Pedidos></Pedidos>}></Route>
    </Routes>
  );
};

export default RutasProtegidas;
