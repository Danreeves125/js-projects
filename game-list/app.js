import {Game} from "./game";
import {UI} from "./ui";
import {Storage} from "./storage";

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    Storage.displayGames();
});

document.getElementById('gameForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#gameName').value,
          genre = document.querySelector('#genre').value,
          platform = document.querySelector('#platform').value,
          price = document.querySelector('#price').value;

    if(name == '' || genre == '' || platform == '' || price == '') {
        ui.showAlert('Please fill out all fields ', 'alert alert-error');
    } else {
        const game = new Game(name, genre, platform, price);

        ui.addGameToList(game);

        Storage.addGame(game);

        ui.showAlert('Game added to list ', 'alert alert-success');

        ui.clearInputs();
    }
});

document.getElementById('tableBody').addEventListener('click', (e) => {
    ui.deleteBook(e.target);

    Storage.removeGame(e.target.parentElement.parentElement.firstElementChild.textContent);

    ui.showAlert('Game removed from list ', 'alert alert-success');
});