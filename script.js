const getComputerChoice = function () {
  const choices = ["Rock", "Paper", "Scissor"];
  const choiceNum = Math.trunc(Math.random() * 3);
  return choices[choiceNum];
};

const getHumanChoice = function () {
  const userChoice = prompt(
    `Enter your Choice ('rock', 'paper' or 'scissor') :`
  );
  return userChoice;
};
