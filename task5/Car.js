export default class Car {
    constructor(
        fuel = 0,
        lowFuelConsumption = 0,
        durability = 0,
        speed = 0,
        name = 'Unknown Car'
        ) {
            this.fuel = fuel;
            this.lowFuelConsumption = lowFuelConsumption;
            this.durability = durability;
            this.speed = speed;
            this.name = name;
            this.availablePoints = 2;
            this.defaultFuel = 5;
            this.totalFuel = this.defaultFuel + this.fuel;
        }
        
    showProps() {
        console.log(
            `Автомобиль имеет следующие свойства:\n\n` +
            `defaultFuel: ${this.defaultFuel}\n` +
            `fuel: ${this.fuel}\n` +
            `lowFuelConsumption: ${this.lowFuelConsumption}\n` +
            `durability: ${this.durability}\n` +
            `speed: ${this.speed}\n\n` +
            `Доступно для улучшений: ${this.availablePoints}`
        );
    }

    upgrade(property) {
        if (this.availablePoints === 0) {
            throw new Error('Превышен лимит распределяемых очков');
        }

        switch(property) {
            case 'fuel':
                this.fuel += 1;
                break;
            case 'lowFuelConsumption':
                this.lowFuelConsumption += 1;
                break
            case 'durability':
                this.durability += 1;
                break
            case 'speed':
                this.speed += 1;
                break;
            default:
                throw new Error(`Cвойство ${property} улучшить нельзя или оно не существует.`);
        }

        this.availablePoints -= 1;
        return this;
    }
};