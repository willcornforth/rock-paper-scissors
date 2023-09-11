console.log("[+] Starting rock paper scissors...");

// Generates random choice from pseudo-random number.
function getRandomChoice()
{
    let random = Math.round( Math.random() * 2 ); // Returns random number between 1 and 3 and round result.
    console.log("[+] Random number: " + random);

    // Get return string for randomly generated number.
    switch( random )
    {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            console.log("[-] getRandomChoice() failed with random: " + random);
            return "ERROR";
    }
}

// Poll console for user's choice.
function getUserChoice()
{
    let input = prompt("Enter either 'Rock', 'Paper' or 'Scissors'");
    switch( input )
    {
        case "Rock":
            return input;
        case "Paper":
            return input;
        case "Scissors":
            return input;
        default:
            console.log("[-] getUserChoice() failed with bad input: " + input);
            return "ERROR";
    }
}

//Plays a game of rock paper scissors.
function playRound(userChoice, opponentChoice)
{
    // Generate key value pairs of choices.
    let choiceKeyValue = {
        "Rock": 0,
        "Paper": 1,
        "Scissors": 2,
    }

    // Convert string choice to integer.
    let userNum = choiceKeyValue[userChoice];
    let opponentNum = choiceKeyValue[opponentChoice];

    // Check if our user has won the round, if not return false;
    if(userNum == 1 && opponentNum == 0)
        return true;
    else if(userNum == 2 && opponentNum == 1)
        return true;
    else if(userNum == 0 && opponentNum == 2)
        return true;

    return false;
}

function mainGame()
{
    let roundsWon = 0; let totalRounds = 5;
    for(let i = 0; i < totalRounds; i++)
    {
        // Poll user's choice.
        let userChoice = getUserChoice();

        // Handle bad input.
        if(userChoice == "ERROR")
            return;

        console.log("[+] User inputted choice: " + userChoice);

        // Generate random opponent choice.
        let opponentChoice = getRandomChoice();
        console.log("[+] Computer generated choice: " + opponentChoice);

        // Play one round with new inputs.
        let roundResult = playRound(userChoice, opponentChoice);
        console.log("[#] Round " + i + " Result: " + roundResult);

        // Round won, increment score
        if(roundResult)
            roundsWon++;
    }

    // Print game results.
    console.log("[+] You won " + roundsWon + " out of " + totalRounds + " rounds.");
}

// Run game.
mainGame();