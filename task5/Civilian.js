import Car from './Car.js';

export default class Civilian extends Car {
    constructor(name) {
        super(2, 2, 2, 4, name);
        this.type = 'Civilian';
    }
};