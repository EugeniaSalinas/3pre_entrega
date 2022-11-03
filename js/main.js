class Usuario{
  constructor(nombre,email, provincia, localidad, direccion){
  this.nombre = nombre;
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

if(listaUsuarios.some((persona) => persona.nombre == nombreUsuario) && (nombreUsuario == "Juan Perez")){
  alert("Ingresaste")
  
  }else { 
      alert("Usuario Incorrecto")
  }

if((contrasenia == 1234)&& (contrasenia.length < 8)){
  alert("contraseniaCorrecta")
} else {
  alert("contraseña Incorrecta")
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
  let email = document.getElementById("mail").value;
  let provincia = document.getElementById("provincia").value;  
  let localidad = document.getElementById("localidad").value;
  let direccion = document.getElementById("direccion").value;
     
      
  let usuarioNuevo = new Usuario (nombre,email, provincia, localidad, direccion);
  if ((nombre =="") || (email =="") || (localidad =="") || (direccion =="")){
    alert ("Recuerda completar todos los campos")
  } else{
  alert("Te has inscripto")
  listaUsuarios.push(usuarioNuevo);
  localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
}
  
   
}
           

let inscribir = document.getElementById("botoninscripcion");

inscribir.onclick = (e)=> {
  e.preventDefault();
  agregarUsuario();
 
}