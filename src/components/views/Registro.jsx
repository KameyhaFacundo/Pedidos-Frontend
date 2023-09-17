import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (user) => {
    console.log(user);
  };

  return (
    <Container className="my-4">
      <div className="card shadow">
        <div className="row justify-content-center g-0">
          <div className="col-md-6 d-flex align-items-center">
            <img
              src="/street-food.svg"
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
                <div className="d-grid mx-auto col col-md-8 my-4">
                  <Button type="submit">Registrarse</Button>
                </div>
                <p className="card-text text-center">
                  <small className="text-body-secondary">
                    ¿Ya tienes cuenta? <a href="">Iniciar sesión</a>
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
