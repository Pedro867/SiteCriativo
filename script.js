const questionContainer = document.querySelector(".question");
const answerContainer = document.querySelector(".options");
const spnQtd = document.querySelector(".questionNumber");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");
const contentStart = document.querySelector(".start");
const btnStart = document.querySelector(".start button");
const contentResposta = document.querySelector(".resposta");
const btnResposta = document.querySelector(".respBtn");

import questions from "./questions.js";

let currentQuestion = 0;
let correctQuestions = 0;

btnStart.onclick = () => {
    content.style.display = "flex";
    contentStart.style.display = "none";

    currentQuestion = 0;
    correctQuestions = 0;
    loadQuestion();
};

function start (){
    content.style.display = "none";
    contentStart.style.display = "flex";
}

btnResposta.onclick = () => {
    btnResposta.style.display = "none"; 
    contentResposta.style.display = "flex";
}

btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";
    contentResposta.style.display = "none";
    btnResposta.style.display = "none";
    contentResposta.innerHTML = ""

    currentQuestion = 0;
    correctQuestions = 0;
    loadQuestion();
};

function nextQuestion(e) {

    let userAnswer = e.target.getAttribute("data-correct");

    if (userAnswer === "true") {
        correctQuestions++;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        finish();
    }
}

function finish() {
    textFinish.innerHTML = `Você acertou ${correctQuestions} de ${questions.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
    btnResposta.style.display = "flex";
}

function loadQuestion() {
    spnQtd.innerHTML = `${currentQuestion + 1}/${questions.length}`;
    const currentQuestionItem = questions[currentQuestion];
    answerContainer.innerHTML = "";
    questionContainer.innerHTML = currentQuestionItem.question;

    currentQuestionItem.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <button class="options" data-correct="${answer.correct}">
            ${answer.option}
        </button>
        `;

        answerContainer.appendChild(div);

        div.querySelector(".options").addEventListener("click", nextQuestion);
    });
}

loadQuestion();
start();