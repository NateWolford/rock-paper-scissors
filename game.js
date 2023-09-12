let gameState = {
    userScore: 0,
    computerScore: 0,
    winningScore: 3,
    inProgress: true
}


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

function handleButtonClick(choice) {
    if (!gameState.inProgress) return
    
    const playerSelection = choice
    const computerSelection = getComputerChoice()
    const result = playRound(playerSelection, computerSelection)

    if (result.includes("won")) {
        gameState.userScore++
        document.getElementById("score").innerHTML = `Score: You: ${gameState.userScore} Computer ${gameState.computerScore}`
    } else if (result.includes("lost")) {
        gameState.computerScore++
        document.getElementById("score").innerHTML = `Score: You: ${gameState.userScore} Computer ${gameState.computerScore}`
    }

    document.getElementById("rounds").innerHTML = result

    if (gameState.userScore === gameState.winningScore || gameState.computerScore === gameState.winningScore) {
        endGame()
    } 
    
}

function endGame() {
    gameState.inProgress = false;

    if (gameState.userScore > gameState.computerScore) {
        document.getElementById("finalscore").innerHTML = (`You won by a score of ${gameState.userScore} to ${gameState.computerScore}`)
    } else if (gameState.computerScore > gameState.userScore) {
        document.getElementById("finalscore").innerHTML = (`You lost by a score of ${gameState.computerScore} to ${gameState.userScore}`)
    } else {
        document.getElementById("finalscore").innerHTML = ("It's a draw!")
    }

    document.getElementById("startGameButton").style.display = 'block'
}

function game() {
    const choices = ['Rock', 'Paper', 'Scissors']


    choices.forEach(function(choice) {
        document.getElementById(choice).addEventListener('click', function() {
            handleButtonClick(this.id)
        })
    })
} 

function resetGame() {
    gameState.userScore = 0
    gameState.computerScore = 0
    gameState.inProgress = true

    document.getElementById("finalscore").innerHTML = ''
    document.getElementById("score") = ''
}

document.getElementById("startGameButton").addEventListener('click', function() {
    resetGame()

    this.style.display = none
})


game()
 