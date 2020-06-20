class UI {
    addGameToList(game) {
        // Get table body
        const bookTable = document.getElementById('tableBody');

        // Create row element
        const tableRow = document.createElement('tr');

        tableRow.innerHTML = `
            <td>${game.name}</td>
            <td>${game.genre}</td>
            <td>${game.platform}</td>
            <td>${game.price}</td>
        `

        bookTable.appendChild(tableRow);
    }
}