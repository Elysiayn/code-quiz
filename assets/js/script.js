var score = 0;


var quizArray = [
    {
        question: 'What does HTML stand for?', 
        a: 'Host Typeface Modem Link',
        b: 'Hack Terminal Mirror Link',
        c: 'Hyperlink Terminal Mainframe Logic',
        d: 'Hypertext Markup Language',
        answer: 'd'
    }, 
    {
        question: 'What does CSS stand for?', 
        a: 'Colorful Sheet Styles',
        b: 'Customer Support Services',
        c: 'Cascading Style Sheets',
        d: 'Combat Support Squadron',
        answer: 'c'
    },
    {
        question: 'What type of extension is a JavaScript file?', 
        a: '.js',
        b: '.html',
        c: '.css',
        d: '.img',
        answer: 'a'
    },
    {
        question: 'Which of the following is NOT a programming language?', 
        a: 'English',
        b: 'Python',
        c: 'JavaScript',
        d: 'Java',
        answer: 'a'
    }, 
    {
        question: 'Which of the following is used to write comments in JavaScript?', 
        a: '<!-- <text-here> -->',
        b: '// <text-here>',
        c: '/* <text-here> */',
        d: '# <text-here>',
        answer: 'b'
    }, 
]

var background = document.querySelector('body');
var quiz = document.querySelector('.quizContainer');
var result = document.querySelector('.contianer');
var start = document.querySelector('#start-btn');
var done = document.querySelector('.done');
var timerEl = document.querySelector('.timer');
var questionCounter= 0;
var timeRemaining= 75;
var highScores = [];

// to remove sections for quiz implementation
var instructions = document.querySelector('.instructions');
var startDiv = document.querySelector('.start');
var quizDone = document.querySelector('.done');
var storeScores = document.querySelector("#storeSubmit"); 
var quizOver = document.querySelector(".quizOver");

var startQuiz = function() {
  instructions.remove();
  startDiv.remove();
  quiz.getElementsByClassName.display = "block"; 
  quiz.classList.remove("hidden")
  quiz.classList.remove("card")

  timerStart = setInterval(function() {
    timeRemaining--;
    timerEl.textContent = "Time: " + timeRemaining;
    if (timeRemaining <= 0) {
      endQuiz();
    }
  }, 1000);

  for (let j = 0; j < quizArray[questionCounter].answers.length; j++) {
    currentAnswer = document.getElementById(i + 1);
    currentAnswer.textContent = quizArray[questionCounter].answers[j];
    var buttonIndex = j + 1;
    currentAnswer.addEventListener("click", () => {
      checkAnswer(j + 1);
    });
  }
  nextQuestion();
};

// // cycles through array, increases counter 
// var nextQuestion = function() {
//   var myQuestion = quizArray[questionCounter].quizArray;
//   questionName.textCOntent = myQuestion;

//   for (let i = 0; i < quizArray[questionCounter].answers.length; i++) {
//     var currentAnswer = document.getElementById(i + 1);
//     currentAnswer.textCOntent = quizArray[questionCounter].answers[i];
//   };
// };

// // verifies answers, provides color feedback on result
// var checkAnswer = function(buttonIndex) {
//   var correctAnswer = quizArray[questionCounter].correct;
//   if (correctAnswer === buttonIndex) {
//     result.style.backgroundColor = "lightgreen"
//     setTimeout(function() {
//       result.style.backgroundColor = "white";
//     }, 250);
//   }
//   else {
//     result.style.backgroundColor = "tomato"
//     setTimeout(function() {
//       result.style.backgroundColor = "white";
//     }, 250);
//     timeRemaining -= 15;
//     timerEl.textContent = "Time: " + timeRemaining;
//   }

//   if (questionCounter >= 5) {
//     endQuiz();
//   }
//   else {
//     questionCounter ++;
//     nextQuestion();
//   }
// };

// var timerStart;

// var endQuiz = function () {
//   clearInterval(timerStart);
//   result.remove();
//   quizDone.style.display = "block";

//   var endScore = document.createElement("p");
//   // endScore.className = "end-score" 
//   endScore.textContent = "Your score result is " + timeRemaining + ".";
//   quizOver.appendChild(endScore);
// }


// // Scores into local storage 
// var scoreStore = function() {
//   var name = document.getElementById(".recordName").nodeValue.trim();

//   while (name === "" || name === null) {
//     name = window.prompt("Enter your name to register your high-score!")
//   }
//   var scoresObj = {
//     name: name,
//     score: timeRemaining,
//   };
//   scoresArray.push(scoresObj);

//   localStorage.setItem(name, JSON.stringify({name, timeRemaining}));
// };

// start.addEventListener("click", startQuiz);
// storeScores.addEventListener("click", function() {
//   scoreStore();
//   location.href="./assets/highscores.html";
// });



