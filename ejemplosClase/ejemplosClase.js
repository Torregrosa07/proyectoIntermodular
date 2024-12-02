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
        q1: "3", // Respuesta correcta para la pregunta 1
        q2: "1", // Respuesta correcta para la pregunta 2
        q3: "2",  // Respuesta correcta para la pregunta 3
        q4: "2", // Respuesta correcta para la pregunta 3
        q5: "2",
        q6: "2",
        q7: "2",
        q8: "3",
        q9: "3",
        q10: "2",
        q11: "2",
        q12: "3",
        q13: "3",
        q14: "1",
        q15: "3",
        q16: "3",
        q17: "2",
        q18: "2",
        q19: "1",
        q20: "1",
        q21: "3",
        q22: "3",
        q23: "2",
        q24: "3",
        q25: "1",
        q26: "2",
        q27: "3",
        q28: "1",
        q29: "2",
        q30: "3",
        q31: "2",
        q32: "2",
        q33: "2",
        q34: "2",
        q35: "1",
        q36: "2",
        q37: "2",
        q38: "2",
        q39: "2",
        q40: "3",
        q41: "2",
        q42: "1",
        q43: "3",
        q44: "2",
        q45: "2",
        q46: "2",
        q47: "1",
        q48: "2",
        q49: "2",
        q50: "3",
        q51: "2",
        q52: "2",

    };

    // Obtener el formulario y el contenedor de resultados
    const form = document.getElementById("quiz-form");
    const resultContainer = document.getElementById("result");
    let score = 0;

    // recorremos las preguntas
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
            document.querySelector(`input[name="${questionId}"]`).parentElement.classList.add("incorrect");
        }
    });

    // muestra del resultado
    resultContainer.innerHTML = `Tu puntuación es ${score} de ${Object.keys(correctAnswers).length}`;
}

