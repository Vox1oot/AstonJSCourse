import Civilian from './Civilian.js';
import Sport from './Sport.js';
import Military from './Military.js';
import Enemies from './Enemies.js';

const civilian = new Civilian('LADA');
const sport = new Sport('Maseratti');

const enemies = new Enemies(2);

civilian.upgrade('fuel');

console.log(civilian);
console.log(sport);

console.log(enemies);