class Formula {
    constructor() {
        this.formula = document.querySelector('#convert-type').value;
    }

    convert(value) {
        let formula,
            formulaText;

        switch(this.formula) {
            case 'kg-to-lbs':
                formula = parseFloat(value * 2.20462262185).toFixed(2);
                formulaText = '1 kg = 2.20462262185 lb';
                break;
        }

        document.querySelector('.results').innerHTML = `
            <input class="form-control mb-1" type="text" disabled value="${formula}"/>
            <p>${formulaText}</p>
        `
    }
}