// mechanics of game
function playRound(choice, compChoice) {
  if (choice === compChoice) {
    return (printAction.textContent = "Tie!");
  } else if (choice === "rock" && compChoice === "paper") {
    return (printAction.textContent = "I chose Paper! You Lose!");
  } else if (choice === "rock" && compChoice === "scissors") {
    return (printAction.textContent = "I chose Scissors! You Win!");
  } else if (choice === "paper" && compChoice === "rock") {
    return (printAction.textContent = "I chose Rock! You Win!");
  } else if (choice === "paper" && compChoice === "scissors") {
    return (printAction.textContent = "I chose Scissors! You Lose!");
  } else if (choice === "scissors" && compChoice === "rock") {
    return (printAction.textContent = "I chose Rock! You Lose!");
  } else if (choice === "scissors" && compChoice === "paper") {
    return (printAction.textContent = "I chose Paper! You Win!");
  } else choice == undefined;
  return (printAction.textContent = "Invalid entry. Try again!");
}

// defines computers choice
function compInput() {
  const compChoice = ["rock", "paper", "scissors"][
    Math.floor(Math.random() * 3)
  ];
  return compChoice;
}

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener("click", () => {
  const playerChoice = "rock";
  const compChoice = compInput();
  playRound(playerChoice, compChoice);
});

paper.addEventListener("click", () => {
  const playerChoice = "paper";
  const compChoice = compInput();
  playRound(playerChoice, compChoice);
});

scissors.addEventListener("click", () => {
  const playerChoice = "scissors";
  const compChoice = compInput();
  playRound(playerChoice, compChoice);
});

const printAction = document.getElementById("results");
