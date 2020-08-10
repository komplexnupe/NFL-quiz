var startButtonEl = document.getElementById("start-btn");
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById('quiz-questions');
var answerButtonEl = document.getElementById('answer-buttons');
var formEl = document.getElementById("form")

var timerInterval;
var secondsLeft = 75;
var timeCap = 0;


startButtonEl.addEventListener('click', startQuiz);

function startQuiz(){
console.log("Started");
startButtonEl.parentElement.parentElement.classList.add("d-none");
questionEl.parentElement.classList.remove("d-none");

var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      endQuiz();
    }

  }, 1000);
}

function nextQuestion(){

}

function resetQuestion(){

}

function selectAnswer(){

}


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