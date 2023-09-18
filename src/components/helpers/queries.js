const uriProducto = import.meta.env.VITE_API_PRODUCTO;

export const listarProductos = async () => {
  try {
    const respuesta = await fetch(uriProducto);

    const listaProductos = await respuesta.json();
    console.log(listarProductos);
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};
// POST
export const crearProducto = async (producto) => {
  try {
    const resp = await fetch(uriProducto, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(producto),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProducto = async (id) => {
  try {
    const resp = await fetch(`${uriProducto}/${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editarProducto = async (id, productoEditado) => {
  try {
    const resp = await fetch(`${uriProducto}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productoEditado),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${uriProducto}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
