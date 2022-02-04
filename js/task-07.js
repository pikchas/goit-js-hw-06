const inputControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputControl.addEventListener('input', () => {
    text.style.fontSize = inputControl.value + 'px';
});

// text.style.fontSize = inputControl.value + 'px';

// function handleInputRange (event) {
// //   text.style.fontSize = event.currentTarget.value + 'px';  
// };
// console.log(text);