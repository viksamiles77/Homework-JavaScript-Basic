const wordDisplay = document.querySelector('.word-display');
const hangmanImage = document.querySelector('.hangman-box img');
const guessesText = document.querySelector('.guesses-text');
const keyboardDiv = document.querySelector('.keyboard');
const playAgainBtn = document.querySelector('#play-again');
const hintBtn = document.querySelector('#hint');

let currentWord, correctLetters = [], wrongGuessCount;
const maxGuess = 6;


const getHint = function () {
    document.querySelector('.hint-text b').innerText = hint;
}

const resetGame = function () {
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuess}`;
    keyboardDiv.querySelectorAll('button').forEach(btn => btn.disabled = false);
    wordDisplay.innerHTML = currentWord.split('').map(() => `<li class="letter"></li>`).join('');
}

const getRandomWord = function () {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    console.log(word);
    document.querySelector('.hint-text b').innerText = hint;
    // getHint();
    resetGame();
}

const initGame = function (button, clickedLetter) {
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach(function (letter, index) {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll('li')[index].innerText = letter;
                wordDisplay.querySelectorAll('li')[index].classList.add('guessed');
            }
        })
    } else {
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
    }

    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuess}`;

    if (wrongGuessCount === maxGuess) return alert('You lost!');
    if (correctLetters.length === currentWord.length) return alert('You won!');

}

for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button)
    button.addEventListener('click', e => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgainBtn.addEventListener('click', getRandomWord);
hintBtn.addEventListener('click', getHint)