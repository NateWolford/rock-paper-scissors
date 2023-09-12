
function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors']

    return choices[Math.floor(Math.random() * choices.length)]
}


function playRound(playerSelection, computerSelection) {    

    firstLetter = playerSelection.charAt(0).toUpperCase()
    otherLetters = playerSelection.slice(1).toLowerCase()

    playerSelection = firstLetter + otherLetters

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

    const rockButton = document.getElementById("Rock")
    const paperButton = document.getElementById("Paper")
    const scissorsButton = document.getElementById("Scissors")

 

    rockButton.addEventListener("click", function() {
        let playerSelection = "rock"
        let computerSelection = getComputerChoice()
        const result = playRound(playerSelection, computerSelection)

        if(result.includes("won")) {
            userScore++
        } else if(result.includes("lost")) {
            computerScore++
        }
        document.getElementById("rounds").innerHTML = result
    })

    paperButton.addEventListener("click", function() {
        let playerSelection = "paper"
        let computerSelection = getComputerChoice()
        const result = playRound(playerSelection, computerSelection)

        if(result.includes("won")) {
            userScore++
        } else if(result.includes("lost")) {
            computerScore++
        }
        
    })

    scissorsButton.addEventListener("click", function() {
        let playerSelection = "scissors"
        let computerSelection = getComputerChoice()
        const result = playRound(playerSelection, computerSelection)

        if(result.includes("won")) {
            userScore++
        } else if(result.includes("lost")) {
            computerScore++
        }
    })

    if (userScore > computerScore) {
        console.log(`You won by a score of ${userScore} to ${computerScore}`)
    } else if (computerScore > userScore) {
        console.log(`You lost by a score of ${computerScore} to ${userScore}`)
    } else if (computerScore === userScore) {
        console.log("It's a draw!")
    }
  }


game()
 