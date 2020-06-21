import {UI} from "./ui";

export class Storage {
    static getGames() {
        let games;

        if(localStorage.getItem('games') === null) {
            games = [];
        } else {
            games = JSON.parse(localStorage.getItem('games'));
        }

        return games;
    }

    static displayGames() {
        const games = Storage.getGames();

        games.forEach((game) => {
            const ui = new UI();

            ui.addGameToList(game);
        });
    }

    static addGame(game) {
        const games = Storage.getGames();

        games.push(game);

        localStorage.setItem('games', JSON.stringify(games));
    }

    static removeGame(gameName) {
        const games = Storage.getGames();

        games.forEach((game, index) => {

            if(gameName === game.name) {
                games.splice(index, 1);
            }
        });

        localStorage.setItem('games', JSON.stringify(games));

    }
}