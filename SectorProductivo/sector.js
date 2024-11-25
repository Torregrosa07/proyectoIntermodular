

// Obtener el botón
var botonSubir = document.getElementById("botonSubir");

// Mostrar el botón cuando se hace scroll
window.onscroll = function () {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop
    > 20) {
    botonSubir.style.display = "block";
} else {
    botonSubir.style.display = "none";

}
};

// Subir al hacer clic
botonSubir.onclick = function () {
document.body.scrollTop = 0; // Para Safari
document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera   

};