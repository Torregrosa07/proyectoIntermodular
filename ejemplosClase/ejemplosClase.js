// Verificar si el botón "Ir al Inicio" existe en la página
var botonHome = document.getElementById("homeButton");

if (botonHome) {
    botonHome.addEventListener('click', function () {
        // Redirigir a la página principal
        window.location.href = "../index.html";
    });
}

// Obtener el botón de "Subir"
var botonSubir = document.getElementById("botonSubir");

// Mostrar el botón cuando se hace scroll
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botonSubir.style.display = "block";
    } else {
        botonSubir.style.display = "none";
    }
};

// Subir al hacer clic en el botón de "Subir"
botonSubir.onclick = function () {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
};


//Js para el juego clicker
var contador = 0;
var tiempo = 10;
var temporizador;
function incrementarContador() {

    if (tiempo > 0) {

        contador++;


        document.getElementById("puntos").innerHTML = contador;


        document.getElementById("botonReset").style.display = "block";
    }
}

function iniciarTemporizador() {

    temporizador = setInterval(function () {
        tiempo--;


        document.getElementById("tiempoRestante").innerHTML = "Tiempo restante: " + tiempo + " Segundos";


        if (tiempo <= 0) {
            clearInterval(temporizador);
            document.getElementById("imagenClick").onclick = null;
        }
    }, 1000);
}

function resetearContador() {

    contador = 0;
    tiempo = 10;


    document.getElementById("puntos").innerHTML = contador;
    document.getElementById("botonReset").style.display = "none";

    document.getElementById("imagenClick").onclick = incrementarContador;
    document.getElementById("tiempoRestante").innerHTML = "Tiempo restante: " + tiempo + " Segundos";

    clearInterval(temporizador);
    iniciarTemporizador();
}


window.onload = iniciarTemporizador;
