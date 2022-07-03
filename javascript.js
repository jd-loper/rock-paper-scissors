let win = 0;
let loss = 0;
let tie = 0;
for(i = 0; i < 5; i++) {

let userChoice = prompt("Rock, paper, or scissors?").toUpperCase();
if (! userChoice) {
    console.log("Please enter a value!");
} else {
    console.log("Player:" + " " + userChoice);
}

let computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "ROCK";
} else if (computerChoice <= 0.67) {
    computerChoice = "PAPER";
} else {
    computerChoice = "SCISSORS";
}

console.log("Computer:" + " " + computerChoice);
let compare = function(choice1,choice2) {
    if (choice1 === choice2) {
        tie+=1;
        return "It's a tie!";
    }
    if (choice1 === "ROCK") {
        if (choice2 === "SCISSORS") {
            win+=1;
            return "You win!";
        } else {
            loss+=1;
            return "You lose! Try again.";
        }
    }
    if (choice1 === "PAPER") {
        if (choice2 === "ROCK") {
            win+=1;
            return "You win!";
        } else {
            loss+=1;
            return "You lose! Try again.";
        }
    }
    if (choice1 === "SCISSORS") {
        if (choice2 === "ROCK") {
            loss+=1;
            return "You lose! Try again.";
        } else {
            win+=1;
            return "You win!";
        }
    }
};
let results = compare(userChoice,computerChoice);
console.log("Results: " + results);

}
console.log("Final Results: W-"+win+"; L-"+loss+"; T-"+tie+";");
let finalResult = function(win,loss,tie) {
if (win >= 3) {
    console.log("You win the game!");
} else if (loss >= 3) {
    console.log("You lose the game...");
} else {
    console.log("Stalemate! Try again.");
}
}
finalResult(win,loss);