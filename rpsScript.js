const options = ["Rock", "Paper", "Scissors"];
let playerWin = 0;
let computerWin = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * options.length);
    return options[random];
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "Rock") {
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

    if (playerSelection == "Paper") {
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
    if (playerSelection == "Scissors") {
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
    for (let i = 0; i < 5; ++i) {
        playRound(playerSelection, computerSelection);
        computerSelection = getComputerChoice();
        // playerSelection NEU DEFINIEREN;

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

let playerSelection = "Paper";
let computerSelection = getComputerChoice();
console.log(game());