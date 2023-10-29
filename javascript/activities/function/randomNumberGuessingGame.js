




































let attempts = 0;
const randomNumber = Math.floor(Math.random() * 10) + 1;

function hint() {
  let userInput = prompt('Pick a number');
  if (!userInput) {
    return;
  }
  if (attempts === 10) {
    alert('You Lose!');
    return;
  }

  if (userInput == randomNumber) {
    alert('You Win!');
    alert(`It took you ${attempts} attempts`);

    return;
  }
  if (userInput < randomNumber) {
    alert('Higher');
    attempts++;
  }
  if (userInput > randomNumber) {
    alert('Lower');
    attempts++;
  }
  hint();
}
hint();
