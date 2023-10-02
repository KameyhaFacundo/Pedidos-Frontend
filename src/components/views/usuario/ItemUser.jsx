const ItemUser = ({ user }) => {
  return (
    <tr>
      <th scope="row">{user._id}</th>
      <td>{user.nickname}</td>
      <td>{user.email}</td>
      <td>{user.rol}</td>
      <td>{user.state ? "Activo" : "Desactivo"}</td>
    </tr>
  );
};

export default ItemUser;
