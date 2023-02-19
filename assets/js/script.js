var startButton = document.querySelector(".start-button")
var timeLeft = document.querySelector(".timer")
var secondsLeft = 60;

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
var questionResult = document.querySelector("#question-result")
var initialText = document.querySelector("#initial-content");
var questionBox = document.querySelector("#question-content");
var resultBox = document.querySelector("#result-content")
var resultsDiv = document.querySelector("#results")
var quizQuestions = 0;
var currentQuestionsIndex = 0;
var score = 0
var deduction = 5
var timerInterval = 0



//hides question-box div
function initialScreen () {
    questionBox.setAttribute("style", "visibility:hidden;")
    resultsDiv.setAttribute("style", "visibility:hidden;")
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
        gameOver()
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
        // var gradingDiv = document.createElement("div");
        // gradingDiv.setAttribute('id', 'gradingDiv');

        console.log(button)
        console.log(button.value)
        console.log(questions[currentQuestionsIndex].answer)
    if (button.value === questions[currentQuestionsIndex].answer) {
        score ++;
        resultBox.textContent = "Great! That answer is correct";
    } else {
        secondsLeft = secondsLeft - deduction;
        resultBox.textContent = "Incorrect. The correct answer is " + questions[currentQuestionsIndex].answer;
    }
}
currentQuestionsIndex++;

if (currentQuestionsIndex >= questions.length) {
    gameOver();
} else {
renderQuestion()
};
}

function gameOver() {
    questionBox.innerHTML = "";
    timeLeft.innerHTML = "";
    questionBox.setAttribute("style", "visibility:hidden")
    resultsDiv.setAttribute("style", "visibility:show;")
    var resultNode = document.getElementById('result-content');
    resultNode.textContent = "Time Is Up"


    //final score calculation and display
    if (secondsLeft >= 0) {
        var finalScore = secondsLeft;
        console.log(finalScore)
        var scoreDisplay = document.createElement('p');
        scoreDisplay.textContent = "You scored " + finalScore + " points!";
        //stop the timer
        timeLeft.setAttribute("style", "display:none")
        resultBox.appendChild(scoreDisplay)
    }

    var highScores = document.createElement("label");
    highScores.setAttribute("id", "highScores");
    highScores.textContent = "Enter your Nickname: "
    resultBox.appendChild(highScores);
    
    
    //input area
    var createForm = document.createElement("input");
    createForm.setAttribute("type", "text");
    createForm.setAttribute("id", "nickname");
    createForm.textContent = "";
    resultBox.appendChild(createForm);

    //submit button
    var submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submit");
    submit.textContent = "Save";
    resultBox.appendChild(submit);

    submit.addEventListener("click", function() {
        var nickname = createForm.value;
        
        if (!nickname) {
            window.alert("Please enter a nickname");
        } else {
            var scoreStorage = {
                nickname: nickname,
                score: secondsLeft
            }
            console.log(scoreStorage);
            var highScores = localStorage.getItem("highScores");
            if (highScores === null) {
                highScores = [];
            } else {
                highScores = JSON.parse(highScores);
            }
            highScores.push(scoreStorage);
            var leaderBoard = JSON.stringify(highScores);
            localStorage.setItem("highScores", leaderBoard);
            window.location.replace("./leaderBoard.html")
            }
    //         var highScores = localStorage.getItem("highScores");
    //         if (!highScores) {
    //             highScores = [];
    //         } else {
    //             highScores = JSON.parse(highScores);
    //         }
    //         highScores.push(scoreStorage);
    //         var addScore = JON.stringify(highScores);
    //         localStorage.setItem("highScores", addScore);
    //         window.location.replace("./scoreStorage.html")
    //     }
    // });
    });
};

