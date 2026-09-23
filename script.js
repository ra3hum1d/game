// Посилання на випадкові гіфки
const startGifs = [
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHo2Z2xlcDlhdWs0MDNwZTQxOTI1cnJwNnM2bTk5YXFtZHJrcXhlYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tlWg5d4aWVGol8h4vC/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHo2Z2xlcDlhdWs0MDNwZTQxOTI1cnJwNnM2bTk5YXFtZHJrcXhlYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tlWg5d4aWVGol8h4vC/giphy.gif"
];

const questionGifsPool = [
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eXdqdngzYXU3NG53d3BwNGNwZzBsY3hwbzFzcjNzOTNpMTV1azByaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ISJqHsCJgkFYTewi3k/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3c3lscm50eXYybXptYjY3c3pxZ3hrYzluYWR3cHcyNnN6aDdqOTB2MiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/TQOTjlzMHRmoqF27CC/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N3hjd3Z3eXQ5aXFhc2xkYTR3b2NydmR1Y3JyaXFiejJlZDV2cWh3OCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/in21AvD0gp3wwhoovW/giphy.gif",
  "https://media.tenor.com/I46_U4bkk5gAAAA1/reyna-valorant-valorant.webp"
];

const resultGifs = [
  "https://media.tenor.com/OKFl0R1TmYcAAAAM/chamber-valorant.gif",
  "https://media.tenor.com/-UkfQ18Pe9wAAAA1/valorant-valorant-flex.webp"
];

function getRandomGif(gifArray) {
  const randomIndex = Math.floor(Math.random() * gifArray.length);
  return gifArray[randomIndex];
}

const quizData = [
  {
    question: "З якої країни Джетка?",
    options: ["Японія", "Південна Корея", "Китай", "Фінляндія"],
    correct: 1
  },
  {
    question: "назва ульти Рейз?",
    options: ["Showstopper", "Blade Storm", "Tour De Force", "Lockdown"],
    correct: 0
  },
  {
    question: "Скіко коштує Вандаліто?",
    options: ["2700", "2900", "3200", "2500"],
    correct: 1
  },
  {
    question: "Хто з цих тіпів Controller?",
    options: ["Sova", "Omen", "Reyna", "Cypher"],
    correct: 1
  },
  {
    question: "Яка клікуха робота-павука Killjoy, який просинається поблизу, і розйобує хліблет?",
    options: ["Alarmbot", "Nanoswarm", "Turret", "Boom Bot"],
    correct: 0
  },
  {
    question: "Скіко бє в голову опка без шилдів?",
    options: ["150", "255", "160", "200"],
    correct: 1
  },
  {
    question: "хто по масті сейдж?",
    options: ["Initiator", "Sentinel", "Controller", "Duelist"],
    correct: 1
  },
  {
    question: "хто з цих тіпів репер?",
    options: ["Skye", "Phoenix", "Yoru", "Reyna"],
    correct: 1
  },
  {
    question: "скоко макс деняк?",
    options: ["8000", "9000", "10000", "12000"],
    correct: 1
  },
  {
    question: "З якої країни Фейд?",
    options: ["Туреччина", "Єгипет", "Греція", "Марокко"],
    correct: 0
  },
  {
    question: "Абілка (meta glasses) у сайфера?",
    options: ["Trapwire", "Cyber Cage", "Spycam", "Neural Theft"],
    correct: 2
  },
  {
    question: "скікі роздефужувати спайк нада?",
    options: ["5 секунд", "7 секунд", "4 секунди", "10 секунд"],
    correct: 1
  },
  {
    question: "у нього сережка в вусі, і він любить аніме",
    options: ["Omen", "Yoru", "Chamber", "Iso"],
    correct: 1
  },
  {
    question: "saving '........' is crazy",
    options: ["Ghost", "Frenzy", "Classic", "Shorty"],
    correct: 2
  },
  {
    question: "хто не вміє рівайвити(когось) з них усіх?",
    options: ["Sage", "Skye", "Clove", "Deadlock"],
    correct: 0
  }
];

// Елементи екранів
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

// Елементи гіфок
const startGifEl = document.getElementById("start-gif");
const questionGifEl = document.getElementById("question-gif");
const resultGifEl = document.getElementById("result-gif");

// Кнопки та текст
const startBtn = document.getElementById("start-btn");
const submitBtn = document.getElementById("submit-btn");
const restartBtn = document.getElementById("restart-btn");

const questionEl = document.getElementById("question");
const questionNumberEl = document.getElementById("question-number");
const optionsContainer = document.getElementById("options-container");
const resultText = document.getElementById("result-text");

let currentQuiz = 0;
let score = 0;
let selectedOption = null;
let isAnswerChecked = false;

// Початкова гіфка
startGifEl.src = getRandomGif(startGifs);

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  currentQuiz = 0;
  score = 0;
  loadQuiz();
});

function loadQuiz() {
  deselectOptions();
  isAnswerChecked = false;
  submitBtn.innerText = "Відповісти";
  
  questionGifEl.src = getRandomGif(questionGifsPool);

  const currentQuizData = quizData[currentQuiz];
  questionNumberEl.innerText = `Запитання ${currentQuiz + 1}/${quizData.length}`;
  questionEl.innerText = currentQuizData.question;

  optionsContainer.innerHTML = "";

  currentQuizData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.innerHTML = `<span class="option-text">${option}</span><span class="status-icon"></span>`;
    
    button.addEventListener("click", () => {
      if (isAnswerChecked) return;

      deselectOptions();
      button.classList.add("selected");
      selectedOption = index;
    });

    optionsContainer.appendChild(button);
  });
}

function deselectOptions() {
  selectedOption = null;
  const buttons = optionsContainer.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.classList.remove("selected"));
}

submitBtn.addEventListener("click", () => {
  if (!isAnswerChecked) {
    if (selectedOption === null) {
      alert("Будь ласка, оберіть варіант відповіді!");
      return;
    }
    checkAnswer();
  } else {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      showResults();
    }
  }
});

function checkAnswer() {
  isAnswerChecked = true;
  const correctIndex = quizData[currentQuiz].correct;
  const buttons = optionsContainer.querySelectorAll(".option-btn");

  buttons.forEach((btn, index) => {
    const iconSpan = btn.querySelector(".status-icon");

    if (index === correctIndex) {
      btn.classList.add("correct");
      iconSpan.innerText = " ✓";
    }

    if (index === selectedOption && selectedOption !== correctIndex) {
      btn.classList.add("wrong");
      iconSpan.innerText = " ✗";
    }
  });

  if (selectedOption === correctIndex) {
    score++;
  }

  if (currentQuiz === quizData.length - 1) {
    submitBtn.innerText = "Переглянути результати";
  } else {
    submitBtn.innerText = "Наступне запитання";
  }
}

function showResults() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");
  
  resultGifEl.src = getRandomGif(resultGifs);
  resultText.innerText = `правильно ${score} з ${quizData.length} запитань`;
}

restartBtn.addEventListener("click", () => {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  startGifEl.src = getRandomGif(startGifs);
});