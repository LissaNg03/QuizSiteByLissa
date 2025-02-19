const questions = [
  {
    question: "What is the capital city of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Rome", correct: false },
      { text: "Berlin", correct: false },
    ],
  },

  {
    question: "What is the chemical symbol for water?",
    answers: [
      { text: "H2O", correct: true },
      { text: "CO2", correct: false },
      { text: "O2", correct: false },
      { text: "H2", correct: false },
    ],
  },

  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Earth", correct: false },
      { text: "Mars", correct: true },
      { text: "Venus", correct: false },
      { text: "Jupiter", correct: false },
    ],
  },

  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Mark Twain", correct: false },
      { text: "Homer", correct: false },
    ],
  },

  {
    question: "What is the largest organ in the human body?",
    answers: [
      { text: "Heart", correct: false },
      { text: "Brain", correct: false },
      { text: "Liver", correct: false },
      { text: "Skin", correct: true },
    ],
  },

  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Seoul", correct: false },
      { text: "Beijing", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Hong Kong", correct: false },
    ],
  },

  {
    question: "What is the square root of 64?",
    answers: [
      { text: "6", correct: false },
      { text: "8", correct: true },
      { text: "10", correct: false },
      { text: "12", correct: false },
    ],
  },

  {
    question: "Which ocean is the largest in the world?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },

  {
    question: "How many continents are there in the world?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },

  {
    question: "Which element has the chemical symbol 'O'?",
    answers: [
      { text: "Oxygen", correct: true },
      { text: "Osmium", correct: false },
      { text: "Ozone", correct: false },
      { text: "Olivine", correct: false },
    ],
  },

  {
    question: "What is the longest river in the world?",
    answers: [
      { text: "Amazon", correct: true },
      { text: "Nile", correct: false },
      { text: "Yangtze", correct: false },
      { text: "Mississippi", correct: false },
    ],
  },

  {
    question: "Which is the tallest mountain in the world?",
    answers: [
      { text: "Mount Kilimanjaro", correct: false },
      { text: "Mount Everest", correct: true },
      { text: "K2", correct: false },
      { text: "Mount Fuji", correct: false },
    ],
  },

  {
    question: "Which country is the largest by land area?",
    answers: [
      { text: "United States", correct: false },
      { text: "Canada", correct: false },
      { text: "Russia", correct: true },
      { text: "China", correct: false },
    ],
  },

  {
    question: "What is the main ingredient in guacamole?",
    answers: [
      { text: "Tomato", correct: false },
      { text: "Avocado", correct: true },
      { text: "Onion", correct: false },
      { text: "Garlic", correct: false },
    ],
  },

  {
    question: "Which language is the most widely spoken in the world?",
    answers: [
      { text: "English", correct: false },
      { text: "Spanish", correct: false },
      { text: "Mandarin Chinese", correct: true },
      { text: "Hindi", correct: false },
    ],
  },

  {
    question: "What is the largest desert on Earth?",
    answers: [
      { text: "Sahara", correct: false },
      { text: "Arabian", correct: false },
      { text: "Kalahari", correct: false },
      { text: "Antarctic", correct: true },
    ],
  },

  {
    question: "Who was the first president of the United States?",
    answers: [
      { text: "Abraham Lincoln", correct: false },
      { text: "George Washington", correct: true },
      { text: "Thomas Jefferson", correct: false },
      { text: "John Adams", correct: false },
    ],
  },

  {
    question: "Which fruit is known for having its seeds on the outside?",
    answers: [
      { text: "Strawberry", correct: true },
      { text: "Blueberry", correct: false },
      { text: "Raspberry", correct: false },
      { text: "Apple", correct: false },
    ],
  },

  {
    question: "Which animal is the fastest land mammal?",
    answers: [
      { text: "Cheetah", correct: true },
      { text: "Lion", correct: false },
      { text: "Leopard", correct: false },
      { text: "Tiger", correct: false },
    ],
  },

  {
    question: "Which planet is the closest to the sun?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Earth", correct: false },
      { text: "Mercury", correct: true },
      { text: "Mars", correct: false },
    ],
  },

  {
    question: "Which ocean is the smallest in the world?",
    answers: [
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: true },
      { text: "Atlantic Ocean", correct: false },
      { text: "Pacific Ocean", correct: false },
    ],
  },

  {
    question: "What is the main ingredient in a traditional sushi roll?",
    answers: [
      { text: "Rice", correct: true },
      { text: "Seaweed", correct: false },
      { text: "Fish", correct: false },
      { text: "Vegetables", correct: false },
    ],
  },

  {
    question: "What is the capital of Canada?",
    answers: [
      { text: "Toronto", correct: false },
      { text: "Ottawa", correct: true },
      { text: "Vancouver", correct: false },
      { text: "Montreal", correct: false },
    ],
  },

  {
    question: "What is the most common blood type in the world?",
    answers: [
      { text: "O-", correct: false },
      { text: "O+", correct: true },
      { text: "A+", correct: false },
      { text: "B-", correct: false },
    ],
  },

  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Ag", correct: false },
      { text: "Au", correct: true },
      { text: "Fe", correct: false },
      { text: "Pb", correct: false },
    ],
  },

  {
    question: "What is the longest bone in the human body?",
    answers: [
      { text: "Femur", correct: true },
      { text: "Tibia", correct: false },
      { text: "Fibula", correct: false },
      { text: "Humerus", correct: false },
    ],
  },

  {
    question: "What animal is known for its black and white stripes?",
    answers: [
      { text: "Giraffe", correct: false },
      { text: "Zebra", correct: true },
      { text: "Tiger", correct: false },
      { text: "Panda", correct: false },
    ],
  },

  {
    question: "How many states are there in the United States?",
    answers: [
      { text: "50", correct: true },
      { text: "51", correct: false },
      { text: "48", correct: false },
      { text: "52", correct: false },
    ],
  },

  {
    question: "Which country is known as the Land of the Rising Sun?",
    answers: [
      { text: "China", correct: false },
      { text: "Japan", correct: true },
      { text: "South Korea", correct: false },
      { text: "Thailand", correct: false },
    ],
  },

  {
    question: "What is the primary gas found in Earth's atmosphere?",
    answers: [
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: true },
      { text: "Carbon Dioxide", correct: false },
      { text: "Argon", correct: false },
    ],
  },

  {
    question: "What is the largest bird in the world?",
    answers: [
      { text: "Ostrich", correct: true },
      { text: "Eagle", correct: false },
      { text: "Penguin", correct: false },
      { text: "Albatross", correct: false },
    ],
  },

  {
    question: "What is the main language spoken in Brazil?",
    answers: [
      { text: "Spanish", correct: false },
      { text: "Portuguese", correct: true },
      { text: "English", correct: false },
      { text: "French", correct: false },
    ],
  },
];


const landingPage = document.querySelector(".headingCont");
const quizCont = document.querySelector(".app");
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

quizCont.style.display = "none";

let currentQuestionIndex = 0;
let score = 0;

function playQuiz() {
  landingPage.style.display = "none";
  startQuiz();
  quizCont.style.display = "block";
}

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
  questionElement.innerHTML = questionNo + ", " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
    nextButton.style.display = "block";
  });
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
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", nxtBtnFunction);

addEventListener("keydown", (e) => {
  if (nextButton.style.display == "block") {
    if (e.key == "Enter") {
      nxtBtnFunction();
    }
  }
});

function nxtBtnFunction() {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
}
