import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { editProducts, obtainProducts } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarProducto = () => {
  const navegacion = useNavigate();
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  useEffect(() => {
    obtainProducts(id)
      .then((answer) => {
        if (answer) {
          setValue("nameProduct", answer.nameProduct);
          setValue("description", answer.description);
          setValue("price", answer.price);
          setValue("image", answer.image);
          setValue("category", answer.category);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (product) => {
    editProducts(id, product)
      .then((answer) => {
        if (answer.status === 200) {
          Swal.fire(
            "producto editado",
            "su producto se edito correctamente",
            "success"
          );
        }
        navegacion("/administrador");
      })
      .catch((error) => {
        Swal.fire(
          "hubo un error ",
          "se produjo un error al editar producto",
          "error"
        );
      });
  };
  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Editar producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Cafe"
            {...register("nameProduct", {
              required: "ingrese un producto valido",
            })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>descripcion de producto</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            placeholder="Leave a comment here"
            {...register("description", {
              required: "ingrese un producto valido",
            })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("price", {
              required: "ingrese un precio valido",
            })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("image", {
              required: "La url de la imagen es obligatoria",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una URL valida",
              },
            })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            {...register("category", {
              required: "ingrese una categoria valida",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="sandwiches">sandwiches</option>
            <option value="pizzas">pizzas</option>
            <option value="picadas">picadas</option>
            <option value="bebidas">bebidas</option>
          </Form.Select>
        </Form.Group>
        <Button className="my-3" variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarProducto;
