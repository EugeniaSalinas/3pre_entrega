

//------------------Validar Nombre--------------------


let listaUsuarios = JSON.parse(localStorage.getItem("usuarios"));
let nombreIngresado = document.getElementById("nombreFormMateriales");




const validarNombre = () => {

    listaUsuarios.forEach ((persona)=> {
        console.log ((persona.nombre))
        
         if(listaUsuarios.some((persona) => persona.nombre == nombreIngresado.value)){
        console.log("pertenece")
        
        }else { 
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes inscribirte!',
                footer: '<a href="ingresar.html">Inicia Sesión o Inscribite</a>'
              })
        }
    })
  
}


nombreIngresado.onchange = (e) =>{ 
    e.preventDefault();
    validarNombre()
    
}



//Traer cada llenado de formulario a mi js...document.get...


let boton = document.getElementById("btnbtn");
const abrir = document.getElementById("btnabrir");

  boton.onclick = (e)=> {
    e.preventDefault(e);
    
    let cantidadVidrio = document.getElementById ("materialVidrio").value;
    let cantidadCarton = document.getElementById ("materialCarton").value;
    let cantidadPapel = document.getElementById ("materialPapel").value;
    let cantidadPlastico = document.getElementById ("materialPlastico").value;
    let cantidadOtros = document.getElementById ("materialOtros").value;

  

    localStorage.setItem("cantidadVidrio", JSON.stringify(parseFloat(cantidadVidrio)));
    localStorage.setItem("cantidadCarton", JSON.stringify(parseFloat(cantidadCarton)));
    localStorage.setItem("cantidadPapel", JSON.stringify(parseFloat(cantidadPapel)));
    localStorage.setItem("cantidadPlastico", JSON.stringify(parseFloat(cantidadPlastico)));
    localStorage.setItem("cantidadOtros", JSON.stringify(parseFloat(cantidadOtros)));
    //Mostrar boton de VER MI FICHA cuando se envie el formulario
    abrir.style.opacity =`1`;
}


//-----------Codigo para VER MI FICHA-------------------

   
    const contenedorFicha = document.getElementById("fondoFicha")
    const cerrar = document.getElementById("btncerrar")
    const titulo = document.getElementById("tituloFicha")

//-------------Evento abrir ficha-----------------------
    abrir.addEventListener("click", (e)=> {
    e.preventDefault();
    contenedorFicha.classList.add(`mostrar`);


    // Traigo mis elementos del HTML
    let vidrioRespuesta = document.getElementById("cantidadRespuestaVidrio");
    let cartonRespuesta = document.getElementById("cantidadRespuestaCarton");
    let papelRespuesta = document.getElementById("cantidadRespuestaPapel");
    let plasticoRespuesta = document.getElementById("cantidadRespuestaPlastico");
    let otrosRespuesta = document.getElementById("cantidadRespuestaOtros");

     //Lo traigo del local storage
     cantidadVidrio = JSON.parse(localStorage.getItem("cantidadVidrio"));    
     cantidadCarton = JSON.parse(localStorage.getItem("cantidadCarton"));
     cantidadPapel = JSON.parse(localStorage.getItem("cantidadPapel"));
     cantidadPlastico = JSON.parse(localStorage.getItem("cantidadPlastico"));
     cantidadOtros = JSON.parse(localStorage.getItem("cantidadOtros"));
    
  

    //Se muestra en la ficha
    vidrioRespuesta.innerHTML = `<p> ${cantidadVidrio + 0} kg </p>`
    cartonRespuesta.innerHTML = `<p> ${cantidadCarton + 0} kg</p>`
    papelRespuesta.innerHTML = `<p> ${cantidadPapel + 0} kg</p>`
    plasticoRespuesta.innerHTML = `<p> ${cantidadPlastico + 0} kg</p>`
    otrosRespuesta.innerHTML = `<p> ${cantidadOtros + 0} kg</p>`
   

    titulo.innerHTML = `Hola ${nombreIngresado.value}! Has reciclado...`
})

// Cerrar Ficha
cerrar.addEventListener("click", (e)=> {
    e.preventDefault();
    contenedorFicha.classList.remove(`mostrar`);
})





