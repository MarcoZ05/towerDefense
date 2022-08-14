export default class TowerClass {
    constructor(position, height, width, attack, cost, name, description, leveling) {
        this.image = new Image();
        this.position = position;
        this.height = height;
        this.width = width;
        this.attack = attack;
        this.cost = cost;
        this.name = name;
        this.description = description;
        this.leveling = leveling;
        this.image.src =
            './assets/images/tower/' +
                name +
                '/' +
                leveling[0].filter(e => e.bought) +
                '-' +
                leveling[1].filter(e => e.bought) +
                '-' +
                leveling[2].filter(e => e.bought) +
                '.png';
    }
    shootProjectile(enemies = []) {
        const enemiesInRange = this.enemiesInRange(enemies);
        // TODO: attack enemy/-ies, check type...
    }
    onclick() { }
    enemiesInRange(enemies = []) {
        return enemies.filter(enemy => {
            return (Math.sqrt(Math.pow(enemy.position.x - this.position.x, 2) +
                Math.pow(enemy.position.y - this.position.y, 2)) <= this.attack.range);
        });
    }
}
