import CardProducto from "../views/producto/CardProducto";
import { Button } from 'react-bootstrap'

export const allProducts = [
    {
      id: 2,
      name: 'Milanesas a la Napolitana con papas fritas',
      price: 2800,
      images: 'https://example.com/milanesa-napo-papas.jpg',
      category: 'Minutas',
      description: 'Milanesas a la Napolitana con papas fritas y ensalada',
    },
    {
      id: 3,
      name: 'Milanesas de pollo a la Napolitana',
      price: 2400,
      images: 'https://example.com/milanesa-pollo-napo.jpg',
      category: 'Minutas',
      description: 'Milanesas de pollo a la Napolitana con ensalada',
    },
    {
      id: 4,
      name: 'Milanesas de carne con puré de papas',
      price: 2700,
      images: 'https://example.com/milanesa-carne-pure.jpg',
      category: 'Minutas',
      description: 'Milanesas de carne con puré de papas y ensalada',
    },
  ];
const ListProduct = () => {
    
     
    return (
        <ul>
        {allProducts.map((producto) => (
          <li key={producto.id}>
            <h3>{producto.name}</h3>
            <p>{producto.description}</p>
            <p>Precio: {producto.price}</p>
            <Button href={`/productos/${producto.id}`}>
    Ver Mas
            </Button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default ListProduct;