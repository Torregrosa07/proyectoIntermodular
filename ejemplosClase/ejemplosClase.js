// Verificar si el botón "Ir al Inicio" existe en la página
var botonHome = document.getElementById("homeButton");

if (botonHome) {
    botonHome.addEventListener("click", function () {
        // Redirigir a la página principal
        window.location.href = "../index.html";
    });
}

// Obtener el botón de "Subir"
var botonSubir = document.getElementById("botonSubir");

if (botonSubir) {
    // Mostrar el botón cuando se hace scroll
    window.onscroll = function () {
        botonSubir.style.display =
            document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
                ? "block"
                : "none";
    };

    // Subir al hacer clic en el botón de "Subir"
    botonSubir.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Desplazamiento suave hacia arriba
    };
}

function checkAnswers() {
    // Respuestas correctas
    const correctAnswers = {
        q1: "3", q2: "1", q3: "2", q4: "2", q5: "2", q6: "2", q7: "2",
        q8: "3", q9: "3", q10: "2", q11: "2", q12: "3", q13: "3", q14: "1",
        q15: "3", q16: "3", q17: "2", q18: "2", q19: "1", q20: "1",
        q21: "3", q22: "3", q23: "2", q24: "3", q25: "1", q26: "2",
        q27: "3", q28: "1", q29: "2", q30: "3", q31: "2", q32: "2",
        q33: "2", q34: "2", q35: "1", q36: "2", q37: "2", q38: "2",
        q39: "2", q40: "3", q41: "2", q42: "1", q43: "3", q44: "2",
        q45: "2", q46: "2", q47: "1", q48: "2", q49: "2", q50: "3",
        q51: "2", q52: "2",
    };

    // Obtener el formulario y el contenedor de resultados
    const form = document.getElementById("quiz-form");
    const resultContainer = document.getElementById("result");

    if (!form || !resultContainer) {
        console.error("Formulario o contenedor de resultados no encontrado.");
        return;
    }

    // Limpiar estilos previos
    form.querySelectorAll(".correct, .incorrect, .skipped").forEach((el) => {
        el.classList.remove("correct", "incorrect", "skipped");
    });

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    // Recorrer las preguntas y evaluar respuestas
    Object.keys(correctAnswers).forEach((questionId) => {
        const selectedOption = form.querySelector(`input[name="${questionId}"]:checked`);
        const correctOption = form.querySelector(`input[name="${questionId}"][value="${correctAnswers[questionId]}"]`);

        if (selectedOption) {
            if (selectedOption.value === correctAnswers[questionId]) {
                // Respuesta correcta
                score++;
                correctOption.parentElement.classList.add("correct");
            } else {
                // Respuesta incorrecta
                selectedOption.parentElement.classList.add("incorrect");
            }
        } else if (correctOption) {
            // Pregunta omitida
            correctOption.parentElement.classList.add("skipped");
        }
    });

    // Mostrar resultado
    const skippedCount = totalQuestions - form.querySelectorAll("input:checked").length;
    resultContainer.innerHTML = `
        <p>Tu puntuación es <strong>${score}</strong> de <strong>${totalQuestions}</strong>.</p>
        <p>Porcentaje: <strong>${((score / totalQuestions) * 100).toFixed(2)}%</strong>.</p>
        <p>Preguntas sin responder: <strong>${skippedCount}</strong>.</p>
    `;
    // Mostrar ventana emergente según la puntuación
    const percentage = (score / totalQuestions) * 100;

    if (percentage >= 90) {
        alert(`¡Excelente! Has obtenido una puntuación de ${percentage.toFixed(2)}%. ¡Eres un experto en software y hardware!`);
    } else if (percentage >= 70) {
        alert(`¡Muy bien! Has obtenido una puntuación de ${percentage.toFixed(2)}%. ¡Tienes un buen conocimiento sobre software y hardware!`);
    } else if (percentage >= 50) {
        alert(`¡No está mal! Has obtenido una puntuación de ${percentage.toFixed(2)}%. ¡Sigue practicando para mejorar tus conocimientos!`);
    } else {
        alert(`¡Necesitas mejorar! Has obtenido una puntuación de ${percentage.toFixed(2)}%. ¡Repasa los conceptos básicos de software y hardware!`);
    }
}
