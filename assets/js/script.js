let startButton = document.querySelector(".start-button")
let timeLeft = document.querySelector(".timer")
let secondsLeft = 75;

function countdown(){
let timerInterval = setInterval(function() {
    if (secondsLeft > 0) {
        timeLeft.textContent = "Timer: " + secondsLeft;
        secondsLeft--;
    } else {
        timeLeft.textContent = "GAME OVER"
        clearInterval(timerInterval);
    }
}, 1000);
}

startButton.addEventListener("click", countdown)

