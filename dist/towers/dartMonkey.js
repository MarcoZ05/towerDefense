import TowerClass from '../classes/TowerClass.js';
export class dartMonkey extends TowerClass {
    constructor(position) {
        super(position, 50, 50, 2, 1, 100, 5, 'dartMonkey', [[], [], []]);
    }
}
