var startButton = document.querySelector(".start-button")
var timeLeft = document.querySelector(".timer")
var secondsLeft = 75;

var questions = [ 
    {
        question: "What does DOM stand for?",
        choices: ["Do One More", "Document Object Model", "Domain Object Model", "Document One Model"],
        answer: "Document Object Model"
    },
    {
        question: "True or False: JavaScript is a programming language.",
        choices: ["True", "False"],
        answer: "True"
    },
    {
        question: "Which of the following is not a primitive value?",
        choices: ["indexes", "numbers", "booleans", "strings"],
        answer: "indexes"
    },
    {
        question: "Which of the following comparison operators means Strictly Unequal to with no type conversion?",
        choices: ["!=", "x", "==", "! =="],
        answer: "! =="
    },
    {
        question: "What does || mean?",
        choices: ["and", "not", "null", "or"],
        answer: "or"
    },
    {
        question: "What does the term scope refer to?",
        choices: ["the visibility of a variable", "the visibility of a function", "mouthwash", "how Javascript is linked to HTML"],
        answer: "the visibility of a variable"
    },
    {
       question: "What is the proper tag used to link JavaScript to HTML?",
       choices: ["<java>", "<script>", "<javascript>", "<src>"],
       answer: "<script>"
    }
];


var multipleChoice = document.querySelector("#multiple-choice");
var initialText = document.querySelector("#initial-text");
var quizQuestions = 0;
var currentQuestionsIndex = 0;
var score = 0
var deduction = 5

var questionBox = document.querySelector("#question-content");

//hides question-box div
function initialScreen () {
    questionBox.setAttribute("style", "visibility:hidden;")
}
initialScreen()

startButton.addEventListener("click", function() {
    questionBox.setAttribute("style", "visibility:show;")
//starts timer on click
var timerInterval = setInterval(function() {
    if (secondsLeft > 0) {
        timeLeft.textContent = "Timer: " + secondsLeft;
        secondsLeft--;
    } else {
        timeLeft.textContent = "GAME OVER"
        clearInterval(timerInterval);
        return;
    }
}, 1000);
//starts questions
render()
renderQuestion();

});

//generates quiz questions
function render() {
    initialText.setAttribute("style", "display:none;")
}

function renderQuestion() {

    var question = questions[currentQuestionsIndex];
    var titleEl = document.getElementById('question-text');
    titleEl.textContent = question.question;

    multipleChoice.innerHTML = '';
    for (var i = 0; i < question.choices.length; i++) {
        //create new button for each choice
        var choice = question.choices[i];
        var choiceNode = document.createElement('button');
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);

        choiceNode.textContent = i + 1 + '. ' + choice;

        //display on the page
        multipleChoice.appendChild(choiceNode);  
        choiceNode.addEventListener("click", (grade)) 
};
}
//grade answer
function grade(event) {
    var button = event.target;

    if (button.matches("button")) {
        var gradingDiv = document.createElement("div");
        gradingDiv.setAttribute('id', 'gradingDiv');

        console.log(button)
        console.log(button.value)
        console.log(questions[currentQuestionsIndex].answer)
    if (button.value === questions[currentQuestionsIndex].answer) {
        score ++;
        multipleChoice.textContent = "Great! That answer is correct";
    } else {
        secondsLeft = secondsLeft - deduction;
        multipleChoice.textContent = "Incorrect. The correct answer is " + questions[currentQuestionsIndex].answer;
    }
}
    currentQuestionsIndex++;
    renderQuestion()
}


  









