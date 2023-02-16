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


let multipleChoice = document.querySelector("#multiple-choice");
let initialText = document.querySelector("#initial-text");
let quizQuestions = 0;

let questionBox = document.querySelector("#question-content");

//hides question-box div
function initialScreen () {
    questionBox.setAttribute("style", "visibility:hidden;")
}
initialScreen()

startButton.addEventListener("click", function() {
    questionBox.setAttribute("style", "visibility:show;")
//starts timer on click
let timerInterval = setInterval(function() {
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
render(quizQuestions);
});

//generates quiz questions
function render(quizQuestions) {
    initialText.setAttribute("style", "display:none;")
    let question = questions[0]
    questionBox.textContent = "";
    let quizQuestion = question.question;
    questionBox.textContent = quizQuestion;
    multipleChoice.textContent = "";
    // create list element
    let listEl = document.createElement("ul");
    //create list items
    let choiceOne = document.createElement("li");
    let choiceTwo = document.createElement("li");
    let choiceThree = document.createElement("li");
    let choiceFour = document.createElement("li");
    choiceOne.textContent = question.choices[0];
    choiceTwo.textContent = question.choices[1];
    choiceThree.textContent = question.choices[2];
    choiceFour.textContent = question.choices[3];

     //append list items to list element
     listEl.appendChild(choiceOne);
     listEl.appendChild(choiceTwo);
     listEl.appendChild(choiceThree);
     listEl.appendChild(choiceFour);
    
    //append list to multiple-choice ul
    multipleChoice.appendChild(listEl);
   
    // multipleChoice.textContent = listEl
  
    // let li2 = document.createElement("li");
    // let li3 = document.createElement("li");
    // let li4 = document.createElement("li");
    
    // li1.textContent = choices[0];
    // li2.textContent = choices[1];
    // li3.textContent = choices[2];
    // li4.textContent = choices[3];
    // let quizChoice = choices.choices;

    
    // multipleChoice.textContent = quizChoice;
    
}    
    

    
    
    // //to list multiple choices
    // let quizChoices = questions[quizQuestions].choices
    // quizChoices.forEach(function (createList) {
    //     let choiceOption = document.createElement("li");
    //     let quizChoices = questions[quizQuestions].choices
    //     choiceOption.textContent = quizChoices;
    //     multipleChoice.append(quizChoices);
    //     choiceList.appendChild(choiceOption);
    //     choiceOption.addEventListener("click", (grade));
    // });





// startButton.addEventListener("click", countdown) KEEP TO REVERT TO ORIGINAL