document.addEventListener('DOMContentLoaded', function () {
    // Verificar si el botón "Ir al Inicio" existe en la página
    var botonHome = document.getElementById("homeButton");

    if (botonHome) {
        botonHome.addEventListener('click', function () {
            // Redirigir a la página principal
            window.location.href = "../index.html";

        });
    }

    // Mostrar el botón de subir cuando se hace scroll
    var botonScroll = document.getElementById("botonSubir");
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            botonScroll.style.display = "block";
        } else {
            botonScroll.style.display = "none";
        }
    };

    // Subir al hacer clic en el botón de subir
    botonScroll.onclick = function () {
        document.body.scrollTop = 0; // Para Safari
        document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
    };
});
