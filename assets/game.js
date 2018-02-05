(function () {
    "use strict";
    var availableLetters, words, progress, guessInput, guess, lettersGuessed, lettersMatched, output, letters, lives, currentWord, numLettersMatched, messages;

    function reset() {
    //start reset options
        availableLetters = "abcdefghijklmnopqrstuvwxyz" ;
        lives = 10;
        words = [
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
        messages = {
            win: 'Skol! You Win!',
            lose: 'You have died',
            guessed: 'Already guessed',
            validLetter: 'We do not know this letter'
        };    
    }
        //End of the reset option

        lettersGuessed = lettersMatched = "";
        numLettersMatched = 0;

        //chose a word
        currentWord = words[Math.floor(Math.random() *words.length)];

        //output the blanks, and create vars for later access
        output = document.getElementById("output");
        guessInput = document.getElementById("letter");
        progress = document.getElementById("progress");

        progress.innerHTML = 'You have ' + lives + ' lives remaining';
        output.innerHTML = '';

        document.getElementById('letter').value = '';

        //set up display of blank letters
        letters = document.getElementById('letters');
        letters.innerHTML = '<li class= "current-word">Current Word:</li>';

        var letter, i;
        for (i=0; i= i<currentWord.length; i++) {
            letter = '<li class= "letter letter' + currentWord.charAt(i).toUpperCase() + '">' + currentWord.charAt(i).toUpperCase() + '</li>';
            letters.insertAdjacentHTML('beforeend' , letter);
        }
    }

    //function for the win/lose messages
    (function gameOver(win) {
        if (win) {
            output.innerHTML = messages.win;
            output.classList.add('win');
        } else {
            output.innerHTML = messages.lose;
            output.classList.add('error');
        }


    // start game
    window.onload = reset();

    // main guess function when user presses a key
    document.getElementById('hangman').onkeyup = function (e) {
        if (e.preventDefault) e.preventDefault();
        output.innerHTML = '';
        output.classList.remove('error', 'warning');
        guess = guessInput.value;

    if (guess) {
        if (availableLetters.indexOf(guess) > -1) {
        if ((lettersMatched && lettersMatched.indexOf(guess) > -1) || (lettersGuessed && lettersGuessed.indexOf(guess) > -1)) {
        output.innerHTML = '"' + guess.toUpperCase() + '"' + messages.guessed;
        output.classList.add("warning");
    }
    // does guess exist in current word? if so, add to letters already matched, if final letter added, game over with win message 
        else if (currentWord.indexOf(guess) > -1) {
        var lettersToShow;
        lettersToShow = document.querySelectorAll(".letter" + guess.toUpperCase());

                        for (var i = 0; i < lettersToShow.length; i++) {
                            lettersToShow[i].classList.add("correct");
                        }

                        // check to see if letter appears multiple times 
                        for (var j = 0; j < currentWord.length; j++) {
                            if (currentWord.charAt(j) === guess) {
                                numLettersMatched += 1;
                            }
                        }

                        lettersMatched += guess;
                        if (numLettersMatched === currentWord.length) {
                            gameOver(true);
                        }
                    }
                    // guess doesn't exist in current word and hasn't been guessed before, add to lettersGuessed, reduce lives & update user 
                    else {
                        lettersGuessed += guess;
                        lives--;
                        man.innerHTML = 'You have ' + lives + ' lives remaining';
                        if (lives === 0) gameOver();
                    }
                }
                // not a valid letter, error 
                else {
                    output.classList.add('error');
                    output.innerHTML = messages.validLetter;
                }
            }
            // no letter entered, error 
            else {
                output.classList.add('error');
                output.innerHTML = messages.validLetter;
            }
            return false;
        };
    }());

















