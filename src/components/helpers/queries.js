// const uriUser = import.meta.env.VITE_API_USUARIO;
const uriProducts = import.meta.env.VITE_API_PRODUCTOS;

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
export const tolistProducts = async () => {
  try {
    const answer = await fetch(uriProduct);

    const tolistProducts = await answer.json();
    console.log(tolistProducts);
    return tolistProducts;
  } catch (error) {
    console.log(error);
  }
};

export const createProducts = async (product) => {
  try {
    const resp = await fetch(uriProduct, {
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
    const resp = await fetch(`${uriProduct}/${id}`);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editProducts = async (id, productEdit) => {
  try {
    const resp = await fetch(`${uriProduct}/${id}`, {
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
    const respuesta = await fetch(`${uriProduct}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
