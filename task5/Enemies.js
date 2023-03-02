import Civilian from './Civilian.js';
import Military from './Military.js';
import Sport from './Sport.js';

const randomKey = (max) => Math.floor(Math.random() * (max - 0 + 1) + 0);

const generateEnemies = (amount) => {
    const props = {
        0: 'fuel',
        1: 'lowFuelConsumption',
        2: 'durability',
        3: 'speed',
    };

    const typeOfCars = {
        0: Civilian,
        1: Military,
        2: Sport,
    };

    const enemies = [];

    for (let i = 0; i < amount; i += 1) {
        const enemyClass = typeOfCars[randomKey(2)];
        const enemy = new enemyClass(`Enemy ${i + 1}`);

        for (let i = 0; i < 2; i += 1) {
            enemy.upgrade(props[randomKey(3)]);
        }

        enemies.push(enemy);
    }

    return enemies;
}

export default class Enemies {
    constructor(amount) {
        this.cars = generateEnemies(amount);
    }
}