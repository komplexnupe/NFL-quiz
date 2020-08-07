var startButtonEl = document.getElementById("start-btn");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById('quiz-questions');
var answerButtonEl = document.getElementById('answer-buttons');

var timerInterval;
var secondsLeft = 75;
var timeCap = 0;
let shuffleQuestion, currentQuestionsIndex

// Begin Quiz

startButtonEl.addEventListener('click', startQuiz);

function startQuiz() {
  console.log("Started");
  startButtonEl.parentNode.parentNode.classList.add("d-none");
  questionEl.parentNode.classList.remove("d-none");
  shuffleQuestion = questions.sort(function () {
    Math.random() - .5;
  })
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
  showQuestions(shuffleQuestion[currentQuestionsIndex])
}
resetQuestion()
function showQuestions(question) {
  questionEl.innerText = question.question
  question.choices.forEach(function (choices) {
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
    answerButtonEl.parentNode.appendChild(button)
  })
}

function resetQuestion() {
  while (answerButtonEl.firstChild) {
    answerButtonEl.removeChild(answerButtonEl.firstChild)
  }
}
function selectAnswer(event) {
  var hitButton = event.target.button
  var correctAnswer = hitButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonEl.children).forEach(function () {
    setStatusClass(button, button.dataset.correct)
  })
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.remove('btn-primary')
    element.classList.add('btn-success')
  } else {
    element.classList.remove('btn-primary')
    element.classList.add('btn-danger')
  }
}

function endQuiz() {

};

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