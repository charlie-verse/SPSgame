let userScore = 0 
let compScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score") 
const compScorePara = document.querySelector("#comp-score")

// generate computer choice
const genCompChoice = () => {
    //rock, paper, scissors 
    const options = ["rock", "paper", "scissors"]
    const randomIdx = Math.floor(Math.random() * 3) //generates random num between 0,1,2
    const compChoice = options[randomIdx]
    return compChoice
}


// user choice
choices.forEach( (choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice) // playgame func will know what the userchoice is 
    })
})


// draw case:
const drawGame = () => {
    msg.innerText = "Draw, Play Again!"
    msg.style.backgroundColor = "#081b31"
}


// playgame 
const playGame = (userChoice) => { //userchoice as an argument
    //computer choice => genCompChoice()
    const compChoice = genCompChoice()    

    // compare choices
    if(userChoice === compChoice) {
        drawGame()
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //then comp will have scissors or paper (cant be rock coz then draw condition would be executed)
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //then comp will have scissors or rock (cant be paper coz then draw condition would be executed)
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //user = scissor ; now comp will have paper or rock (cant be scissors coz then draw condition would be executed)
            userWin = compChoice === "rock" ? false : true;
        } 
        showWinner(userWin,userChoice,compChoice);
    }
}


// winner 
const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++; //initially set to 0 
        userScorePara.innerText = userScore;
        msg.innerText = `You win, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }else{
        compScore++; //initially set to 0 
        compScorePara.innerText = compScore;
        console.log("you lose");
        msg.innerText = `You lose, ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}
