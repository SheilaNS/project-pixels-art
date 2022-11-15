const paintPixel = ({ target }) => {
  const pixels = document.querySelectorAll('.pixel');
  const event = target;
  const selectedColor = document.querySelector('.selected');
  event.style.backgroundColor = window.getComputedStyle(selectedColor).backgroundColor;
  const paintedBoard = [];
  pixels.forEach((elem) => paintedBoard.push(elem.style.backgroundColor));
  localStorage.setItem('pixelBoard', JSON.stringify(paintedBoard));
};

const createBoard = (newSize) => {
  const boardSize = !newSize || newSize === '' ? 5 : newSize;
  const board = document.querySelector('#pixel-board');
  board.innerHTML = '';
  for (let i = 0; i < boardSize; i += 1) {
    const divLine = document.createElement('div');
    for (let l = 0; l < boardSize; l += 1) {
      const divPixel = document.createElement('div');
      divPixel.className = 'pixel';
      divPixel.style.backgroundColor = 'white';
      divPixel.addEventListener('click', paintPixel);
      divLine.appendChild(divPixel);
    }
    board.appendChild(divLine);
  }
};

createBoard();

// cria o código rgb aleatório
const randomRGB = () => {
  const num1 = Math.floor(Math.random() * 256);
  const num2 = Math.floor(Math.random() * 256);
  const num3 = Math.floor(Math.random() * 256);
  return `rgb(${num1}, ${num2}, ${num3})`;
};

// função de gerar cores aleatórias do palette de cores
const randomColorsBtn = document.querySelector('#button-random-color');
randomColorsBtn.addEventListener('click', () => {
  const colorPalette = document.querySelectorAll('.color');
  const newColors = [];
  for (let i = 1; i < colorPalette.length; i += 1) {
    colorPalette[i].style.backgroundColor = randomRGB();
    newColors.push(colorPalette[i].style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(newColors));
});

// recupera o board pintado do localStorage
const getPaintedBoard = () => {
  const localBoard = localStorage.getItem('pixelBoard');
  if (!localBoard) return localStorage.setItem('pixelBoard', JSON.stringify([]));
  const parcedBoard = JSON.parse(localBoard);
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 1; i < parcedBoard.length; i += 1) {
    pixels[i].style.backgroundColor = parcedBoard[i];
  }
};

const getBoardSize = () => {
  const localSize = localStorage.getItem('boardSize');
  if (!localSize) return localStorage.setItem('boardSize', JSON.stringify(''));
  const parsedSize = JSON.parse(localSize);
  createBoard(parsedSize);
  getPaintedBoard();
};

// recupera as cores aleatórias criadas do localStorage
const getSavedPalette = () => {
  const localColors = localStorage.getItem('colorPalette');
  if (!localColors) return localStorage.setItem('colorPalette', JSON.stringify([]));
  getBoardSize();
  const parsedColors = JSON.parse(localColors);
  const colorPalette = document.querySelectorAll('.color');
  for (let i = 1; i < colorPalette.length; i += 1) {
    colorPalette[i].style.backgroundColor = parsedColors[i - 1];
  }
};

// muda a classe selected do palette de cores
const colorPalette = document.querySelectorAll('.color');
colorPalette.forEach((color) => {
  color.addEventListener('click', ({ target }) => {
    colorPalette.forEach((elem) => elem.classList.remove('selected'));
    target.classList.add('selected');
  });
});

// limpa o board
const clearBtn = document.querySelector('#clear-board');
clearBtn.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((elem) => {
    const pixel = elem;
    pixel.style.backgroundColor = 'white';
  });
});

// função de criar um novo board
const generateBoardBtn = document.querySelector('#generate-board');
generateBoardBtn.addEventListener('click', () => {
  const boardSize = document.querySelector('#board-size');
  if (Number(boardSize.value) <= 0) return alert('Board inválido!');
  if (Number(boardSize.value) > 50) boardSize.value = 50;
  if (Number(boardSize.value) <= 5) boardSize.value = 5;
  createBoard(Number(boardSize.value));
  localStorage.setItem('pixelBoard', JSON.stringify([]));
  localStorage.setItem('boardSize', JSON.stringify(boardSize.value));
});

window.onload = () => {
  getSavedPalette();
  getPaintedBoard();
  getBoardSize();
};
