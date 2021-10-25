//computerPlay function that randomly returns one of the defined possible values
function computerPlay () {
    let length = possibleValues.length;
    let randomValue = Math.floor(Math.random()*length);
    let randomPlay = possibleValues[randomValue];
    return randomPlay;
}

//determineWinner contains the actual rules and determines winning, losing and tieing
function determineWinner(user, computer) {
    let result;
    if (user===computer) {return result=0;}
    else if (user==="Rock" && computer==="Scissor") {return result=1}
    else if (user==="Scissor" && computer==="Paper") {return result=1}
    else if (user==="Paper" && computer==="Rock") {return result=1}
    else if (user==="Rock" && computer==="Paper") {return result=2}
    else if (user==="Scissor" && computer==="Rock") {return result=2}
    else if (user==="Paper" && computer==="Scissor") {return result=2}
}

//Play a Round
function playRound () {
    //Prompt User Input and display the possible Values
    let userValue = prompt(`Choose one of the following values:\n${possibleValues}`)
    
    //Check whether user input is valid
    if (possibleValues.indexOf(userValue) < 0) {
        console.log("That was not a valid input. You lose this round");
        return -1;
    }
    
    //Create random computer value, call computerPlay
    let computerValue = computerPlay();

    //Determine the winner, call determineWinner
    let gameResult = determineWinner(userValue, computerValue);
    
    //Display Result
    if(gameResult===0) {console.log(`It's a tie! You both chose ${userValue}`); return 0}
    else if (gameResult===1) {console.log(`You won! You chose ${userValue} and the computer chose ${computerValue}.`); return 1}
    else if (gameResult===2) {console.log(`You lost! You chose ${userValue} and the computer chose ${computerValue}.`); return -1}
    
}

//Play a game
function game() {
    let score = 0;
    console.log("Welcome to a game of five rounds, good luck to you!")
    for (i=1;i<=5;i++) {
        roundResult = playRound();
        score = score + roundResult;
    }
    if (score === 0) {console.log("It's  tie after all!")}
    else if (score > 0) {console.log("You won this epic tournament!")}
    else if (score < 0) {console.log("You have been defeated by the superior hardware, mere mortal!")}
}

//Define the possible Values in this version of the game
let possibleValues = ["Rock", "Paper", "Scissor"]

game();


