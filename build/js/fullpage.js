let screenWidth = screen.width;
let screenHeight = screen.height;

let txtHeight = screenHeight + "px";
console.log("El tamaño de la pantalla es: " + screenWidth + " x " + txtHeight);
var myElement = document.getElementById("pantallaPrincipal");
//myElement.style.setProperty("height", screenHeight);
myElement.style.height = txtHeight;