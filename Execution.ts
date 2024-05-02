import inq from 'inquirer';
import ch from 'chalk'
const Exe= async ()=>{
    let userChoice=true;//using to ask does the user to want play game again and again.
    let uniqueNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    do{
        let numbr=await inq.prompt([{
            name:"guessNum",
            type:"number",
            message:ch.yellow("Guess any number b/w 1-10 : ")
        }])
        if(uniqueNum===numbr.guessNum){
            console.log(ch.white.bgGreen.bold(`Congratulations! You Win the Game!!...`));
            uniqueNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        }
        else{
            if(numbr.guessNum<uniqueNum){
                console.log(ch.cyan("Guessed number is smaller than unique number."));
            }
            else{
                console.log(ch.cyan("Guessed number is greater than unique number.."));            
            }
        }      
        let playAgain=await inq.prompt([{
            name:"isPlay",
            type:"list",
            message:ch.yellow("Do you want to guess again?"),
            choices:["Yes","No"]
        }]);
    
        (playAgain.isPlay=="Yes")?userChoice=true:userChoice=false;
    }
    while(userChoice);
    console.log(ch.italic.bold.green("Thanks for play!!..."));
}

export default Exe;