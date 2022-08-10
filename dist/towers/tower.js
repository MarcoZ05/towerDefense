import TowerClass from '../classes/TowerClass.js';
export class tower extends TowerClass {
    constructor(position) {
        super(position, 50, 50, 1000, 10, 100, './assets/images/towers/tower.png');
    }
}
