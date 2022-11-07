class Usuario{
  constructor(nombre,password,email, provincia, localidad, direccion){
  this.nombre = nombre;
  this.password = password;
  this.email = email;
  this.provincia = provincia;
  this.localidad = localidad;
  this.direccion = direccion;
}
}

const listaUsuarios = [{
  nombre: "Juan Perez",
  password: 1234,
  email: "juanp@gmail.com",
  provincia: "Chaco",
  localidad: "ciudad",
  direccion: "avenida 123",
}];


//Para usuarios que ya tienen una sesión
const validarUsuario = () => {
let nombreUsuario = document.getElementById("nombreUsuario").value;
let contrasenia = document.getElementById ("password").value;
let respuestaUsuarioNombre = document.getElementById("respuestaNombreUsuario");
let respuestaPassword = document.getElementById("respuestaPassword");

let entrar = false
  if(listaUsuarios.some((persona) => persona.nombre == nombreUsuario) && (nombreUsuario == "Juan Perez")){
  entrar = true
  
  respuestaUsuarioNombre.innerHTML = `<p> Usuario correcto </p>`
  respuestaUsuarioNombre.classList.add(`mostrarExito`);
  
  }else { 
    entrar = false
    respuestaUsuarioNombre.classList.add(`mostrarError`);
    respuestaUsuarioNombre.innerHTML = `<p> Usuario Incorrecto </p>`
    
  }

  if((contrasenia == 1234)&& (contrasenia.length < 8)){
    entrar = true
    respuestaPassword.classList.add(`mostrarExito`);
    respuestaPassword.innerHTML = `<p> Contraseña Correcta </p>`
  
  } else {
    entrar = false
    respuestaPassword.classList.add(`mostrarError`);
    respuestaPassword.innerHTML = `<p> Contraseña Incorrecta </p>`
    
  }

  if (entrar){
    
    Swal.fire({
      title: 'Bienvenido',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Usuario y contraseña incorrectos',
      text: '¿Primera vez? Inscribite!',
        })
  }

}


let btnIngresar = document.getElementById("botoningresar");

btnIngresar.onclick = (e)=> {
  e.preventDefault();
  validarUsuario();
  
 
}


//FUNCION PARA AGREGAR USUARIOS
const agregarUsuario = () =>{
  let nombre = document.getElementById("nombre").value;
  let password = document.getElementById("password2").value;
  let email = document.getElementById("mail").value;
  let provincia = document.getElementById("provincia").value;  
  let localidad = document.getElementById("localidad").value;
  let direccion = document.getElementById("direccion").value;
     
      
  let usuarioNuevo = new Usuario (nombre,password, email, provincia, localidad, direccion);
  if ((nombre =="") || (password =="")|| (email =="") || (localidad =="") || (direccion =="")){
    Swal.fire({
      icon: 'error',
      title: 'Recuerda completar todos los campos',
   
        })
  } else{
    Swal.fire({
      title: `Te damos la bienvenida ${nombre}`,
      icon: 'success',
      text: 'Ahora puedes particiar de las rutas',
      confirmButtonText: 'Aceptar'
    })
  listaUsuarios.push(usuarioNuevo);
  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
}
  
   
}
           

let inscribir = document.getElementById("botoninscripcion");

inscribir.onclick = (e)=> {
  e.preventDefault();
  agregarUsuario();
 
}


