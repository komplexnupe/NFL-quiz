var startButtonEl = document.getElementById("start-btn");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById('quiz-questions');
var answerButtonEl = document.getElementById('answer-buttons');
var formEl = document.getElementById("highscoreName")

var timerInterval;
var secondsLeft = 75;
var timeCap = 0;

var questions = [
  {
    question: "Who is the best QB in the NFL?",
    choices: [
      { text: "Lamar Jackson", correct: false },
      { text: "Russell Wilson", correct: true },
      { text: "Pat Mahomes", correct: false },
      { text: "Aaron Rodgers", correct: false },
      { text: "Tom Brady", correct: false },
    ],

  },
  {
    question: "Who is the greatest QB of all time?",
    choices: [
      { text: "Dan Marino", correct: false },
      { text: "Peyton Manning", correct: false },
      { text: "Tom Brady", correct: true },
    ],

  },
  {
    question: " Who is the greatest LB of all time?",
    choices: [
      { text: "Dick Butkus", correct: false },
      { text: "Ray Lewis", correct: true },
      { text: "Brian Urlacher", correct: false },
      { text: "Luke Keuchly", correct: false },
      { text: "Lawerence Taylor", correct: false },
    ],

  },
  {
    question: "Who is the greatest safety of all time?",
    choices: [
      { text: "Troy Polamlu", correct: false },
      { text: "Sean Taylor", correct: false },
      { text: "Ed Reed", correct: true },
      { text: "Ronnie Lott", correct: false },
    ],

  },
  {
    question: 'Who is the best WR currently in the NFL?',
    choices: [
      { text: "Odell Beckham", correct: false },
      { text: "Julio Jones", correct: false },
      { text: "Deandre Hopkins", correct: true },
      { text: "Michael Thomas", correct: false },

    ]
  }

]
// Begin Quiz

startButtonEl.addEventListener('click', startQuiz);

function startQuiz() {
  console.log("Started");
  startButtonEl.parentNode.parentNode.classList.add("d-none");
  questionEl.parentNode.classList.remove("d-none");
  currentQuestionsIndex = 0
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000);

  nextQuestion()

}

function nextQuestion() {
  showQuestions(questions[currentQuestionsIndex]);
  console.log(currentQuestionsIndex);
  console.log(questions.length -1);
  if (currentQuestionsIndex + 1 == questions.length) {
    endQuiz()
  }
}
resetQuestion()

function showQuestions(arr) {
  questionEl.innerHTML = "<h1>" + arr.question + "</h1>"
  arr.choices.forEach(function (choices) {
    var button = document.createElement('button')
    button.innerText = choices.text
    button.classList.add('btn')
    button.classList.add('btn-primary')
    button.classList.add('w-100')
    button.classList.add('mb-1')
    if (choices.correct) {
      button.dataset.correct = choices.correct
    }

    button.addEventListener('click', selectAnswer)
    answerButtonEl.appendChild(button)
  })

}

function resetQuestion() {
  answerButtonEl.innerHTML = ""
}
function selectAnswer(event) {
  var correct = event.target.getAttribute("data-correct")
  if (correct) {
    currentQuestionsIndex++;
    resetQuestion()
    nextQuestion()
  } else {
    (event.target.getAttribute !== correct);
    secondsLeft = secondsLeft - 10;
    currentQuestionsIndex++;
    resetQuestion()
    nextQuestion()

  }
}

function endQuiz() {
  formEl.classList.remove("d-none")
  questionEl.parentNode.classList.add("d-none")
};
