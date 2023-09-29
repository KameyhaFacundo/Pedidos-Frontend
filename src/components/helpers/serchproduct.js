import { allProducts } from "../../data/dataProducts";


export const searchProductId = (id) => {
    const productoEncontrado = allProducts.find((producto) => producto.id === id);
  
    return productoEncontrado;
  };