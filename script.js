let playerScore = 0;
let compScore = 0;

// mechanics of game
// function playRound(choice, compChoice) {
//   if (choice === compChoice) {
//     return (printAction.textContent = "Tie!");
//   } else if (choice === "rock" && compChoice === "paper") {
//     return (printAction.textContent = "I chose Paper! You Lose!");
//   } else if (choice === "rock" && compChoice === "scissors") {
//     return (printAction.textContent = "I chose Scissors! You Win!");
//   } else if (choice === "paper" && compChoice === "rock") {
//     return (printAction.textContent = "I chose Rock! You Win!");
//   } else if (choice === "paper" && compChoice === "scissors") {
//     return (printAction.textContent = "I chose Scissors! You Lose!");
//   } else if (choice === "scissors" && compChoice === "rock") {
//     return (printAction.textContent = "I chose Rock! You Lose!");
//   } else if (choice === "scissors" && compChoice === "paper") {
//     return (printAction.textContent = "I chose Paper! You Win!");
//   } else choice == undefined;
//   return (printAction.textContent = "Invalid entry. Try again!");
// }

function playRound(choice, compChoice) {
  switch (choice) {
    case "rock":
      switch (compChoice) {
        case "rock":
          printAction.textContent = "Tie!";
          break;
        case "paper":
          printAction.textContent = "I chose Paper! You Lose!";
          compScore++;
          document.getElementById("compScore").textContent = compScore;
          break;
        case "scissors":
          printAction.textContent = "I chose Scissors! You Win!";
          playerScore++;
          document.getElementById("playerScore").textContent = playerScore;
          break;
      }
      break;
    case "paper":
      switch (compChoice) {
        case "rock":
          printAction.textContent = "I chose Rock! You Win!";
          playerScore++;
          document.getElementById("playerScore").textContent = playerScore;
          break;
        case "paper":
          printAction.textContent = "Tie!";
          break;
        case "scissors":
          printAction.textContent = "I chose Scissors! You Lose!";
          compScore++;
          document.getElementById("compScore").textContent = compScore;
          break;
      }
      break;
    case "scissors":
      switch (compChoice) {
        case "rock":
          printAction.textContent = "I chose Rock! You Lose!";
          compScore++;
          document.getElementById("compScore").textContent = compScore;
          break;
        case "paper":
          printAction.textContent = "I chose Paper! You Win!";
          playerScore++;
          document.getElementById("playerScore").textContent = playerScore;
          break;
        case "scissors":
          printAction.textContent = "Tie!";
          break;
      }
      break;
  }
  console.log(`player score: ${playerScore}`);
  console.log(`comp score: ${compScore}`);
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// defines computers choice
function compInput() {
  const compChoice = ["rock", "paper", "scissors"][
    Math.floor(Math.random() * 3)
  ];
  return compChoice;
}

rock.addEventListener("click", () => {
  const playerChoice = "rock";
  const compChoice = compInput();
  return playRound(playerChoice, compChoice);
});

paper.addEventListener("click", () => {
  const playerChoice = "paper";
  const compChoice = compInput();
  return playRound(playerChoice, compChoice);
});

scissors.addEventListener("click", () => {
  const playerChoice = "scissors";
  const compChoice = compInput();
  return playRound(playerChoice, compChoice);
});

const printAction = document.getElementById("results");
