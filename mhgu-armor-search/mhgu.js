export class Mhgu {

    async getArmour() {
        const response = await fetch('armour.json');

        const data = await response;

        console.log(data.armor);
    }
}