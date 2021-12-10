const black = document.getElementById('black');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
const button = document.getElementById('clear-board');
const board = document.querySelector('#pixel-board');

dinamicBoard(5);

function addClass(event) {
  const withClass = document.querySelector('.selected');
  withClass.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', addClass);
red.addEventListener('click', addClass);
yellow.addEventListener('click', addClass);
blue.addEventListener('click', addClass);

function changeColor(event) {
  const color = document.querySelector('.selected');
  const evento = event.target;
  evento.style.backgroundColor = window.getComputedStyle(color).backgroundColor;
}

for (let i = 0; i < 25; i += 1) {
  const pixel = document.getElementsByClassName('pixel');
  pixel[i].addEventListener('click', changeColor);
}

function cleanBoard() {
  for (let i = 0; i < 25; i += 1) {
    const clear = document.querySelectorAll('.pixel');
    clear[i].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', cleanBoard);

function dinamicBoard(size) {
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
