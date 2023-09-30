import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { createProducts, obtainProducts } from "../../helpers/queries";
import { useNavigate } from "react-router-dom";

const CrearProducto = () => {
  const navegacion = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm(() => {
    obtainProducts(id)
      .then((answer) => {
        if (answer) {
          setValue("nameProduct", answer.product);
        }
      })
      .catch((error) => {});
  });

  const onSubmit = (product) => {
    console.log("aca agrego logica");
    console.log(product);

    createProducts(product)
      .then((answer) => {
        if (answer.status === 201) {
          Swal.fire(
            "producto guardado",
            "su producto se guardo correctamente",
            "success"
          );
          reset();
          navegacion("/administracion/pedido");
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire(
          "hubo un error ",
          "se produjo un error al cargar producto",
          "error"
        );
      });
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">Nuevo producto</h1>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>Producto*</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Ej: Cafe"
            {...register("nameProduct", {
              required: "ingrese un producto valido",
              minLength: {
                value: 2,
                message: "Debe ingresar como minimo 2 caracteres",
              },
              maxLength: {
                value: 50,
                message: "Debe ingresar como maximo 50 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nameProduct?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formNombreProdcuto">
          <Form.Label>descripcion del producto</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            required
            placeholder="ingrese una descripcion del producto"
            {...register("description", {
              required: "ingrese una descripcion valida",
            })}
          />

          <Form.Text className="text-danger">
            {errors.description?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio*</Form.Label>
          <Form.Control
            type="number"
            required
            placeholder="Ej: 50"
            {...register("price", {
              required: "ingrese un precio valido",
              min: {
                value: 1,
                message: "El precio como minimo debe ser de $1",
              },
              max: {
                value: 10000,
                message:
                  "El precio del producto como maximo debe ser de $10000",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.price?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            required
            placeholder="Ej: https://www.pexels.com/es-es/vans-en-blanco-y-negro-fuera-de-la-decoracion-para-colgar-en-la-pared-1230679/"
            {...register("image", {
              required: "La url de la imagen es obligatoria",
              pattern: {
                value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                message: "Debe ingresar una URL valida",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.image?.message}</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Categoria*</Form.Label>
          <Form.Select
            required
            {...register("category", {
              required: "debe seleccionar una categoria",
            })}
          >
            <option value="">Seleccione una opcion</option>
            <option value="sandwiches">Sandwiches</option>
            <option value="pizzas">Pizzas</option>
            <option value="picadas">Picadas</option>
            <option value="bebidas">Bebidas</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.category?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default CrearProducto;
