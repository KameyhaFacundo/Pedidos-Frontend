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
