function computerPlay() {
    const rpsArray = ["Rock", "Paper", "Scissors"];
    const randomValue = Math.floor(Math.random() * rpsArray.length);

    if (randomValue == 0) {
        return 0;
    } else if (randomValue == 1) {
        return 1;
    } else if (randomValue == 2) {
        return 2;
    }
}

function playerPlay() {
    let choice = prompt("Rock, paper, or scissors?").toLowerCase();
    return choice;
}

function round(computerSelect, playerSelect) {
    if (playerSelect == "rock" && computerSelect === 2) {
        return "player";
    } else if (playerSelect == "paper" && computerSelect === 0) {
        return "player";
    } else if (playerSelect == "scissors" && computerSelect === 1) {
        return "player";
    } else if (computerSelect === 0 && playerSelect == "scissors") {
        return "computer";
    } else if (computerSelect === 1 && playerSelect == "rock") {
        return "computer";
    } else if (computerSelect === 2 && playerSelect == "paper") {
        return "computer";
    } else if (playerSelect == "rock" && computerSelect === 0) {
        return "tie";
    } else if (playerSelect == "paper" && computerSelect === 1) {
        return "tie";
    } else if (playerSelect == "scissors" && computerSelect === 2) {
        return "tie";
    } else {
        console.log("Error.");
    }
}

const playerSelect = playerPlay();
const computerSelect = computerPlay();

let playerScore = 0
let computerScore = 0

function game() {
    let result = round(computerSelect, playerSelect);

    if (result == "player") {
        playerScore++;
        console.log("You win this round!");
    } else if (result == "computer") {
        computerScore++;
        console.log("Uh-oh. You've lost.");
    } else if (result == "tie") {
        console.log("Tie! Try again.");
    }

    if (playerScore == 5) {
        console.log("You've won the game!");
    } else if (computerScore == 5) {
        console.log("You've lost the game...");
    }
}

for (let i = 0; i < 5; i++) {
    game();
}