// input for rock paper or scissors

// line for console to pick randomly between rock
// paper or scissors

// line to compare input to random choice and see which one
// wins

// output win or lose

function playRound(choice, compChoice) {
  if (choice === compChoice) {
    return "Tie!";
  } else if (choice === "rock" && compChoice === "paper") {
    return "I chose Paper! You Lose!";
  } else if (choice === "rock" && compChoice === "scissors") {
    return "I chose Scissors! You Win!";
  } else if (choice === "paper" && compChoice === "rock") {
    return "I chose Rock! You Win!";
  } else if (choice === "paper" && compChoice === "scissors") {
    return "I chose Scissors! You Lose!";
  } else if (choice === "scissors" && compChoice === "rock") {
    return "I chose Rock! You Lose!";
  } else if (choice === "scissors" && compChoice === "paper") {
    return "I chose Paper! You Win!";
  } else choice == undefined;
  return "Invalid entry. Try again!";
}

const choice = prompt("Rock, Paper, or Scissors?").toLowerCase().trim();

const compChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

console.log(playRound(choice, compChoice));
