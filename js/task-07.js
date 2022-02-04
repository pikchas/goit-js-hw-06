const inputControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputControl.addEventListener('input', handleInputRange);

text.style.fontSize = inputControl.value + 'px';

// function handleInputRange (event) {
// //   text.style.fontSize = event.currentTarget.value + 'px';  
// };
// console.log(text);