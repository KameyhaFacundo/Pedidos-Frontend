const uriProducts = import.meta.env.VITE_API_PRODUCTO;

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
