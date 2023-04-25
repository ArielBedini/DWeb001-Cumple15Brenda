document.addEventListener('DOMContentLoaded',function() {

});

function iniciarApp() {

}

function formularioRSVP(mostrar) {
    let formulario = document.querySelector(".formularioRSVP");
    let boton = document.querySelector(".botonEnlace-rsvp");
    
    if(mostrar){
        formulario.style.display = "flex";
        boton.style.display = "none";
    } else {
        formulario.style.display = "none";
        boton.style.display = "flex";
    }
}

function formularioMusica(mostrar) {
    let formulario = document.querySelector(".formularioMusica");
    let boton = document.querySelector(".botonEnlace-musica");
    
    if(mostrar){
        formulario.style.display = "flex";
        boton.style.display = "none";
    } else {
        formulario.style.display = "none";
        boton.style.display = "flex";
    }
}