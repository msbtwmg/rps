const options = ["Rock", "Paper", "Scissors"];
let playerWin = 0;
let computerWin = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function playRound(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();

    if (playerSelection == "rock") {
        if (computerSelection == "Scissors") {
            ++playerWin;
            return "You Win! Rock beats Scissors";
        } else if (computerSelection == "Rock") {
            return "It's a draw";
        } else if (computerSelection == "Paper") {
            ++computerWin;
            return "You Lose! Paper beats Rock!";
        }
   }
    if (playerSelection == "paper") {
        if (computerSelection == "Scissors") {
            ++computerWin;
            return "You Lose! Scissors beats Paper";
        } else if (computerSelection == "Rock") {
            ++playerWin;
            return "You Win! Paper beats Rock";
        } else if (computerSelection == "Paper") {
            return "It's a draw";
        }
    }
    if (playerSelection == "scissors") {
        if (computerSelection == "Scissors") {
            return "It's a draw";
        } else if (computerSelection == "Rock") {
            ++computerWin;
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection == "Paper") {
            ++playerWin;
            return "You Win! Scissors beats Paper";
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        
        computerSelection = getComputerChoice();
        playerSelection = prompt("Rock, Paper or Scissors?");

        playRound(playerSelection, computerSelection);

        console.log("PC: " + computerSelection);
        console.log("P: " + playerSelection);

    }
    console.log("Punkte Pc: " + computerWin);
    console.log("Punkte Player: " + playerWin);

    
    if (playerWin > computerWin) {
         alert("You are the winner!");
    } else if (computerWin > playerWin) {
        alert("You are the loser!");
    } else {
        alert("It's a draw! No one wins!");
    }
}

console.log(game());