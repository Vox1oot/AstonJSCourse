import Car from './Car.js';

export default class Sport extends Car {
    constructor(name) {
        super(2, 1, 1, 6, name);
        this.type = 'Sport';
    }
};