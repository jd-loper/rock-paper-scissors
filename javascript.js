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
        console.log("You win! Rock beats scissors.");
    } else if (playerSelect == "paper" && computerSelect === 0) {
        console.log("You win! Paper beats rock.");
    } else if (playerSelect == "scissors" && computerSelect === 1) {
        console.log("You win! Scissors beats paper.");
    } else if (computerSelect === 0 && playerSelect == "scissors") {
        console.log("You lose. Rock beats scissors.");
    } else if (computerSelect === 1 && playerSelect == "rock") {
        console.log("You lose. Paper beats rock.");
    } else if (computerSelect === 2 && playerSelect == "paper") {
        console.log("You lose. Scissors beats paper.");
    } else if (playerSelect == "rock" && computerSelect === 0) {
        console.log("Tie!");
    } else if (playerSelect == "paper" && computerSelect === 1) {
        console.log("Tie!");
    } else if (playerSelect == "scissors" && computerSelect === 2) {
        console.log("Tie!");
    } else {
        console.log("Error.");
    }
}

const playerSelect = playerPlay();
const computerSelect = computerPlay();

round(computerSelect, playerSelect);