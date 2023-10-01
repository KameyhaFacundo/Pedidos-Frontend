import React from "react";
import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";
import ProductAdmin from "../views/ProductAdmin";

function RutasProtegidas() {
  return (
    <Routes>
      <Route exact path="/" element={<Administrador></Administrador>}></Route>
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
    </Routes>
  );
}

export default RutasProtegidas;
