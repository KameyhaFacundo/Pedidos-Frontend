import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteProducts, tolistProducts } from "../../helpers/queries.js";
import Swal from "sweetalert2";

const ItemProducto = ({
  _id,
  nameProduct,
  price,
  image,
  category,
  setProducts,
}) => {
  const deleteProductAdmin = () => {
    Swal.fire({
      title: "¿Esta seguro de eliminar producto?",
      text: "No se puede revertir este paso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProducts(_id).then((answer) => {
          if (answer.status === 200) {
            tolistProducts().then((answer) => {
              setProducts(answer);
            });
            Swal.fire(
              "Producto eliminado",
              "El producto fue correctamente borrado del catalogo",
              "success"
            );
          } else {
            Swal.fire(
              "Se produjo un error",
              "Intente realizar esta operación mas tarde",
              "error"
            );
          }
        });
      }
    });
  };

  return (
    <tr>
      <td>{_id}</td>
      <td>{nameProduct}</td>
      <td>$ {price}</td>
      <td>
        <img className="w-25" src={image} alt="MDN" />
      </td>
      <td>{category}</td>
      <td>
        <Link
          className="btn btn-warning mb-1 text-center bg-orange border-0 px-3"
          to={`/administrador/editar/${_id}`}
        >
          Editar
        </Link>
        <Button
          variant="danger"
          className="text-center px-2 color-green border-0"
          onClick={deleteProductAdmin}
        >
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
