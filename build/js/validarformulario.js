
const tipoEvento = "change";  // tabien puede ser "input"
const formulario = document.querySelector(".FormularioRSVP");
const apellido = document.querySelector("#apellido");
const nombre = document.querySelector("#nombre");
const temasmusicales = document.querySelector("#temasmusicales");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

const datosFormularioRSVP = {
    apellido : "",
    nombre : "",
    email : "",
}

const datosFormularioTemasMusicales = {
    nombreCompleto : "",
    temasMusicales : "",
}

apellido.addEventListener(tipoEvento, modificacionDatos);
nombre.addEventListener(tipoEvento, modificacionDatos);
email.addEventListener(tipoEvento, modificacionDatos);
function modificacionDatos(e) {
    datosFormularioRSVP[e.target.id] = e.target.value
    console.log(datosFormularioRSVP);
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    // Validar datos
    // empleado una técnica llamada Destructuring podemos convertir la estructura de un objeto en variables
    const {apellido, nombre, email} = datosFormularioRSVP;
    
    if (apellido === "" || nombre === "" || email === "") {
        mostrarAlerta("Completa todos los campos","error");
    } else {
        mostrarAlerta("Los datos ingresados fueron eviados","correcto");
        formulario.submit();
    }
});

function mostrarAlerta(mensaje,clase) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;
    alerta.classList.add(clase);

    formulario.appendChild(alerta);
    setTimeout( () => {
        alerta.remove();
    },4000)
}