// input for rock paper or scissors

// line for console to pick randomly between rock
// paper or scissors

// line to compare input to random choice and see which one
// wins

// output win or lose

const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

function gameRun(choice) {
  let compChoice = [rock, paper, scissors][Math.floor(Math.random() * 3)];
  if (choice === compChoice) {
    console.log("Tie!");
  } else if (choice === rock && compChoice === paper) {
    console.log("You Lose!");
  } else if (choice === rock && compChoice === scissors) {
    console.log("You Win!");
  } else if (choice === paper && compChoice === rock) {
    console.log("You Win!");
  } else if (choice === paper && compChoice === scissors) {
    console.log("You Lose!");
  } else if (choice === scissors && compChoice === rock) {
    console.log("You Lose!");
  } else if (choice === scissors && compChoice === paper) {
    console.log("You Win!");
  }
}

console.log(gameRun(paper));
