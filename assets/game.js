
      var game = {
        words: ["beserk",
          "sword",
          "sheild",
          "raid",
          "longboat",
          "ragnarok",
          "thor",
          "runes",
          "fenrir",
          "odin",
          "valhalla",
          "valkyrie",
          "yggdrasil"
        ],
        guessed: [],
        left: 12,
        wins: [],
        losses: [],
        
        start: function() {
          this.complete = false;
          this.word = this.words[Math.floor(Math.random() * this.words.length)];
          this.correct = document.getElementById('right');
          this.incorrect = document.getElementById('wrong');
          this.remaining = document.getElementById('remain');
          this.correct.innerHTML = '_'.repeat(this.word.length);
          this.won = document.getElementById('wins');
          this.loss = document.getElementById('losses');
          this.guessed = [];
          document.getElementById('winner').innerHTML = "";
          document.getElementById('loser').innerHTML = "";
          document.getElementById('wrong').innerHTML = [];
          document.getElementById('remain').innerHTML = 12;
        },
//guessing a letter
        guess: function(letter) {
          if (this.left > 0 && this.complete != true) {
            if (this.word.indexOf(letter) >-1 || this.guessed.indexOf(letter) > -1) {
              this.right(letter);
            } else {
              this.wrong(letter);
            }
          }
        },
//if the guess is correct
        right: function(letter) {
          for(var i = 0; i < this.word.length; i++) {
            if (this.word[i] == letter) {
              var word = this.correct.innerHTML.split('');
              word[i] = letter;
              this.correct.innerHTML = word.join('');
            }
          }
//if your guess removes the last _ (win condition)
          if (this.correct.innerHTML.indexOf('_') < 0) {
            this.wins++;
            this.won.innerHTML = this.wins;
            document.getElementById('winner').innerHTML = "Skol! You win!";
            this.complete = true;
            this.left = 12;
          }
        },
//if your guess is wrong
        wrong: function(letter) {
          this.guessed.push(letter);
          this.incorrect.innerHTML += ' ' + letter;
          this.left--;
          this.remaining.innerHTML = this.left;
//if your wrong guess uses last life "left" (lose condition)
          if (this.left < 1) {
            this.losses++;
            this.loss.innerHTML = this.losses;
            this.left = 12;
            document.getElementById('loser').innerHTML = "You Died";
            this.complete = true;
            
          }
        }
      };
      game.start();
      document.onkeyup = function(event) {
        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        game.guess(letter);
      };

    