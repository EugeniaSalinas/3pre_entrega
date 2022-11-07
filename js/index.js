

//-----------FETCH con un json de imgs de la semilla------

const botonMaguFeliz = document.getElementById("botonMaguFeliz");
const botonMaguTriste = document.getElementById("botonMaguTriste");
const botonMagutrabajo = document.getElementById("botonMaguTrabajo");
const botonMaguSmart = document.getElementById("botonMaguSmart");
const botonMaguSorpresa = document.getElementById("botonMaguSorpresa");
//const fondoPruebaFetch = document.getElementsByClassName("fondoFetch")
const pruebaFetch = document.getElementById("fondoFetch")



/*const mostrarMagus = () => {
    fetch("../imagenes.json")
        .then(response => response.json())
        .then (result => {
            const imgsMagu = result;
            imgsMagu.forEach(imagen => {
                const cardMagu = document.createElement('img')
                cardMagu.src = imagen.img
                pruebaFetch.append(cardMagu)
            })
        })
}*/


//----Barra de progreso----
function move() {
    let elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 48);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}


const cardMagu = document.createElement('div')
const magu = document.createElement('img')
const description =  document.createElement('p')



botonMaguFeliz.onclick = () => {

    const mostrarMagu = () => {
        fetch("../imagenes.json")
            .then(response => response.json())
            .then (result => {
                
                cardMagu.className = "contenedorFetch"        
                magu.src = result[0].img
                magu.width = 300            
                description.textContent = result[0].descripcion
    
                /*const btnCerrar = document.createElement('button')
                btnCerrar.innerHTML = "Cerrar"
                btnCerrar.id ="bntCerrarFetch"
    
                cardMagu.append(magu,description, btnCerrar)*/
                cardMagu.append(magu,description)
                pruebaFetch.append(cardMagu)            
            }) 
            }

    mostrarMagu()   
    pruebaFetch.classList.add(`mostrarFondoFetch`);
    //----Cerrar Fetch----
    setTimeout(() => {pruebaFetch.classList.remove(`mostrarFondoFetch`)}, 5000);
    move()   
        
}




botonMaguTriste.onclick = () => {

    const mostrarMagu = () => {
        fetch("../imagenes.json")
            .then(response => response.json())
            .then (result => {
                
                cardMagu.className = "contenedorFetch"               
                magu.src = result[1].img
                magu.width = 300               
                description.textContent = result[1].descripcion
    
                cardMagu.append(magu,description)
                pruebaFetch.append(cardMagu)            
            }) 
            }


    mostrarMagu()   
    pruebaFetch.classList.add(`mostrarFondoFetch`);
    //----Cerrar Fetch----
    setTimeout(() => {pruebaFetch.classList.remove(`mostrarFondoFetch`)}, 5000);   
    move()           
}

botonMaguTrabajo.onclick = () => {

    const mostrarMagu = () => {
        fetch("../imagenes.json")
            .then(response => response.json())
            .then (result => {
                
                cardMagu.className = "contenedorFetch"               
                magu.src = result[2].img
                magu.width = 300               
                description.textContent = result[2].descripcion
    
                cardMagu.append(magu,description)
                pruebaFetch.append(cardMagu)            
            }) 
            }


    mostrarMagu()   
    pruebaFetch.classList.add(`mostrarFondoFetch`);
    //----Cerrar Fetch----
    setTimeout(() => {pruebaFetch.classList.remove(`mostrarFondoFetch`)}, 5000);   
    move()           
}



botonMaguSmart.onclick = () => {

    const mostrarMagu = () => {
        fetch("../imagenes.json")
            .then(response => response.json())
            .then (result => {
                
                cardMagu.className = "contenedorFetch"               
                magu.src = result[3].img
                magu.width = 300               
                description.textContent = result[3].descripcion
    
                cardMagu.append(magu,description)
                pruebaFetch.append(cardMagu)            
            }) 
            }


    mostrarMagu()   
    pruebaFetch.classList.add(`mostrarFondoFetch`);
    //----Cerrar Fetch----
    setTimeout(() => {pruebaFetch.classList.remove(`mostrarFondoFetch`)}, 5000);   
    move()           
}


botonMaguSorpresa.onclick = () => {

    const mostrarMagu = () => {
        fetch("../imagenes.json")
            .then(response => response.json())
            .then (result => {
                
                cardMagu.className = "contenedorFetch"               
                magu.src = result[4].img
                magu.width = 300               
                description.textContent = result[4].descripcion
    
                cardMagu.append(magu,description)
                pruebaFetch.append(cardMagu)            
            }) 
            }


    mostrarMagu()   
    pruebaFetch.classList.add(`mostrarFondoFetch`);
    //----Cerrar Fetch----
    setTimeout(() => {pruebaFetch.classList.remove(`mostrarFondoFetch`)}, 5000);   
    move()           
}



