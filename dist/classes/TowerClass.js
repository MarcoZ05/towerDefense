export default class TowerClass {
    constructor(position, width, height, attackDelay, attackDamage, attackRange, attackSpeed, name, leveling) {
        this.image = new Image();
        this.target = 'first';
        this.leveling = [[], [], []];
        this.position = position;
        this.image.src =
            './assets/images/towers/' +
                name +
                '/' +
                leveling[0].filter(e => e.bought).length +
                '-' +
                leveling[1].filter(e => e.bought).length +
                '-' +
                leveling[2].filter(e => e.bought).length +
                '.png';
        this.width = width;
        this.height = height;
        this.attackDelay = attackDelay;
        this.attackDamage = attackDamage;
        this.attackRange = attackRange;
        this.attackSpeed = attackSpeed;
        this.name = name;
        this.leveling = leveling;
    }
    attack(enemies = []) {
        const enemiesInRange = this.enemiesInRange(enemies);
        let profit = 0;
        enemiesInRange.forEach(enemy => {
            const returnValue = enemy.hit(this.attackDamage);
            if (returnValue.killed) {
                profit++;
            }
        });
        return profit;
    }
    onclick() {
        console.log('clicked');
    }
    enemiesInRange(enemies = []) {
        return enemies.filter(enemy => {
            const R = this.attackRange;
            const a = enemy.position.x - this.position.x;
            const b = enemy.position.y - this.position.y;
            const r = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            return r <= R;
        });
    }
}
