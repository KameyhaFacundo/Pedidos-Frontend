

const onSubmit = (usuario)=>{
    console.log('aqui agrego mi logica')
    console.log(usuario)
    login(usuario).then((respuesta)=>{
      console.log(respuesta)
      if(respuesta.status === 200){
        Swal.fire(
          'Bienvenido '+ respuesta.usuario,
          'Ingresaste a la web cafecito',
          'success'
        )
        // guardar el usuario en el localstorage o sessionStorage;
        sessionStorage.setItem('usuarioLogueado', JSON.stringify(respuesta));
        setUsuarioActivo(respuesta);
        navegacion('/administrador')
      }else{
        Swal.fire(
          'Ocurrio un error',
          'Email o password incorrecto',
          'error'
        )
      }
    })

  }