import { useEffect, useState } from "react";
import { listUsers } from "../helpers/queries";
import ItemUser from "./usuario/ItemUser";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faUtensils,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Administrador = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    document.title = "Administración | usuarios";
    listUsers()
      .then((respUser) => {
        if (respUser) {
          console.log(respUser);
          setUsers(respUser);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="container my-4">
      <div className="row">
        <div className="col">
          <div className="d-grid gap-2 mb-4 d-md-flex justify-content-md-end">
            <Link className="btn btn-primary" to={"/"}>
              <FontAwesomeIcon className="mx-2" icon={faUtensils} />
              Productos
            </Link>
            <Link className="btn btn-success" to={"/"}>
              <FontAwesomeIcon className="mx-2" icon={faCartShopping} />
              Pedidos
            </Link>
          </div>
          <h3 className="text-center mb-4">
            <FontAwesomeIcon className="mx-2" icon={faUser} />
            administración de usuarios
          </h3>
          <hr />
          {users.length === 0 ? (
            <h5 className="text-center">No hay usuarios para cargar.</h5>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover border shadow">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Apodo</th>
                    <th scope="col">Correo electrónico</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <ItemUser key={user._id} user={user} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Administrador;
