export default class EnemyClass {
    constructor(position, width, height, health, maxHealth, speed, name, popBloons) {
        this.image = new Image();
        this.name = name;
        this.position = position;
        this.image.src = './assets/images/enemies/' + name + '.png';
        this.width = width;
        this.height = height;
        this.health = health;
        this.speed = speed;
        this.maxHealth = maxHealth;
        this.popBloons = popBloons;
    }
    move(enemiesPath) {
        //TODO
        const isOnPath = false;
        if (isOnPath) {
            //TODO
        }
        else {
            this.position.x =
                enemiesPath[0].x < this.position.x
                    ? this.position.x - 1
                    : enemiesPath[0].x > this.position.x
                        ? this.position.x + 1
                        : this.position.x;
            this.position.y =
                enemiesPath[0].y < this.position.y
                    ? this.position.y - 1
                    : enemiesPath[0].y > this.position.y
                        ? this.position.y + 1
                        : this.position.y;
        }
    }
    hit(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            return { popBloons: this.popBloons, poped: true };
        }
        return { popBloons: [], poped: false };
    }
}
