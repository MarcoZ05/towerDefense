export default class EnemyClass {
    constructor(position, height, width, speed, name, description, money, health) {
        this.image = new Image();
        this.position = position;
        this.height = height;
        this.width = width;
        this.speed = speed;
        this.name = name;
        this.description = description;
        this.money = money;
        this.health = health;
        this.image.src = './assets/images/enemy/' + name + '.png';
    }
    move(enemiesPath, game) {
        const isOnPath = false;
        // TODO: check if enemy is on path
        if (isOnPath) {
            //  TODO: moving on path
        }
        else {
            //  TODO: goes to start position of path
        }
    }
}
