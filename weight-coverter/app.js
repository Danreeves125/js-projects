const formula = new Formula();

const form = document.querySelector('#form'),
      inputValue = document.querySelector('#weight');

form.addEventListener('submit', (e) => {

    if(isFinite(inputValue.value)) {
        formula.convert(inputValue.value);
    } else {
        
    }
    e.preventDefault();
});
