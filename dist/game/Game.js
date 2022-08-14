export default class Game {
    constructor() {
        this.towers = [];
        this.enemies = [];
        this.projectiles = [];
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
    addProjectile(projectile) {
        this.projectiles.push(projectile);
    }
    deleteEnemy(enemy) {
        this.enemies.splice(this.enemies.indexOf(enemy), 1);
    }
    update() {
        this.enemies.forEach(enemy => enemy.move(this.enemyPath, this));
        this.towers.forEach(tower => {
            tower.shootProjectile(this.enemies);
        });
        this.projectiles.forEach(projectile => {
            projectile.move();
        });
    }
}
