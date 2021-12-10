const black = document.getElementById('black');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');

function addClass(event) {
  const withClass = document.querySelector('.selected');
  withClass.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', addClass);
red.addEventListener('click', addClass);
yellow.addEventListener('click', addClass);
blue.addEventListener('click', addClass);
