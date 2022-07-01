const rpsArray = ["Rock!", "Paper!", "Scissors!"];

const userInput = prompt("Rock, paper, or scissors?");

const randomValue = Math.floor(Math.random() * rpsArray.length);
console.log(rpsArray[randomValue]);

function rock() {
    if (userInput == "rock" && randomValue == 0) {
        return console.log("It's a tie!");
    } else if (userInput == "rock" && randomValue == 2) {
        return console.log("You win! Rock beats scissors.");
    } else {
        return console.log("You lose. Paper beats rock.");
    }
}

rock();