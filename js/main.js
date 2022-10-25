class Usuario{
  constructor(nombre,email, provincia, localidad, direccion){
  this.nombre = nombre;
  this.email = email;
  this.provincia = provincia;
  this.localidad = localidad;
  this.direccion = direccion;
}
}

const listaUsuarios = [];




//FUNCION PARA AGREGAR USUARIOS
const agregarUsuario = () =>{
  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("mail").value;
  let provincia = document.getElementById("provincia").value;  
  let localidad = document.getElementById("localidad").value;
  let direccion = document.getElementById("direccion").value;
     
      
  let usuarioNuevo = new Usuario (nombre,email, provincia, localidad, direccion);
  if ((nombre.value ="") || (email.value ="") || (localidad.value ="") || (direccion.value ="")){
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