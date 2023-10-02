const uriUser = import.meta.env.VITE_API_LOGIN;
const uriProducts = import.meta.env.VITE_API_PRODUCTOS;

export const obtenerProduct = async (id) => {
  try {
    console.log(id);
    const resp = await fetch(`${uriProducts}/${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const listUsers = async () => {
  try {
    const resp = await fetch(uriUser);
    const userList = await resp.json();
    return userList;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createUser = async (user) => {
  try {
    const resp = await fetch(`${uriUser}/crear`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (user) => {
  try {
    const respuesta = await fetch(uriUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      mensaje: datos.mensaje,
      user: datos.nombre,
      uid: datos.uid,
    };
  } catch (error) {
    return;
  }
};

export const listProducts = async () => {
  try {
    const resp = await fetch(uriProducts);
    const productList = await resp.json();
    return productList;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const tolistProducts = async () => {
  try {
    const answer = await fetch(uriProducts);

    const tolistProducts = await answer.json();
    console.log(tolistProducts);
    return tolistProducts;
  } catch (error) {
    console.log(error);
  }
};

export const createProducts = async (product) => {
  try {
    const resp = await fetch(uriProducts, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(product),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const obtainProducts = async (id) => {
  try {
    const resp = await fetch(`${uriProducts}/${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editProducts = async (id, productEdit) => {
  try {
    const resp = await fetch(`${uriProducts}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productEdit),
    });
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProducts = async (id) => {
  try {
    const respuesta = await fetch(`${uriProducts}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
