const startButton = document.querySelector('.start-game');
const resetButton = document.querySelector('.reset-game');
const playerOneButton = document.querySelector('.player-1');
const playerOneName = playerOneButton.value;
const playerTwoButton = document.querySelector('.player-2');
const playerTwoName = playerTwoButton.value;
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.style.display = 'none';
  Game.start();
  console.log('START!');
});

resetButton.addEventListener('click', () => {
  Game.reset();
  //   console.log('RESET!');
});

/* 
    Winning spots
    
*/

const createPlayer = (name, mark) => {
  return { name, mark };
};

const GameBoard = (() => {
  const gameContainer = document.querySelector('.game-container');
  const gameBoard = ['', '', '', '', '', '', '', '', ''];
  const render = () => {
    let boardHtml = '';
    gameBoard.forEach((space, index) => {
      boardHtml += `<div class='square' id='${index}'>${space}</div>`;
    });
    gameContainer.innerHTML = boardHtml;
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) =>
      square.addEventListener('click', Game.handleClick)
    );
    console.log('rendered');
  };
  const update = (index, value) => {
    gameBoard[index] = value;
    console.log({ index, value });
    render();
  };

  const getGameBoard = () => gameBoard;

  return { render, update, getGameBoard };
})();

const Game = (() => {
  let players = [];
  let currentPlayerIndex;
  let gameOver;
  const start = () => {
    players = [
      createPlayer(playerOneName, 'X'),
      createPlayer(playerTwoName, 'O'),
    ];
    currentPlayerIndex = 0;
    gameOver = false;
    GameBoard.render();
  };
  const reset = () => {
    for (let i = 0; i < 9; i++) {
      GameBoard.update(i, '');
    }
    GameBoard.render();
  };
  const handleClick = (e) => {
    let index = parseInt(e.target.id);
    GameBoard.update(index, players[currentPlayerIndex].mark);

    if (
      checkForWin(GameBoard.getGameBoard(), players[currentPlayerIndex].mark)
    ) {
      gameOver = true;
      alert(`${players[currentPlayerIndex].name} Won!`);
      return;
    }
    currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;

    if (GameBoard.getGameBoard()[index] !== '') {
      return;
    }
  };

  return { start, reset, handleClick };
})();

function checkForWin(board) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
}
