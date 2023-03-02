import Car from './Car.js';

export default class Military extends Car {
    constructor(name) {
        super(2, 2, 4, 2, name);
        this.type = 'Military';
    }
};