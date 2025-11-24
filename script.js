const getcomputerchoice = function () {
  const choices = ["rock", "paper", "scissor"];
  const choiceNum = Math.trunc(Math.random() * 3);
  return choices[choiceNum];
};

const getHumanChoice = function () {
  const userChoice = prompt(
    `Enter your Choice ('rock', 'paper' or 'scissor') :`
  );
  return userChoice;
};

let humanScore = 0;
let computerScore = 0;

const playRound = function (computerChoice, humanChoice) {
  if (computerChoice == "rock" && humanChoice == "paper") {
    humanScore += 1;
    console.log("You won this round!");
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    computerScore += 1;
    console.log("Computer won this round.");
  } else if (computerChoice == "paper" && humanChoice == "scissor") {
    humanScore += 1;
    console.log("You won this round!");
  } else if (computerChoice == "scissor" && humanChoice == "paper") {
    computerScore += 1;
    console.log("Computer won this round.");
  } else if (computerChoice == "rock" && humanChoice == "scissor") {
    computerScore += 1;
    console.log("Computer won this round.");
  } else if (computerChoice == "scissor" && humanChoice == "rock") {
    humanScore += 1;
    console.log("You won this round!");
  } else {
    console.log("It's a Draw or you entered wrong keyword!");
  }
};

const playGame = function () {
  for (i = 0; i < 5; i++) {
    playRound(getcomputerchoice(), getHumanChoice());
  }

  if (computerScore > humanScore) {
    console.log("Computer Wins the Game.");
  } else if (humanScore > computerScore) {
    console.log("You Won th Gme");
  } else {
    console.log("Its a Draw!");
  }
};

playGame();
