const submit = document.querySelector('button');

function rollDice(dice) {
  const diceRoll = Math.floor(Math.random() * dice + 1);
  return diceRoll;
}

function displayRoll() {
  const result = document.querySelector('.result');
  const userInput = document.querySelector('input');
  result.textContent = rollDice(userInput.value);
}

submit.addEventListener('click', displayRoll);
