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

function compInput() {
  const compChoice = ["rock", "paper", "scissors"][
    Math.floor(Math.random() * 3)
  ];
  return compChoice;
}

const rock = document.getElementById("#rock");
const paper = document.getElementById("#paper");
const scissors = document.getElementById("#scissors");
