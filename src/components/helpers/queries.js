const uriUser = import.meta.env.VITE_API_USUARIO;

export const listUsers = async () => {
  try {
    const resp = await fetch(uriUser);
    const userList = await resp.json();
    return userList;
  } catch (error) {
    console.log(error);
    return null;
  }
};
