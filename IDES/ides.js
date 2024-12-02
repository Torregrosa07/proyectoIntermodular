document.addEventListener('DOMContentLoaded', function () {

    const navItems = document.querySelectorAll('nav ul li a');//se guardan todos los elementos

    navItems.forEach(item => { //añadimos un evento de clic a cada sección
        item.addEventListener('click', function (event) {
            event.preventDefault(); // se evita el comportamiento por defecto del enlace

            const targetId = this.getAttribute('href');// se obtene el ID del enlace
            const targetSection = document.querySelector(targetId);

            targetSection.scrollIntoView({ // desplazarse suavemente a la sección correspondiente
                behavior: 'smooth'
            });
        });
    });

    var botonHome = document.getElementById("homeButton"); // verificación si el botón "Ir al Inicio" existe en la página

    if (botonHome) {
        botonHome.addEventListener('click', function () {           
            window.location.href = "../index.html"; // hace la redirección a la página principal
        });
    }

    var botonSubir = document.getElementById("botonSubir"); // obtener el botón de "Subir"

    window.onscroll = function () {  // mostrar el botón cuando se hace scroll
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            botonSubir.style.display = "block";
        } else {
            botonSubir.style.display = "none";
        }
    };

    botonSubir.onclick = function () { // subir al hacer clic en el botón de "Subir"
        document.body.scrollTop = 0; // para Safari
        document.documentElement.scrollTop = 0; // para Chrome, Firefox, IE y Opera
    };
});

