import React from "react";
import { Navigate } from "react-router-dom";

const EncapsularRutas = ({ children }) => {
  const usuarioLogueado =
    JSON.parse(sessionStorage.getItem("usuarioLogueado")) || null;
  if (!usuarioLogueado) {
    return <Navigate to={"/login"} />;
  } else if (usuarioLogueado.rol === "usuario") {
    return <Navigate to={"/"} />;
  } else {
    return children;
  }
};

export default EncapsularRutas;