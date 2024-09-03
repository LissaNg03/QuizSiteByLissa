const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },            
        ]        
    },

    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vitican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Shri Lanka", correct: false },            
        ]        
    },

    {
        question: "Which is the largest dessert in the world?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Sahara", correct: false },
            { text: "Antarctica", correct: true },            
        ]        
    },

    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "Arctic", correct: false },
            { text: "Africa", correct: false },            
        ]        
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ', ' + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
            
        }
        button.disabled = true;
        nextButton.style.display = "block"
    })
}

function showScore() {
    resetState();
    const cont = document.querySelector(".app");
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;

    let developer = document.createElement("p");
    developer.innerHTML = `<i>currently in development by</i> <h3 style='color:red; font-size:1.5rem'>Lisakhanya Ngwendu</h3>`;
    developer.style.textAlign = "center";
    cont.appendChild(developer);
}

function handleNextBtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion()
    }
    else {
        showScore()
    }
}

nextButton.addEventListener("click", nxtBtnFunction);

addEventListener("keydown", e => {
    if (nextButton.style.display == "block") {
        if (e.key == "Enter") {
            nxtBtnFunction()

        }
    }    
})

function nxtBtnFunction() {
    if (currentQuestionIndex < questions.length) {
        handleNextBtn()
    }
    else {
        startQuiz()
    }
}

startQuiz()
