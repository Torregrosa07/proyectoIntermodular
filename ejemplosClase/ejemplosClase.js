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


function checkAnswers() {
    // Respuestas correctas
    const correctAnswers = {
        q1: "c", // Respuesta correcta para la pregunta 1
        q2: "a", // Respuesta correcta para la pregunta 2
        q3: "b"  // Respuesta correcta para la pregunta 3
        q4: "b"  // Respuesta correcta para la pregunta 3
        q5: "b"  // Respuesta correcta para la pregunta 3
        q6: "b"  // Respuesta correcta para la pregunta 3
    };

    // Obtener el formulario y el contenedor de resultados
    const form = document.getElementById("quiz-form");
    const resultContainer = document.getElementById("result");
    let score = 0;

    // Iterar a través de cada pregunta
    Object.keys(correctAnswers).forEach((questionId) => {
        const selectedOption = form.querySelector(`input[name="${questionId}"]:checked`);

        if (selectedOption) {
            if (selectedOption.value === correctAnswers[questionId]) {
                // Respuesta correcta
                score++;
                document.querySelector(`input[name="${questionId}"][value="${correctAnswers[questionId]}"]`)
                    .parentElement.classList.add("correct");
            } else {
                // Respuesta incorrecta
                document.querySelector(`input[name="${questionId}"][value="${selectedOption.value}"]`)
                    .parentElement.classList.add("incorrect");
            }
        } else {
            // Si no se selecciona ninguna opción
            document.querySelector(`input[name="${questionId}"]`).parentElement.classList.add("incorrect");
        }
    });

    // Mostrar el resultado
    resultContainer.innerHTML = `Tu puntuación es ${score} de ${Object.keys(correctAnswers).length}`;
}

