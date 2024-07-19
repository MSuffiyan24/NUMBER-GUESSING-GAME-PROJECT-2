import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1 )

const Answer = await inquirer.prompt([{
    name: 'GuessedNumber',
    type: 'number',
    message: "Please Guess a number B/w 1-10",

}])

if (Answer.GuessedNumber === randomNumber){
    console.log("You Guessed the correct number")
}
    else{
        console.log("you guessed the wrong number")
    }




