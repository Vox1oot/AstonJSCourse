import Civilian from './Civilian.js';
import Sport from './Sport.js';
import Military from './Military.js';
import Enemies from './Enemies.js';
import compare from './compare.js';

// создаем новый автомобиль для игрока
const civilian = new Civilian('LADA');
// проиводим апргрейд автомобиля
civilian.upgrade('fuel').upgrade('speed');

// создаем автомобили врагов
const enemies = new Enemies(1);

//сравниваем автомбили по характеристикам
compare(civilian, enemies);
