const mainBlock = document.querySelector('.main-block');
const replacementBlock = document.querySelector('.replacement-block');

window.addEventListener('resize', function () {
  if (window.innerWidth < 1000) {
    mainBlock.style.display = 'none';
    replacementBlock.style.display = 'block';
  } else {
    mainBlock.style.display = 'block';
    replacementBlock.style.display = 'none';
  }
});

