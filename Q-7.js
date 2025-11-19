let secret = Math.floor(Math.random() * 50) + 1;
let userGuess = 23;

if (userGuess === secret) {
    console.log("Correct guess!");
} else {
    if (userGuess >= secret - 3 && userGuess <= secret + 3) {
        console.log("Very close!");
    } else {
        if (userGuess > secret) {
            console.log("Too high");
        } else {
            console.log("Too low");
        }
    }
}

console.log("Secret Number:", secret);
console.log("Your Guess:", userGuess);