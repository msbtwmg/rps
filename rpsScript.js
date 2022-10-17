const options = ["Rock", "Paper", "Scissors"];
let playerWin, computerWin;
parseInt(playerWin);

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
            ++computerWin;
            return "You Win! Scissors beats Paper";
        }
    }
}

function game() {
    for (let i = 0; i < 5; ++i) {
        playRound();

        console.log("PC: " + computerWin);
        console.log("Player: " + playerWin);
    }

    // if (playerWin > computerWin) {
    //      alert("You are the winner!");
    // } else if (computerWin > playerWin) {
    //     alert("You are the loser!");
    // } else {
    //     alert("It's a draw! No one wins!");
    // }
}

const playerSelection = "Paper";
const computerSelection = getComputerChoice();
console.log(game());