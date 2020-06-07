// Init classes
const formula = new Formula();
const ui = new UI();

const form = document.querySelector('#form'),
      inputValue = document.querySelector('#weight');

// Add event listener to from
form.addEventListener('submit', (e) => {

    if(inputValue.value == '') {
        ui.showAlert('Please enter a input value', 'alert alert-warning');
    } else {
        if(isFinite(inputValue.value)) {
        
            formula.convert(inputValue.value);
        } else {
            ui.showAlert('Please enter a valid number', 'alert alert-danger');
        }
    }

    e.preventDefault();
});
