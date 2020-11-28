const readlineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0;
var userName = readlineSync.question("What's your name? ");
console.log("\n");
console.log("Hi " + userName + ", Welcome to " + chalk.bgYellow("DO YOU KNOW Tuhin ?"));
console.log("\n");
var questions = [
    {
        question: "Where do I live? ",
        answer: "Kolkata"
    },
    {
        question: "My favorite football player would be ? ",
        answer: "Messi"
    },
    {
        question: "My favourite color would be ? ",
        answer: "Orange"
    },
    {
        question: "Guess my birthday month : ",
        answer: "September"
    },
    {
        question: "My favourite actor would be ? ",
        answer: "Shah Rukh Khan"
    },
];
var highScores =
{
    name: "Tuhin",
    score: 5,
};
function playGame(question, answer) {
    var userAnswer = readlineSync.question(question);
    console.log("\n");

    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        console.log(chalk.green("Yup! You are right"));
        score++;
    } else {
        console.log(chalk.red("Nope... You are wrong !"));
    }
    console.log("Your Current Score: ", score);
    console.log("-------------")
}
for (var i = 0; i < questions.length; i++) {
    playGame(questions[i].question, questions[i].answer)
    console.log("\n");
}
if (score === 5) {
    console.log(chalk.yellow("You scored highest!!"));
}
console.log("Check out the highest scorers");
console.log("Name : " + highScores.name);
console.log("Score : " + highScores.score);