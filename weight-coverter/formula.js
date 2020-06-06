class Formula {
    constructor() {
        this.formula = document.querySelector('#convert-type').value;
    }

    convert(value) {
        let formula,
            formulaText;

        switch(this.formula) {
            case 'kg-to-lbs':
                formula = value + 2.2;
                formulaText = 'This is kg to lbs';
                break;
        }

        document.querySelector('.results').innerHTML = `
            <input class="form-control" type="text" disabled value="${formula}"/>
            <p>${formulaText}</p>
        `
    }
}