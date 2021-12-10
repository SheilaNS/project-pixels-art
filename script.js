const black = document.getElementById('black');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');
const button = document.getElementById('clear-board');

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
  const color = document.querySelector('.selected').id;
  event.target.style.backgroundColor = color;
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
