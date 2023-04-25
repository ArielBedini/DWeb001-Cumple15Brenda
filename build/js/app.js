document.addEventListener("DOMContentLoaded",function() {

});

function iniciarApp() {

}

const formulario = document.querySelector(".FormularioRSVP");

formulario.addEventListener("submit", function(evento) {
    contenedorFormularioRSVP(false);
});

function contenedorFormularioRSVP(mostrar) {
    let formulario = document.querySelector(".contenedorFormularioRSVP");
    let boton = document.querySelector(".botonEnlace-rsvp");
    
    if(mostrar){
        formulario.style.display = "flex";
        boton.style.display = "none";
    } else {
        formulario.style.display = "none";
        boton.style.display = "flex";
    }
}

function contenedorFormularioMusica(mostrar) {
    let formulario = document.querySelector(".contenedorFormularioMusica");
    let boton = document.querySelector(".botonEnlace-musica");
    
    if(mostrar){
        formulario.style.display = "flex";
        boton.style.display = "none";
    } else {
        formulario.style.display = "none";
        boton.style.display = "flex";
    }
}

function mostrarNota() {
    const imagen = document.createElement("picture");
    imagen.innerHTML = `
        <source srcset="build/img/notaInvitacion.avif"  type="image/avif">
        <source srcset="build/img/notaInvitacion.webp"  type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/notaInvitacion.png" alt="Invitación">
    `;
    imagen.onclick = function() {
        const body = document.querySelector("body");
        body.classList.remove("fijarBody");
        overlay.remove();
    }
    // Creamos un Overlay con una eitqueta DIV para contener la imagen
    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");

    // boton para cerrar la imagen
    const cerrarImagen = document.createElement("P");
    cerrarImagen.textContent = "X";
    cerrarImagen.classList.add("botonOverlay");
    cerrarImagen.onclick = function() {
        const body = document.querySelector("body");
        body.classList.remove("fijarBody");
        overlay.remove();
    }
    overlay.appendChild(cerrarImagen);

    // Añadimos el Overlay al cuerpo del documento
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijarBody");
}

