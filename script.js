let playerScore = 0;
let compScore = 0;

// mechanics of game
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
  if (playerScore === 5) {
    printAction.textContent = "You Won the Game!";
    playerScore = 0;
    document.getElementById("playerScore").textContent = playerScore;
    compScore = 0;
    document.getElementById("compScore").textContent = compScore;
  }
  if (compScore === 5) {
    printAction.textContent = "I Won the Game!";
    playerScore = 0;
    document.getElementById("playerScore").textContent = playerScore;
    compScore = 0;
    document.getElementById("compScore").textContent = compScore;
  }
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
