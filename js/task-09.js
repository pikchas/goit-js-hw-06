
const refs = {
  body: document.body,
  colorName: document.querySelector('.color'),
  buttonChange: document.querySelector('.change-color'),
}

refs.buttonChange.addEventListener('click', changeColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const color = getRandomHexColor();
  refs.colorName.textContent = color;
  document.body.style.backgroundColor = color;
      
};