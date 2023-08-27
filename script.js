// PROJECT 1 // ROCK PAPER SCISSORS GAME VERSION 1.0

//start music
function myStartMusic() {
    let startMusic = document.getElementById('start-music');
    startMusic.play();
}
myStartMusic();

window.location.reload = function () {
    myStartMusic();
};

//start the game/button/intro screen
const playButton = document.querySelector('.intro button');
const introScreen = document.querySelector('.intro');
playButton.addEventListener('click', function () {
    introScreen.style.display = 'none';
});

//set initial score
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

//reset scores
function resetScores() {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
    document.getElementById('draw-score').innerText = drawScore;
}

// game sounds
//<---- The Coding Train ---->
let badSound = new Audio((src = 'sounds/bad.mp3'));
let clickSound = new Audio((src = 'sounds/click.mp3'));
let drawSound = new Audio((src = 'sounds/draw.mp3'));
let goodSound = new Audio((src = 'sounds/good.mp3'));
let loserSound = new Audio((src = 'sounds/loser.mp3'));
let startSound = new Audio((src = 'sounds/start.mp3'));
let tieSound = new Audio((src = 'sounds/tie.mp3'));
let winSound = new Audio((src = 'sounds/win.mp3'));

//screen transitions
//<---- w3schools ---->
const winButton = document.querySelector('.win button');
const winScreen = document.querySelector('.win');
winButton.addEventListener('click', function () {
    winScreen.style.display = 'none';
    resetScores();
    resetHands();
    resetMessage();
});

const loseButton = document.querySelector('.lose button');
const loseScreen = document.querySelector('.lose');
loseButton.addEventListener('click', function () {
    loseScreen.style.display = 'none';
    resetScores();
    resetHands();
    resetMessage();
});
const drawButton = document.querySelector('.draw button');
const drawScreen = document.querySelector('.draw');
drawButton.addEventListener('click', function () {
    drawScreen.style.display = 'none';
    resetScores();
    resetHands();
    resetMessage();
});

//player and computer objects/hands
const playerHand = document.querySelector('#player-hand');
const computerHand = document.querySelector('#computer-hand');

//reset hands
function resetHands() {
    playerHand.src = './img/rock_left.png';
    computerHand.src = './img/rock.png';
}

//reset announcement
function resetMessage() {
    document.getElementById('announcement').innerText = 'READY TO PLAY?';
}

//player chooses from three options/buttons
//add event listeners
//<---- MDN syntax ---->
const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', handleClick);

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', handleClick);

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', handleClick);

//tell the computer when to respond
//slowdown response
//add animation
//<---- w3schools ---->
let playerChoice;
function handleClick(event) {
    playerHand.src = './img/rock_left.png';
    computerHand.src = './img/rock.png';
    playerChoice = event.target.innerText;
    playerHand.classList.add('shake');
    computerHand.classList.add('shake');
    setTimeout(function () {
        playerHand.classList.remove('shake');
        computerHand.classList.remove('shake');
        computerPlay();
    }, 1500);
}

//create an array with the three elements to chose from
//generate a random simulated computer response
//store computers choice
//<---- geeksforgeeks syntax ---->
choices = ['Rock', 'Paper', 'Scissors'];

let computerChoice;
function computerPlay() {
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    calculateResults();
}

//we compare the choices
//determine outcome
//update screen message
//<---- w3schools syntax ---->
//<---- MDN syntax ---->
function calculateResults() {
    if (playerChoice === 'Rock' && computerChoice === 'Paper') {
        document.getElementById('announcement').innerText = 'YOU LOSE';
        computerScore += 1;
        badSound.play();
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
        document.getElementById('announcement').innerText = 'YOU WIN!!!';
        playerScore += 1;
        goodSound.play();
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
        document.getElementById('announcement').innerText = 'YOU WIN!!!';
        playerScore += 1;
        goodSound.play();
    } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
        document.getElementById('announcement').innerText = 'YOU LOSE';
        computerScore += 1;
        badSound.play();
    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
        document.getElementById('announcement').innerText = 'YOU LOSE';
        computerScore += 1;
        badSound.play();
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
        document.getElementById('announcement').innerText = 'YOU WIN!!!';
        playerScore += 1;
        goodSound.play();
    } else if (playerChoice === 'Rock' && computerChoice === 'Rock') {
        document.getElementById('announcement').innerText = "IT'S A DRAW";
        drawScore += 1;
        drawSound.play();
    } else if (playerChoice === 'Paper' && computerChoice === 'Paper') {
        document.getElementById('announcement').innerText = "IT'S A DRAW";
        drawScore += 1;
        drawSound.play();
    } else if (playerChoice === 'Scissors' && computerChoice === 'Scissors') {
        document.getElementById('announcement').innerText = "IT'S A DRAW";
        drawScore += 1;
        drawSound.play();
    }

    //image representation for player and computer choices
    replacePlayerImage();
    replaceComputerImage();
    document.getElementById('draw-score').innerText = drawScore;
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
    displayResults();
}

//stop score
//declare results
//<---- teamtreehouse ---->
function displayResults() {
    if (playerScore === 3) {
        winScreen.style.display = 'flex';
        goodSound.pause();
        winSound.play();
    } else if (computerScore === 3) {
        loseScreen.style.display = 'flex';
        badSound.pause();
        loserSound.play();
    } else if (drawScore === 3) {
        drawScreen.style.display = 'flex';
        drawSound.pause();
        tieSound.play();
    }
}

// clear score
//change images per turn
//<---- MDN ---->
function replacePlayerImage() {
    if (playerChoice === 'Rock') {
        playerHand.src = './img/rock_left.png';
    } else if (playerChoice === 'Paper') {
        playerHand.src = './img/paper_left.png';
    } else if (playerChoice === 'Scissors') {
        playerHand.src = './img/scissors_left.png';
    }
}

function replaceComputerImage() {
    if (computerChoice === 'Rock') {
        computerHand.src = './img/rock.png';
    } else if (computerChoice === 'Paper') {
        computerHand.src = './img/paper.png';
    } else if (computerChoice === 'Scissors') {
        computerHand.src = './img/scissors.png';
    }
}