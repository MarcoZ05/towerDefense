import EnemyClass from '../classes/EnemyClass.js';
import * as enemies from '../enemies.js';
export class greenBloon extends EnemyClass {
    constructor(position) {
        super(position, 50, 50, 1, 1, 3, 'greenBloon', [
            new enemies.blueBloon(position)
        ]);
    }
}
