const uriUsuario = import.meta.env.VITE_API_USUARIO;

export const login = async (usuario) =>{
    try {
        console.log(usuario);
    const respuesta = await fetch(uriUsuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      mensaje: datos.mensaje,
      usuario: datos.nombre,
      uid: datos.uid,
    };
    } catch (error) {
        return;
  }
};