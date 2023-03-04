import { DEFAULT_PROPERTIES } from './Car.js';

const getPercent = (currentValue, maxValue) => {
    const value = Math.round(currentValue / maxValue * 100);
    return `${value}%`;
};

export default function compare(gamer, enemies) {
    const cars = [...enemies.cars, gamer];

    const MAX_PERKS = cars.reduce((acc, car) => {
        if (!Object.hasOwn(acc, 'powerReserve')) {
            acc.powerReserve = car.powerReserve;
        } else {
            if (acc.powerReserve < car.powerReserve) {
                acc.powerReserve = car.powerReserve;
            }
        }

        if (!Object.hasOwn(acc, 'durability')) {
            acc.durability = car.totalDurability;
        } else {
            if (acc.durability < car.totalDurability) {
                acc.durability = car.totalDurability;
            }
        }

        if (!Object.hasOwn(acc, 'speed')) {
            acc.speed = car.totalSpeed;
        } else {
            if (acc.speed < car.totalSpeed) {
                acc.speed = car.totalSpeed;
            }
        }
        return acc;
    }, {});

    const result = cars.map((car) => {
        return {
            powerReserve: car.powerReserve === MAX_PERKS.powerReserve 
            ? '100%' 
            : getPercent(car.powerReserve, MAX_PERKS.powerReserve),
            durability: car.totalDurability === MAX_PERKS.durability 
            ? '100%'
            : getPercent(car.totalDurability, MAX_PERKS.durability),
            speed: car.totalSpeed === MAX_PERKS.speed 
            ?'100%'
            : getPercent(car.totalSpeed, MAX_PERKS.speed),
            name: car.name,
        }
    });

    return result;
};