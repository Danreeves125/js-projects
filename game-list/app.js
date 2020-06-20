import newGame from './game.js';

document.getElementById('gameForm').addEventListener('submit', (e) => {
    const name = document.querySelector('gameName'),
          genre = document.querySelector('genre'),
          platform = document.querySelector('platform'),
          price = document.querySelector('price');

    const game = new Game(name, genre, platform, price);

    const ui = new UI();

    ui.addGameToList(game);
});