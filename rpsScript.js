
const options = ["Rock", "Paper", "Scissors"];
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultDiv = document.querySelector(".result");
const choiceDiv = document.querySelector(".choice");
const winnerDiv = document.querySelector(".winner");


let playerWin = 0;
let computerWin = 0;

function getComputerChoice(){
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function playRound(playerSelection, computerSelection) {
    
// display choices 
    var choice = document.createElement("p");
    resultDiv.innerHTML = ""; // reset 
    choice.innerText = "Player: " + playerSelection + " Computer: " + computerSelection;

// display results 
    var p = document.createElement("p");
    resultDiv.innerHTML = "";
    choiceDiv.innerHTML = "";
    winnerDiv.innerHTML = "";

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        p.innerText = "It's a draw!";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        ++playerWin;
        p.innerText =  "You Win! Rock beats Scissors";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        ++computerWin;
        p.innerText = "You Lose! Paper beats Rock!";  
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        ++computerWin;
        p.innerText = "You Lose! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        ++playerWin;
        p.innerText = "You Win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        ++computerWin;
        p.innerText = "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        ++playerWin;
        p.innerText = "You Win! Scissors beats Paper";
    }
    // win when 5 points 
    if (playerWin <= 5 && computerWin <= 5) {
        var score = document.createElement("p");
        var winner = document.createElement("p");
        score.innerText = "Player Score: " + playerWin + " Computer Score: " + computerWin;

        if (playerWin == 5) {
            winner.innerText = "WINNER: PLAYER!";
            return;
        }

        if (computerWin == 5) {
            winner.innerText = "WINNER: COMPUTER!";
            return;
        }
    } 
    
    resultDiv.appendChild(p);
    choiceDiv.appendChild(choice);
    winnerDiv.appendChild(score);
    winnerDiv.appendChild(winner);

}




// button functions 
rockBtn.addEventListener("click", () => {
    const playerSelection = "Rock";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

paperBtn.addEventListener("click", () => {
    const playerSelection = "Paper";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

scissorsBtn.addEventListener("click", () => {
    const playerSelection = "Scissors";
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});


// function game() {
//     // for (let i = 0; i < 5; i++) {
            
//     //         computerSelection = getComputerChoice();
//     //         playerSelection = prompt("Rock, Paper or Scissors?");

//     //         playRound(playerSelection, computerSelection);
        
//     //     console.log("PC: " + computerSelection);
//     //     console.log("P: " + playerSelection);
//     // }
   
//     console.log("Player POINTS:" + playerWin);
//     console.log("Computer POINTS:" + computerWin);
    
//     if (playerWin > computerWin) {
//          alert("You are the winner!");
//     } else if (computerWin > playerWin) {
//         alert("You are the loser!");
//     } else {
//         alert("It's a draw! No one wins!");
//     }
// }



