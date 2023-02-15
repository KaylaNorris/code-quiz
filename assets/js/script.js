let startButton = document.querySelector(".start-button")
let timeLeft = document.querySelector(".timer")
let secondsLeft = 75;

let questions = [ 
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


let multipleChoice = document.querySelector(".multiple-choice");
let quizQuestions = 0;
let choiceList = document.createElement("ul");
let questionBox = document.querySelector(".questions");


// function countdown()KEEP TO REVERT TO ORIGINAL

startButton.addEventListener("click", function() {
//starts timer on click
let timerInterval = setInterval(function() {
    if (secondsLeft > 0) {
        timeLeft.textContent = "Timer: " + secondsLeft;
        secondsLeft--;
    } else {
        timeLeft.textContent = "GAME OVER"
        clearInterval(timerInterval);
    }
}, 1000);
//starts questions
render(quizQuestions);
});

//generates quiz questions
function render(quizQuestions) {
    questionBox.textContent = "";
    //loops through questions
    for (let i = 0; i < questions.length; i++) {
        let quizQuestion = questions[quizQuestions].question;
        // let quizChoices = questions[quizQuestions].choices;
        questionBox.textContent = quizQuestion;
        questionBox.append(questions[i]);
    }
    multipleChoice.textContent = "";
    for (let i = 0; i < questions.length; i++) {
        let quizChoices = questions[quizQuestions].choices;
        multipleChoice.textContent = quizChoices;
        multipleChoice.append(choices[i]);
    }
}    
    

       
    
    // //to list multiple choices
    // quizChoices.forEach(function (createList) {
    //     let choiceOption = document.createElement("li");
    //     choiceOption.textContent = createList;
    //     questionBox.appendChild(choiceList);
    //     choiceList.appendChild(choiceOption);
    //     choiceOption.addEventListener("click", (grade));
    // });

console.log(multipleChoice)



// startButton.addEventListener("click", countdown) KEEP TO REVERT TO ORIGINAL