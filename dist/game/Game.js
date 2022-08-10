export default class Game {
    constructor() {
        this.towers = [];
        this.enemies = [];
        this.enemyPath = [];
        this.coins = 0;
    }
    addEnemyPath(enemyPath) {
        this.enemyPath = enemyPath;
    }
    addEnemy(enemy) {
        this.enemies.push(enemy);
    }
    addTower(tower) {
        this.towers.push(tower);
    }
    update() {
        this.enemies.forEach(enemy => enemy.move(this.enemyPath));
        this.towers.forEach(tower => {
            const profit = tower.attack(this.enemies);
            this.coins += profit;
        });
    }
}
