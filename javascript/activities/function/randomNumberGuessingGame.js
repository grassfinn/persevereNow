let attempts = 0;
const randomNumber = Math.floor(Math.random() * 10) + 1;
const guessBtn = document.getElementById('guessBtn');

function hint() {
  // Elements
  const titleElement = document.getElementById('title');
  const randomNumberElement = document.getElementById('randomNumber');
  const attemptsElement = document.getElementById('attempts');
  const previousGuessElement = document.getElementById('previous');
  const hintElement = document.getElementById('hint');
  let userInput = document.getElementById('userInput');
  if (userInput.value === "") {
    previousGuessElement.textContent = 'Please Enter a Number';
    return
  }
  attempts++;

  if (attempts === 10) {
    hintElement.textContent = 'You Lose!';
    attempts = 0;
    return;
  }

  if (userInput.value === randomNumber) {
    randomNumberElement.textContent = randomNumber;
    titleElement.textContent = `It took you ${attempts} attempts`;
    hintElement.textContent = 'You Win!';
    return;
  }
  if (userInput.value < randomNumber) {
    attemptsElement.textContent = attempts;
    previousGuessElement.textContent = userInput.value;
    hintElement.textContent = 'Higher';
    userInput.value = '';
    userInput.focus;
  }
  if (userInput.value > randomNumber) {
    attemptsElement.textContent = attempts;
    previousGuessElement.textContent = userInput.value;
    hintElement.textContent = 'Lower';
    userInput.value = '';
    userInput.focus;
  }
}

function handleSubmit(e) {
  if (e.key === 'Enter') {
    hint();
  }
}

userInput.addEventListener('keypress', handleSubmit);
guessBtn.addEventListener('click', hint);
// hint()
// window.onload = hint //we want our html to load first before we run script
