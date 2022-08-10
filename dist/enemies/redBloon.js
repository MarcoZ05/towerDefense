import EnemyClass from '../classes/EnemyClass.js';
export class redBloon extends EnemyClass {
    constructor(position) {
        super(position, 50, 50, 1, 1, 3, 'redBloon', []);
    }
}
