const calcButtons = document.querySelectorAll('.calc-button');
const clearButton = document.querySelector('#clear');
const formulaScreen = document.querySelector('.formula-screen');
const display = document.querySelector('#display');
const equalButton = document.querySelector('#equal');
let solution = '';
let currentValue = '';
let previousInput = '';
let equation = '';
let last;

clearButton.addEventListener('click', reset);

function reset() {
  equation = '';
  formulaScreen.textContent = equation;
  display.textContent = '';
}

function handleClick(e) {
  equation += e.target.textContent;
  previousInput = e.target.textContent;
  console.log({ previousInput });
  formulaScreen.textContent = equation;
  display.textContent = e.target.textContent;
}

calcButtons.forEach((button) => {
  button.addEventListener('click', handleClick);
});

function solve(problem) {
  solution = eval(equation);
  formulaScreen.textContent = solution;
  display.textContent = solution;
  equation = solution
  return eval(problem);
}

equalButton.addEventListener('click', () => solve(equation));
