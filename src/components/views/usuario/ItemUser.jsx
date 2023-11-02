const ItemUser = ({ user }) => {
  return (
    <tr>
      <td>{user.nickname}</td>
      <td>{user.email}</td>
      <td>{user.rol}</td>
      <td>{user.state ? "Activo" : "Desactivo"}</td>
    </tr>
  );
};

export default ItemUser;
