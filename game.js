
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors']

    return choices[Math.floor(Math.random() * choices.length)]
}


function playRound(playerSelection, computerSelection) {    

    playerInput = prompt("What's your pick? Rock, Paper, or Scissors")
    firstLetter = playerInput.charAt(0).toUpperCase()
    otherLetters = playerInput.slice(1).toLowerCase()

    playerSelection = firstLetter + otherLetters

    computerSelection = getComputerChoice()

    let gameResult

    console.log(computerSelection)

    if (playerSelection === 'Rock' && computerSelection === "Paper") {
        gameResult = "You lost! Paper beats rock."
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        gameResult = "You won! Rock beats scissors."
    } else if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        gameResult = "It's a draw."
    }
    
    return gameResult
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
