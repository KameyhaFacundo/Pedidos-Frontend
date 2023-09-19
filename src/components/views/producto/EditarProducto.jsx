import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { editarProducto, obtenerProducto } from "../../helpers/queries";
import Swal from "sweetalert2";

const EditarProducto = () => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  // esta funcion pide logear al usuario
  useEffect(() => {
    obtenerProducto(id)
      .then((respuesta) => {
        if (respuesta) {
          setValue("nombreProducto", respuesta.nombreProducto);
          setValue("descripcion", respuesta.descripcion);
          setValue("precio", respuesta.precio);
          setValue("imagen", respuesta.imagen);
          setValue("categoria", respuesta.categoria);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (producto) => {
    console.log("aca agrego logica");
    console.log(producto);

    editarProducto(id, producto)
      .then((respuesta) => {
        if (respuesta.status === 200) {
          Swal.fire(
            "producto editado",
            "su producto se edito correctamente",
            "success"
          );
        }
      })
      .catch((error) => {
        console.log(error);
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
            {...register("nombreProducto", {
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
            {...register("descripcion", {
              required: "ingrese un producto valido",
            })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: 50"
            {...register("precio", {
              required: "ingrese un precio valido",
            })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("imagen", {
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
            {...register("categoria", {
              required: "ingrese una categoria valida",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="bebida caliente">Bebida caliente</option>
            <option value="bebida fria">Bebida fria</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default EditarProducto;
