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
    console.log("[+] User inputted: " + input);
}

// Generate random opponent choice.
let opponentChoice = getRandomChoice();
console.log("[+] Computer generated choice: " + opponentChoice);

// Poll user's choice.
let userChoice = getUserChoice();
console.log("[+] User inputted choice: " + userChoice);