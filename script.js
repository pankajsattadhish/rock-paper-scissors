const playRound = function () {
  const getcomputerchoice = function () {
    const choices = ["rock", "paper", "scissor"];
    const choiceNum = Math.trunc(Math.random() * 3);
    return choices[choiceNum];
  };
  const computerChoice = getcomputerchoice();

  const getHumanChoice = function () {
    const userChoice = prompt(
      `Enter your Choice ('rock', 'paper' or 'scissor') :`
    );
    return userChoice;
  };
  const humanChoice = getHumanChoice();

  let humanScore = 0;
  let computerScore = 0;

  if (computerChoice == "rock" && humanChoice == "paper") {
    humanScore += 1;
    console.log("You win!");
  } else if (computerChoice == "paper" && humanChoice == "rock") {
    computerScore += 1;
    console.log("Computer wins!");
  } else if (computerChoice == "paper" && humanChoice == "scissor") {
    humanScore += 1;
    console.log("You win!");
  } else if (computerChoice == "scissor" && humanChoice == "paper") {
    computerScore += 1;
    console.log("Computer wins!");
  } else if (computerChoice == "rock" && humanChoice == "scissor") {
    computerScore += 1;
    console.log("Computer wins!");
  } else if (computerChoice == "scissor" && humanChoice == "rock") {
    humanScore += 1;
    console.log("You win!");
  } else {
    console.log("It's a Draw or you entered wrong keyword!");
  }
};

playRound();
