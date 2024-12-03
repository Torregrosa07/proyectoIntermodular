var botonHome = document.getElementById("homeButton");// verificar si el botón "Ir al Inicio" existe en la página

if (botonHome) {
    botonHome.addEventListener("click", function () {
        window.location.href = "../index.html"; // indica la redirección a la página principal
    });
}

var botonSubir = document.getElementById("botonSubir");// obtener el botón de "Subir"

if (botonSubir) {
    window.onscroll = function () {  // mostrar el botón cuando se hace scroll
        botonSubir.style.display =
            document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
                ? "block"
                : "none";
    };

    botonSubir.onclick = function () { // subir al hacer clic en el botón de "Subir"
        window.scrollTo({ top: 0, behavior: "smooth" }); // desplazamiento suave hacia arriba
    };
}

function checkAnswers() {
    // respuestas correctas
    const correctAnswers = {
        q1: "3", q2: "1", q3: "2", q4: "2", q5: "2", q6: "2", q7: "2",
        q8: "3", q9: "3", q10: "2", q11: "2", q12: "3", q13: "3", q14: "1",
        q15: "3", q16: "3", q17: "2", q18: "2", q19: "1", q20: "1",
        q21: "3", q22: "3", q23: "2", q24: "3", q25: "1", q26: "2",
        q27: "3", q28: "1", q29: "2", q30: "3", q31: "2", q32: "2",
        q33: "2", q34: "2", q35: "1", q36: "2", q37: "2", q38: "2",
        q39: "2", q40: "3", q41: "2", q42: "1", q43: "3", q44: "2",
        q45: "2", q46: "1", q47: "2", q48: "2", q49: "1", q50: "1",
        q51: "2", q52: "2",
    };

    const form = document.getElementById("quiz-form"); // obtener el formulario y el contenedor de resultados
    const resultContainer = document.getElementById("result");

    if (!form || !resultContainer) {
        console.error("Formulario o contenedor de resultados no encontrado.");
        return;
    }

    form.querySelectorAll(".correct, .incorrect, .skipped").forEach((el) => { // limpiar estilos previos
        el.classList.remove("correct", "incorrect", "skipped");
    });

    let score = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    Object.keys(correctAnswers).forEach((questionId) => {  // recorrer las preguntas y evaluar respuestas
        const selectedOption = form.querySelector(`input[name="${questionId}"]:checked`);
        const correctOption = form.querySelector(`input[name="${questionId}"][value="${correctAnswers[questionId]}"]`);

        if (selectedOption) {
            if (selectedOption.value === correctAnswers[questionId]) {
                // respuesta correcta
                score++;
                correctOption.parentElement.classList.add("correct");
            } else {
                // respuesta incorrecta
                selectedOption.parentElement.classList.add("incorrect");
            }
        } else if (correctOption) {
            // pregunta omitida
            correctOption.parentElement.classList.add("skipped");
        }
    });

    // mostrar resultado
    const skippedCount = totalQuestions - form.querySelectorAll("input:checked").length;
    resultContainer.innerHTML = `
        <p>Tu puntuación es <strong>${score}</strong> de <strong>${totalQuestions}</strong>.</p>
        <p>Porcentaje: <strong>${((score / totalQuestions) * 100).toFixed(2)}%</strong>.</p>
        <p>Preguntas sin responder: <strong>${skippedCount}</strong>.</p>
    `;
    // mostrar ventana emergente según la puntuación
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
