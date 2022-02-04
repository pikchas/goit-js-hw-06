const buttonMinus = document.querySelector('button[data-action = "decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector('#value');
let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    counter.textContent = counterValue;
};

buttonMinus.addEventListener('click', decrement);
buttonPlus.addEventListener('click', increment);



