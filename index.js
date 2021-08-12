const readlineSync = require("readline-sync");
const chalk = require("chalk");

const quizzes = [
  {
    question: "Where do I live? ",
    answer: "Kolkata",
  },
  {
    question: "My favourite football player would be ? ",
    answer: "Messi",
  },
  {
    question: "My favourite color would be ? ",
    answer: "Orange",
  },
  {
    question: "Guess my birthday month : ",
    answer: "September",
  },
  {
    question: "My favourite actor would be ? ",
    answer: "Shah Rukh Khan",
  },
];
let score = 0;

const username = readlineSync.question("What's your name? ");
console.log("\n");
console.log(`Hi ${username}, Welcome to ${chalk.bgRed("DO YOU KNOW Tuhin ?")}`);
console.log("\n");

const checkAnswer = (question, answer) => {
  const userAnswer = readlineSync.question(question);
  console.log("\n");

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("Yup! You are right"));
    score = score + 5;
  } else {
    console.log(chalk.red("Nope... You are wrong !"));
  }

  console.log("Your Current Score: ", score);
  console.log("-------------");
};

quizzes.forEach((quiz) => {
  checkAnswer(quiz.question, quiz.answer);
  console.log("\n");
});

console.log(chalk.green(`Final Score: ${score}`));

if (score === 25) {
  console.log(chalk.yellow("You scored highest!!"));
}
