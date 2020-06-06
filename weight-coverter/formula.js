class Formula {
    constructor() {
        document.addEventListener('change', (e) => {
            const inputVal = document.querySelector('input[type="radio"]:checked')
            this.formula = inputVal.value;
        });
    }

    convert(value) {
        let formula,
            formulaText,
            measurement;

        switch(this.formula) {
            case 'kg-to-lbs':
                formula = parseFloat(value * 2.20462262185).toFixed(2);
                formulaText = '1 kg = 2.20462262185 lb';
                measurement = 'lbs';
                break;
            case 'lbs-to-kg':
                formula = parseFloat(value * 0.45359237).toFixed(2);
                formulaText = '1 lb = 0.45359237 kg';
                measurement = 'kg'
                break;
        }

        document.querySelector('.results').innerHTML = `
            <input class="form-control mb-1" type="text" disabled value="${formula} ${measurement}"/>
            <p>${formulaText}</p>
        `

        document.querySelector('#weight').value = '';
    }
}