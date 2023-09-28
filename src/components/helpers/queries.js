const uriUser = import.meta.env.VITE_API_USUARIO;
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
