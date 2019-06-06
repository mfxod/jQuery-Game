
// initialize()

// if (playerScore === targetNumber) { wins++; initialize(); }
// else if (playerScore > targetNumber) { losses++; initialize(); }
// else { main game play }

// follow CrystalExample to assign data- attrs to crystals
// follow CalculatorExample to do button clicks with THIS

// convert data-crystal-value to number type with parseInt
// or, maybe this?
// counter += parseInt($(this).attr("data-crystalvalue"))



// ----- GLOBAL VARIABLES -----

let targetNumber = 0;
let crystalValues = [];
let playerScore = 0;
let wins = 0;
let losses = 0;



// ----- FUNCTIONS -----

// sets targetNumber to a random # between 19 and 120
function setTargetNumber() {
    targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#target-number").text(targetNumber);
}

// displays playerScore
function showPlayerScore() {
    $("#score").text(playerScore);
}

// sets playerScore to 0, resets random targetNumber and crystalValues
function initialize() {
    playerScore = 0;
    showPlayerScore()
    setTargetNumber();
    setCrystalValues();
    crystalAttr();
}

// for loop to push four random #s between 1 and 12 into crystalValues 
function setCrystalValues() {
    for (var i = 0; i < 4; i++) {
        crystalValues.push(Math.floor(Math.random() * 12) + 1);
    }
}

// create data- attributes to hold crystalValues
function crystalAttr() {
    $("#blue-crystal").attr("data-crystal-value", crystalValues[0]);
    $("#green-crystal").attr("data-crystal-value", crystalValues[1]);
    $("#red-crystal").attr("data-crystal-value", crystalValues[2]);
    $("#yellow-crystal").attr("data-crystal-value", crystalValues[3]);
}

// increment and show wins
function showWins() {
    wins++;
    $("#wins").text(wins);
}

// increment and show losses
function showLosses() {
    losses++;
    $("#losses").text(losses);
}



// ----- PROCESS -----

// get game ready
initialize();
console.log(crystalValues);
$("#wins").text(wins);
$("#losses").text(losses);

// game play logic
$( document ).ready(function() {

    // when a crystal is clicked convert it's data- attr value to a #
    // and then add that # to playerScore
    $(".crystal-img").on("click", function() {
        let score = parseInt($(this).attr("data-crystal-value"));
        playerScore += score;
        showPlayerScore();

        if (playerScore === targetNumber) {
            showWins();
            initialize();
            alert("You win!");
        } else if (playerScore > targetNumber) {
            showLosses();
            initialize();
            alert("You lose!");
        } 
    })
});