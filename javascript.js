const rpsArray = ["Rock!", "Paper!", "Scissors!"];

const randomValue = Math.floor(Math.random() * rpsArray.length);
console.log(`Computer: ${rpsArray[randomValue]}`);

function computerSelection() {
    return randomValue;
}

computerSelection();