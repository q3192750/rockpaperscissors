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
function playRound(strPressedBtnId) {
    //Take into account one of the buttons pressed
    const userValue = strPressedBtnId;
      
    //Create random computer value, call computerPlay
    let computerValue = computerPlay();

    //Determine the winner, call determineWinner
    let gameResult = determineWinner(userValue, computerValue);
    
    //Display Result
    if(gameResult===0) {
        message.textContent = `It's a tie! You both chose ${userValue}.`;
        }
    else if (gameResult===1) {
        userScore = userScore + 1;
        message.textContent = `You won! You chose ${userValue} and the computer chose ${computerValue}.`;
        }
    else if (gameResult===2) {
        computerScore = computerScore + 1;
        message.textContent = `You lost! You chose ${userValue} and the computer chose ${computerValue}.`;
        }
    
    if (userScore >= 5) {
        message.textContent = "You won this epic tournament!";}
    if (computerScore >= 5) {
        message.textContent = "You have been defeated by the superior hardware, mere mortal!";}
    
    score1.textContent = `Your Score: ${userScore}`;
    score2.textContent = `AI Score: ${computerScore}`;
    
    return;
    
}

const possibleValues = ["Rock", "Paper", "Scissor"];
const buttons = document.querySelectorAll('button');
let message = document.querySelector('p.message');
let score1 = document.querySelector('p.score1');
let score2 = document.querySelector('p.score2');
let userScore = 0;
let computerScore = 0;
message.textContent = "Welcome to a game of Rock, Paper, Scissors! First one to win five rounds wins. Good luck to you!";

for (let i = 0; i < buttons.length; i++) {
    const objBtn = buttons[i];
    console.log(objBtn.id)
    objBtn.addEventListener("click",(e)=>{
        console.log(e);
        playRound(e.target.id);
    })
}


