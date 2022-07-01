const rpsArray = ["Rock!", "Paper!", "Scissors!"];

const userInput = prompt("Rock, paper, or scissors?").toLowerCase();

const randomValue = Math.floor(Math.random() * rpsArray.length);
console.log(`Computer: ${rpsArray[randomValue]}`);

function rock() {
    if (userInput == "rock" && randomValue == 0) {
        return console.log("It's a tie!");
    } else if (userInput == "rock" && randomValue == 2) {
        return console.log("You win! Rock beats scissors.");
    } else (userInput == "rock" && randomValue == 1); {
        return console.log("You lose. Paper beats rock.");
    }
}

function paper() {
    if (userInput == "paper" && randomValue == 1) {
        return console.log("It's a tie!");
    } else if (userInput == "paper" && randomValue == 0) {
        return console.log("You win! Paper beats rock.");
    } else (userInput == "paper" && randomValue == 2); {
        return console.log("You lose. Scissors beats paper.");
    }
}

function scissors() {
    if (userInput == "scissors" && randomValue == 2) {
        return console.log("It's a tie!");
    } else if (userInput == "scissors" && randomValue == 1) {
        return console.log("You win! Scissors beats paper.")
    } else (userInput == "scissors" && randomValue == 0); {
        return console.log("You lose. Rock beats scissors.");
    }
}

function roundOne() {
    if (userInput == "rock") {
        rock();
    } else if (userInput == "paper") {
        paper();
    } else if (userInput == "scissors") {
        scissors();
    } else {
        return console.log("Error.");
    }
}

roundOne();