import EnemyClass from '../classes/EnemyClass.js';
export class bloon extends EnemyClass {
    constructor(position) {
        super(position, 50, 50, 5, 5, 2, './assets/images/enemies/bloon.png');
    }
}
