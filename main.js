let userScore =0;
let compScore =0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard = document.querySelector(".score");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoices () {
    const choises = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choises[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, compChoice){
    const userChoise_hover = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(compChoice)}. My congratulations!`
    setTimeout(() => userChoise_hover.classList.add('green-glow'),300);
    setTimeout(() => userChoise_hover.classList.remove('green-glow'),1000);
    setTimeout(() => document.getElementById(compChoice).classList.add('red-glow'),300);
    setTimeout(() => document.getElementById(compChoice).classList.remove('red-glow'),1000);
}

function lost(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(userChoice)} loses ${convertToWord(compChoice)}. Try next time!`
    setTimeout(() => document.getElementById(userChoice).classList.add('red-glow'),300);
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'),1000);
    setTimeout(() => document.getElementById(compChoice).classList.add('green-glow'),300);
    setTimeout(() => document.getElementById(compChoice).classList.remove('green-glow'),1000);
    
}

function draw(userChoice, compChoice){
    result_div.innerHTML = `${convertToWord(userChoice)} same ${convertToWord(compChoice)}. It's a draw!`
    setTimeout(() => document.getElementById(compChoice).classList.add('yellow-glow'),300);
    setTimeout(() => document.getElementById(compChoice).classList.remove('yellow-glow'),1000);
}

function game(userChoice) {
    const compChoice = getCompChoices();
    switch (userChoice + compChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, compChoice)
        break;
        case "rp":
        case "ps":
        case "sr":
            lost(userChoice, compChoice)
        break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice)
        break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
}

main ();

