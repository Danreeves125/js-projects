export class UI {
    addGameToList(game) {
        // Get table body
        const bookTable = document.getElementById('tableBody');

        // Create row element
        const tableRow = document.createElement('tr');
        tableRow.className = 'table-row';

        tableRow.innerHTML = `
            <td>${game.name}</td>
            <td>${game.genre}</td>
            <td>${game.platform}</td>
            <td>£${parseFloat(game.price).toFixed(2)}</td>
            <td><a href="#" class="delete">X</a></td>
        `

        bookTable.appendChild(tableRow);
    }

    filterTasks(gameText) {
        const text = gameText.value.toLowerCase();
        // console.log(gameText);

        const allRows = document.querySelectorAll('.table-row');

        allRows.forEach((game) => {
            const item = game.firstElementChild.textContent.toLowerCase();

            if(item.indexOf(text) !== -1) {
                console.log('show');
            } else {
                console.log('hide');
            }

        });
    }

    deleteBook(target) {
        target.parentElement.parentElement.remove();
    }

    showAlert(msg, className) {
        const alert = document.createElement('div');

        alert.className = `${className}`;

        alert.appendChild(document.createTextNode(`${msg}`));

        const row = document.querySelector('.gameRow');
        const form = document.querySelector('#gameForm');

        row.insertBefore(alert, form);


        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    clearInputs() {
        document.querySelector('#gameName').value = '';
        document.querySelector('#genre').value = '';
        document.querySelector('#platform').value = '';
        document.querySelector('#price').value = '';
    }
}