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
var currentScore= 100;
var highScores = [];

// to remove sections for quiz implementation
var instructionsEl = document.querySelector('.instructions');
var startDiv = document.querySelector('.start');
var quizDone = document.querySelector('.done');
var storeScores = document.querySelector("#storeSubmit"); 

var startQuiz = function() {
  instructionsEl.remove();
  startDiv.remove();
  quiz.getElementsByClassName.display = "block";

  timerStart = setInterval(function() {
    timeLeft--;
    timerEl.textContent = "Time: + timeLeft;
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);

  for (let j = 0; j < questions[counter].answers.length; j++) {
    currentAnswer = document.getElementById(i + 1);
    currentAnswer.textContent = questions[counter].answer[i];
  };
};




