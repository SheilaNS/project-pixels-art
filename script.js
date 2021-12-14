const clearButton = document.getElementById('clear-board');
const board = document.querySelector('#pixel-board');
const colorBoard = document.querySelectorAll('.color');
const boardInput = document.getElementById('board-size');
const sizeButton = document.getElementById('generate-board');
let boardSize = 5;

// Requisito 04
function dinamicBoard(size) {
  board.innerHTML = '';
  for (let l = 0; l < size; l += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    for (let c = 0; c < size; c += 1) {
      const colun = document.createElement('div');
      colun.className = 'pixel';
      line.appendChild(colun);
    }
    board.appendChild(line);
  }
}

dinamicBoard(boardSize);

// Requisito 07
function addClass(event) {
  for (let i = 0; i < colorBoard.length; i += 1) {
    colorBoard[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

for (let i = 0; i < colorBoard.length; i += 1) {
  colorBoard[i].addEventListener('click', addClass);
}

// Requisito 08
function changeColor(event) {
  const color = document.querySelector('.selected');
  const evento = event.target;
  evento.style.backgroundColor = window.getComputedStyle(color).backgroundColor;
}

for (let i = 0; i < (boardSize * boardSize); i += 1) {
  const pixel = document.getElementsByClassName('pixel');
  pixel[i].addEventListener('click', changeColor);
}

// Requisito 09
function clearBoard() {
  for (let i = 0; i < (boardSize * boardSize); i += 1) {
    const clear = document.querySelectorAll('.pixel');
    clear[i].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clearBoard);

// Requisito 10
function checkNumber() {
  boardSize = boardInput.value;
  if (boardSize === '' || boardSize <= 0) {
    alert('Board inválido!');
  }
  dinamicBoard(boardSize);
  for (let i = 0; i < (boardSize * boardSize); i += 1) {
    const newBoard = document.querySelectorAll('.pixel');
    newBoard[i].addEventListener('click', changeColor);
  }
}

sizeButton.addEventListener('click', checkNumber);
