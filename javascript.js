let win = 0;
let loss = 0;
let tie = 0;
let roundCount = 0;
let maxRounds = 5;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const resultsDiv = document.querySelector("#results");

rockBtn.addEventListener("click", () => playRound("ROCK"));
paperBtn.addEventListener("click", () => playRound("PAPER"));
scissorsBtn.addEventListener("click", () => playRound("SCISSORS"));

function playRound(userChoice) {
  if (roundCount >= maxRounds) {
    finalResult();
    return;
  }

  const computerChoice = getComputerChoice();
  const result = compare(userChoice, computerChoice);

  resultsDiv.textContent = `\nRound ${
    roundCount + 1
  }: Player: ${userChoice} | Computer: ${computerChoice} | ${result}`;

  roundCount++;

  if (win >= 3 || loss >= 3) {
    finalResult();
  }
}

function getComputerChoice() {
  let computerChoice = Math.ceil(Math.random() * 3);
  if (computerChoice == 1) {
    return "ROCK";
  } else if (computerChoice == 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}

function compare(choice1, choice2) {
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
}

function finalResult() {
  let finalMessage;
  if (win >= 3) {
    finalMessage = "Congratulations, you win the game!";
  } else if (loss >= 3) {
    finalMessage = "You lose the game...";
  } else {
    finalMessage = "Stalemate!";
  }
  resultsDiv.innerHTML += `<br>${finalMessage}`;
}
