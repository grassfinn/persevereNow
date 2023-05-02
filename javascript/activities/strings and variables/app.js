const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});

let score = 0;

function handleClick(e) {
  const scoreElement = document.querySelector('.score');
  const nameElement = document.querySelector('.full-name');
  console.log(scoreElement);
  // !assign the fullName variable to your name
  const fullName = ' ';

  // ! change the increase variable value to any  positive number
  const increaseScore = 5;

  // ! change the decrease variable value to any  negative number
  const decreaseScore = -5;

  // Do not change code under here
  if (e.target.className === 'set-name') {
    nameElement.textContent = fullName;
    return fullName;
  } else if (e.target.className === 'increase') {
    score = score + increaseScore;
    console.log(score);
    scoreElement.textContent = score;
    return score;
  }
  score += decreaseScore;
  scoreElement.textContent = score;
  return score;
}
