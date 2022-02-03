const inputControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputControl.addEventListener('input', handleInputRange);

function handleInputRange (event) {
    text.style.fontSize = event.currentTarget.value + 'px';
};
console.log(text);

