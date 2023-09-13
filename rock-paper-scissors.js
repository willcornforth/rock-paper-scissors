console.log("[+] Starting rock paper scissors...");

const Choices = 
{
    Rock: 0,
    Paper: 1,
    Scissors: 2
}
let userScore = 0;

// Generates random choice from pseudo-random number.
function getRandomChoice()
{
    let random = Math.floor( Math.random() * 3 ); // Returns random number between 0 and 2 and round result.
    console.log("[+] Random number: " + random);

    return random;
}

//Plays a game of rock paper scissors.
function playRound(userNum, opponentNum)
{
    let result = 0;

    // Check to see if we have drawn.
    if(userNum == opponentNum)
        result = -1;

    if(result != -1)
    {
        result = (userNum == Choices.Paper && opponentNum == Choices.Rock) 
        || (userNum == Choices.Scissors && opponentNum == Choices.Paper) 
        || (userNum == Choices.Rock && opponentNum == Choices.Scissors);
    }

    postRound(userNum, opponentNum, result);

    return result;
}

document.querySelector('#btn-rock').onclick = () => {
    playRound(Choices.Rock, getRandomChoice());
};

document.querySelector('#btn-paper').onclick = () => {
    playRound(Choices.Paper, getRandomChoice());
};

document.querySelector('#btn-scissors').onclick = () => {
    playRound(Choices.Scissors, getRandomChoice());
};

function postRound(userChoice, oppChoice, result)
{
    const choicePairs = 
    {
        0: "Rock",
        1: "Paper",
        2: "Scissors"
    }

    const divResults = document.querySelector('#div-results');
    if(result != -1)
    {
        // Increment score unless score is already zero.
        result ? userScore++ : userScore < 1 ? 0 : userScore--;

        divResults.textContent = "User chose: " + choicePairs[userChoice] 
            + " Opponent chose: " + choicePairs[oppChoice];
    }
    else {
        divResults.textContent = "Draw!";
    }

    const divScore = document.querySelector('#div-score');
    divScore.textContent = "Score: " + userScore;
}
