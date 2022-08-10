import EnemyClass from '../classes/EnemyClass.js';
import * as enemies from '../enemies.js';
export class blueBloon extends EnemyClass {
    constructor(position) {
        super(position, 50, 50, 1, 1, 3, 'blueBloon', [
            new enemies.redBloon(position)
        ]);
    }
}
