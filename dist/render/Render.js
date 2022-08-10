var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class Render {
    constructor() {
        this.towers = [];
        this.enemies = [];
        this.enemyPath = [];
    }
    addEnemyPath(enemyPath) {
        this.enemyPath = enemyPath;
    }
    addTower(tower) {
        const renderObject = {};
        renderObject.image = tower.image;
        renderObject.position = tower.position;
        renderObject.width = tower.width;
        renderObject.height = tower.height;
        this.towers.push(renderObject);
    }
    addEnemy(enemy) {
        const renderObject = {};
        renderObject.image = enemy.image;
        renderObject.position = enemy.position;
        renderObject.width = enemy.width;
        renderObject.height = enemy.height;
        this.enemies.push(renderObject);
    }
    render(canvas) {
        return __awaiter(this, void 0, void 0, function* () {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.imageSmoothingEnabled = false;
            this.enemyPath.forEach((position, i) => {
                if (i === 0) {
                    ctx.beginPath();
                    ctx.lineWidth = 50;
                    ctx.strokeStyle = 'beige';
                    ctx.moveTo(position.x, position.y);
                }
                else
                    ctx.lineTo(position.x, position.y);
            });
            const renderObjects = [
                ...this.towers,
                ...this.enemies
            ];
            renderObjects.forEach((renderObject) => __awaiter(this, void 0, void 0, function* () {
                ctx.drawImage(renderObject.image, renderObject.position.x, renderObject.position.y, renderObject.width, renderObject.height);
            }));
            ctx.stroke();
        });
    }
}
