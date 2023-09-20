const uriUsuario = import.meta.env.VITE_API_USUARIO;

const fetchData = async (url) => {
  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(uriUsuario);
    const listaUsuarios = await respuesta.json();

    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
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

export const listarUsuarios = async () => {
  return fetchData(uriUsuario);
};
