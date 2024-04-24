let win = 0;
let loss = 0;
let tie = 0;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

playRound.addEventListener("click", function () {
  for (i = 0; i < 5; i++) {
    let userChoice = prompt("Rock, paper, or scissors?").toUpperCase();
    if (!userChoice) {
      console.log("That's not how this game works!");
      loss += 1;
    } else {
      console.log("Player:" + " " + userChoice);
    }

    let computerChoice = Math.ceil(Math.random() * 3);
    if (computerChoice == 1) {
      computerChoice = "ROCK";
    } else if (computerChoice == 2) {
      computerChoice = "PAPER";
    } else {
      computerChoice = "SCISSORS";
    }

    console.log("Computer:" + " " + computerChoice);
    let compare = function (choice1, choice2) {
      if (choice1 === choice2) {
        tie += 1;
        return "It's a tie!";
      }
      if (choice1 === "ROCK") {
        if (choice2 === "SCISSORS") {
          win += 1;
          return "You win!";
        } else {
          loss += 1;
          return "You lose! Try again.";
        }
      }
      if (choice1 === "PAPER") {
        if (choice2 === "ROCK") {
          win += 1;
          return "You win!";
        } else {
          loss += 1;
          return "You lose! Try again.";
        }
      }
      if (choice1 === "SCISSORS") {
        if (choice2 === "ROCK") {
          loss += 1;
          return "You lose! Try again.";
        } else {
          win += 1;
          return "You win!";
        }
      }
    };
    let results = compare(userChoice, computerChoice);
    console.log("Results: " + results);
  }
});

console.log("Final Results: W-" + win + "; L-" + loss + "; T-" + tie + ";");
let finalResult = function (win, loss) {
  if (win >= 3) {
    console.log("You win the game!");
  } else if (loss >= 3) {
    console.log("You lose the game...");
  } else {
    console.log("Stalemate! Try again.");
  }
};
finalResult(win, loss);
