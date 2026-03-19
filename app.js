let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userWinRate = document.querySelector("#user-score")
const compWinRate = document.querySelector("#comp-score")

// user choice
choices.forEach(choice => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})

// computer choice
const genRanChoice = () => {
    let options = ["rock", "paper", "scissor"]
    let rand = Math.floor(Math.random() * 3)
    return options[rand]
}

// Draw 
const drawGame = () => {
    // console.log("Game was Draw")
    msg.innerText = `Game was a Draw`
    msg.style.backgroundColor = "var(--msg-bg-color)"
}

// Game Logic
const playGame = (userChoice) => {
    const compChoice = genRanChoice()

    if (userChoice === compChoice) {
        drawGame()
    }

    else {
        let userWin = true

        if (userChoice === "rock") {
            //paper, scissor
            userWin = compChoice === "paper" ? false : true
        }
        else if (userChoice === "paper") {
            //rock, scissor
            userWin = compChoice === "rock" ? true : false
        }
        else if (userChoice === "scissor") {
            //rock, paper
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin, userChoice, compChoice)
    }
}

// Result
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        //update score
        userScore++
        userWinRate.innerText = userScore
        // console.log("You win")
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "var(--msg-bg-user-win)"
    }
    else {
        //update score
        compScore++
        compWinRate.innerText = compScore
        // console.log("You lose")
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "var(--msg-bg-comp-win)"
    }

    // Comparison Color
    compWinRate.style.color = compScore > userScore ? "red" : "var(--score-color)"
    userWinRate.style.color = userScore > compScore ? "green" : "var(--score-color)"
}
