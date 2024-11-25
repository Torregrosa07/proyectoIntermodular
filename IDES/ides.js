document.addEventListener('DOMContentLoaded', function () {
    // Obtener todos los elementos de la lista de navegación
    const navItems = document.querySelectorAll('nav ul li a');

    // Añadir un evento de clic a cada elemento de la lista
    navItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Evitar el comportamiento por defecto del enlace

            // Obtener el ID del enlace
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Desplazarse suavemente a la sección correspondiente
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
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