import { allProducts } from "../common/ListProduct";
export const searchProductId = (id) => {
    const productoEncontrado = allProducts.find((producto) => producto.id === id);
  
    return productoEncontrado;
  };