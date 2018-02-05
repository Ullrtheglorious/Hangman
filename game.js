// Create an array of words
var words = [
    "beserk",
    "sword",
    "sheild",
    "raid",
    "longboat",
    "ragnarok",
    "thor",
    "runes",
    "fenrir",
    "odin",
    "valkyrie",
    ];

// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];

// Set up the answer array
var answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

var remainingLetters = word.length;
// Limit guesses to 19 which is approximately 3/4 of the alphabet
var guesses = 19;













 // The game loop
while (remainingLetters > 0 && guesses > 0) {
// Show the player their progress
document.getElementById("answer").innerHTML = "lkhglksjdg!"

            // Get a guess from the player
            var guess = document.write("Guess a letter, or click Cancel to stop playing.");
            if (guess === null) {
                // Exit the game loop
                break;
            } else if (guess.length !== 1) {
                doument.write("Please enter a single letter.");
            } else {
                guesses--;
                guess = guess.toLowerCase();
                // Update the game state with the guess
                for (var j = 0; j < word.length; j++) {
                    if (word[j] === guess && answerArray[j] === "_") {
                        answerArray[j] = guess;
                        remainingLetters--;
                    }
                }
            }
            // The end of the game loop
        }

        // Show the answer and congratulate the player
        document.write(answerArray.join(" "));

        if (guesses > 0) {
            document.write("Good job! The answer was " + word);
        } else {
            document.write("Too bad! The answer was " + word);
        }
