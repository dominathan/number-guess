var tries = 0;
var low = 1;
var high = 1000000;
var guess = 0
var lower = low;
var upper = high;
var beginBtn = document.getElementById('begin');
var lowerBtn = document.getElementById('lower');
var higherBtn = document.getElementById('higher');

function computerGuess() {
  guess = Math.floor((lower + upper) / 2);
  tries = tries + 1;
  return guess;
}

function guessLower() {
  upper = guess - 1
  computerGuess();
  var guessSpan = document.getElementById('guess');
  guessSpan.innerText = guess;
}

function guessHigher() {
  lower = guess + 1
  computerGuess();
  var guessSpan = document.getElementById('guess');
  guessSpan.innerText = guess;
}

function beginGame() {
  var gameBlock = document.getElementById('game');
  var introBlock = document.getElementById('intro');
  var guessSpan = document.getElementById('guess');
  gameBlock.style.display = "block";
  introBlock.style.display = "none";
  computerGuess();
  guessSpan.innerText = guess;
}

beginBtn.addEventListener('click',beginGame);
lowerBtn.addEventListener('click',guessLower);
higherBtn.addEventListener('click',guessHigher);
