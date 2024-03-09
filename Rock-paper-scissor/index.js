const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");
let compscorevalue = 0;
let userscorevalue = 0;

choices.forEach((choice) => {
    choice.addEventListener("click", function () {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

const playgame = (userchoice) => {
    const compchoice = getcompchoice();

    if (compchoice === userchoice) {
        Draw();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compchoice === "scissors" ? false : true;
        } else {
            userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compchoice); 
    }
};

const showWinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userscorevalue++;
        userscore.innerText = userscorevalue;
        msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscorevalue++;
        compscore.innerText = compscorevalue;
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const getcompchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomnum = Math.floor(Math.random() * 3);
    return options[randomnum];
    
};

const Draw = () => {
    msg.innerHTML = "It's a Draw, play again";
    msg.style.backgroundColor = "#f1f1f1";
};
