function round() {
    if (choice == "rock" && randomValue == 2) {
        console.log("You win! Rock beats scissors.");
    } else if (choice == "paper" && randomValue == 0) {
        console.log("You win! Paper beats rock.");
    } else if (choice == "scissors" && randomValue == 1) {
        console.log("You win! Scissors beats paper.");
    } else if (randomValue == 0 && choice == "scissors") {
        console.log("You lose. Rock beats scissors.");
    } else if (randomValue == 1 && choice == "rock") {
        console.log("You lose. Paper beats rock.");
    } else if (randomValue == 2 && choice == "paper") {
        console.log("You lose. Scissors beats paper.");
    } else if (choice == "rock" && randomValue == 0) {
        console.log("Tie!");
    } else if (choice == "paper" && randomValue == 1) {
        console.log("Tie!");
    } else if (choice == "scissors" && randomValue == 2) {
        console.log("Tie!");
    } else {
        console.log("Error.");
    }
}

const rpsArray = ["Rock", "Paper", "Scissors"];
const randomValue = Math.floor(Math.random() * rpsArray.length);
const choice = prompt("Rock, paper, or scissors?").toLowerCase();

round();