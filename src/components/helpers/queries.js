const uriUsuario = import.meta.env.VITE_API_USUARIO;
const uriProductos = import.meta.env.VITE_API_PRODUCTOS;

const fetchData = async (url) => {
  try {
    const answer = await fetch(url);
    const data = await answer.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const login = async (usuario) => {
  try {
    const answer = await fetch(uriUsuario);
    const listUser = await answer.json();

    const searchUser = listUser.find(
      (itemUsuario) => itemUser.email === user.email
    );
    if (searchUser) {
      if (searchUser.password === user.password) {
        return searchUser;
      } else {
        return null;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const listUser = async () => {
  return fetchData(uriUsuario);
};

export const listProducts = async () => {
  return fetchData(uriProductos);
};
