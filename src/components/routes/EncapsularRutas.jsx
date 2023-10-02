import React from "react";
import { Navigate } from "react-router-dom";

const EncapsularRutas = ({ children }) => {
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || 0;
  if (!usuarioLogueado || usuarioLogueado.rol !== "administrador") {
    return <Navigate to={"/login"} />;
  } else if (usuarioLogueado.rol === "usuario") {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};

export default EncapsularRutas;
