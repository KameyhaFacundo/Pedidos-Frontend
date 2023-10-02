import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../helpers/queries.js";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const Registro = () => {
  useEffect(() => {
    document.title = " nombre pagina | Registro";
  }, []);

  const [showSpinner, setShowSpinner] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (user) => {
    user.rol = "usuario";
    setShowSpinner(true);
    createUser(user)
      .then((resp) => {

        if (!resp.ok) {
          setShowSpinner(false);
          return Swal.fire({
            icon: "error",
            title:
              "<h5>Ya existe un usuario con ese apodo o correo electrónico</h5>",
            text: "prueba con otro apodo o correo electrónico.",
          });
        }

        reset();
        Swal.fire({
          icon: "success",
          title: "<h5>Usuario registrado</h5>",
          text: "Redirigiendo para iniciar sesion",
          showConfirmButton: false,
          timer: 2500,
          didOpen: () => {
            setTimeout(() => {
              navigate("/login");
            }, 2500);
          },
        });
        setShowSpinner(false);
      })
      .catch((error) => {
        setShowSpinner(false);
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "<h5>Hubo un error</h5>",
          text: "Intentalo mas tarde",
        });
      });
  };

  return (
    <Container className="my-4">
      <div className="card border border-5 shadow">
        <div className="row justify-content-center g-0">
          <div className="col-md-6 d-flex align-items-center">
            <img
              src="/chef.svg"
              className="img-fluid p-3"
              alt="Camión de comida"
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title text-center">Registrarse</h5>
              <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="nickname">
                  <Form.Label>Apodo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese un apodo"
                    isInvalid={errors.nickname}
                    {...register("nickname", {
                      required: "El apodo es un dato obligatorio.",
                      minLength: {
                        value: 2,
                        message: "El apodo debe de tener minimo 2 caracteres.",
                      },
                      maxLength: {
                        value: 15,
                        message: "El apodo debe de tener maximo 15 caracteres.",
                      },
                    })}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.nickname?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su correo electrónico"
                    isInvalid={errors.email}
                    {...register("email", {
                      required: "El correo electrónico es un dato obligatorio.",
                      minLength: {
                        value: 6,
                        message:
                          "El correo electrónico debe de tener minimo 6 caracteres.",
                      },
                      maxLength: {
                        value: 200,
                        message:
                          "El correo electrónico debe de tener maximo 200 caracteres.",
                      },
                      pattern: {
                        value: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/i,
                        message:
                          "El correo electrónico no cumple con un formato valido.",
                      },
                    })}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese una contraseña"
                    isInvalid={errors.password}
                    {...register("password", {
                      required: "La contraseña es un dato obligatorio.",
                      minLength: {
                        value: 8,
                        message:
                          "La contraseña debe de de tener minimo 8 caracteres.",
                      },
                      maxLength: {
                        value: 18,
                        message:
                          "La contraseña debe de de tener maximo 18 caracteres.",
                      },
                      pattern: {
                        value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S+$/,
                        message:
                          "La contraseña debe tener al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                      },
                    })}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="confirmPassword">
                  <Form.Label>Confirmar contraseña</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Vuelva a ingresar la contraseña"
                    isInvalid={errors.confirmPassword?.message}
                    {...register("confirmPassword", {
                      required:
                        "La repeticion de la contraseña es obligatorio.",
                      validate: (value) =>
                        value === watch("password") ||
                        "Las contraseñas no coinciden.",
                    })}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword?.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="checkTermsConditions">
                  <Form.Check
                    type="checkbox"
                    label="Acepto los términos y condiciones."
                    {...register("checkTermsConditions", {
                      required: "Debes de aceptar los términos y condiciones",
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.checkTermsConditions?.message}
                  </Form.Text>
                </Form.Group>
                {showSpinner ? (
                  <div className="d-grid mx-auto col col-md-8 my-4">
                    <button className="btn btn-primary" type="button" disabled>
                      <span
                        className="spinner-border spinner-border-sm"
                        aria-hidden="true"
                      ></span>
                      <span role="status">Cargando...</span>
                    </button>
                  </div>
                ) : (
                  <div className="d-grid mx-auto col col-md-8 my-4">
                    <Button type="submit">Registrarse</Button>
                  </div>
                )}

                <p className="card-text text-center">
                  <small className="text-body-secondary">
                    ¿Ya tienes cuenta?
                    <Link to="/login" className="mx-1 text-decoration-none">
                      Iniciar sesión
                    </Link>
                  </small>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Registro;
