import { Button, Card, Container, Form } from "react-bootstrap";
import { login } from "../helpers/queries";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import imgLogin from "../../assets/login.png";
import { useNavigate } from "react-router-dom";

const Login = ({ setActiveUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navegacion = useNavigate();

  const onSubmit = (user) => {
    login(user).then((answer) => {
      if (answer.status === 200) {
        Swal.fire(
          " Bienvenido ",
          "Ingresaste a la web pedidos rolling",
          "success"
        );

        sessionStorage.setItem("usuarioLogueado", JSON.stringify(answer));
        setActiveUser(answer);
        if (answer.rol === "usuario") {
          navegacion("/");
        } else {
          navegacion("/administrador");
        }
      } else {
        Swal.fire("Ocurrio un error", "Email o password incorrecto", "error");
      }
    });
  };

  return (
    <Container className="mainSection">
      <div className="row">
        <div className="col-md-6">
          <Card className="my-5">
            <Card.Header as="h5" className="text-center">
              Iniciar sesión
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese un email"
                    {...register("email", {
                      required: "El email es un dato obligatorio",
                      pattern: {
                        value:
                          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                        message:
                          "El email debe cumplir con un formato valido como el siguiente mail@mail.com ",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.email?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "El password es un dato obligatorio",
                      pattern: {
                        value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                        message:
                          "el password debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.password?.message}
                  </Form.Text>
                </Form.Group>
                <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  type="submit"
                  className="border-0"
                >
                  Ingresar
                </Button>
                </div>
                <p className="text-center mt-3 mb-0">
                ¿No tienes una cuenta? <a href="/registro">Regístrate</a>
              </p>
              </Form>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          
          <img src= {imgLogin} 
          alt="Imagen decorativa para login" />
        </div>
      </div>
    </Container>
  );
};

export default Login;
