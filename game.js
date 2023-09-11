
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors']

    return choices[Math.floor(Math.random() * choices.length)]
}


function playRound(playerSelection, computerSelection) {    

    firstLetter = playerSelection.charAt(0).toUpperCase()
    otherLetters = playerSelection.slice(1).toLowerCase()

    playerSelection = firstLetter + otherLetters

    computerSelection = getComputerChoice()

    if (playerSelection === computerSelection) {
        return "It's a draw."
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' || 
                playerSelection === 'Scissors' && computerSelection === 'Paper' || 
                playerSelection === 'Paper' && computerSelection === 'Rock') {
            return `You won! ${playerSelection} beats ${computerSelection}`
     } else {
        return `You lost! ${computerSelection} beats ${playerSelection}`
     }
            
}

function game() {

    let userScore = 0
    let computerScore = 0

    

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper, or scissors?")
        const computerSelection = getComputerChoice()
        const result = playRound(playerSelection, computerSelection)

        console.log(result)
        
        if(result.includes("won")) {
            userScore++
        } else if(result.includes("lost")) {
            computerScore++
        }
    }

    if (userScore > computerScore) {
        console.log(`You won by a score of ${userScore} to ${computerScore}`)
    } else if (computerScore > userScore) {
        console.log(`You lost by a score of ${computerScore} to ${userScore}`)
    } else if (computerScore === userScore) {
        console.log("It's a draw!")
    }
}

game()
 