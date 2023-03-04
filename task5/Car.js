export const DEFAULT_PROPERTIES = {
    FUEL: 5,
    TRACKLENGTH: 200,
    SPEED: 10,
    DURABILITY: 100,
}

export default class Car {
    availablePoints = 2;

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
        }
    
    get totalFuel() {
        return DEFAULT_PROPERTIES.FUEL + this.fuel;
    }

    get powerReserve() {
        return this.totalFuel * 
            DEFAULT_PROPERTIES.TRACKLENGTH +
            this.totalFuel * 
            0,1 * 
            DEFAULT_PROPERTIES.TRACKLENGTH * 
            this.lowFuelConsumption;
    };

    get totalSpeed() {
        return DEFAULT_PROPERTIES.SPEED +
            this.speed *
            0.05 *
            DEFAULT_PROPERTIES.SPEED;
    };

    get totalDurability() {
        return DEFAULT_PROPERTIES.DURABILITY +
            this.durability *
            0.01 *
            100;
    };
        
    showProps() {
        console.log(
            `Ваш автомобиль ${this.name} имеет следующие свойства:\n` +
            `fuel: ${this.fuel}\n` +
            `lowFuelConsumption: ${this.lowFuelConsumption}\n` +
            `durability: ${this.durability}\n` +
            `speed: ${this.speed}\n` +
            `Доступно для улучшений: ${this.availablePoints}\n`
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