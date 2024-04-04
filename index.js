import inq from 'inquirer';
let userChoice = true; //using to ask does the user to want play game again and again.
let uniqueNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
do {
    let numbr = await inq.prompt([{
            name: "guessNum",
            type: "number",
            message: "Guess any number b/w 1-100 : "
        }]);
    if (uniqueNum === numbr.guessNum) {
        console.log(`Congratulations! You Win the Game!!...`);
        uniqueNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    }
    else {
        if (numbr.guessNum < uniqueNum) {
            console.log("Guessed number is smaller than unique number.");
        }
        else {
            console.log("Guessed number is greater than unique number..");
        }
    }
    let playAgain = await inq.prompt([{
            name: "isPlay",
            type: "list",
            message: "Do you want to guess again?",
            choices: ["Yes", "No"]
        }]);
    (playAgain.isPlay == "Yes") ? userChoice = true : userChoice = false;
} while (userChoice);
console.log("Thanks for play!!...");
