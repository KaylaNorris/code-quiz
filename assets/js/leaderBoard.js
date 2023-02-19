var leaderBoard = document.querySelector("#leader-board");
var clear = document.querySelector("#clear");
var replay = document.querySelector(".start-button");

// Retreives local stroage 
var highScores = localStorage.getItem("highScores");
highScores = JSON.parse(highScores);

if (highScores !== null) {

    for (var i = 0; i < highScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = highScores[i].nickname + " " + highScores[i].score;
        leaderBoard.appendChild(createLi);

    }
}
// Event listener to move to index page
replay.addEventListener("click", function () {
    window.location.replace("./index.html");
});