const refs = {
    inputEL: document.querySelector('#name-input'),
    outputEl: document.querySelector('#name-output'),
}

const setValue = (event) => {
    if (event.target.value.trim() === '') {
        refs.outputEl.textContent = 'Anonymous';
        return;
    }
    refs.outputEl.textContent = event.target.value;
}

refs.inputEL.addEventListener('input', setValue);

