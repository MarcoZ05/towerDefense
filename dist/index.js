var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as consants from './constants.js';
import Render from './render/Render.js';
import Game from './game/Game.js';
import * as enemyPaths from './enemyPaths.js';
const canvas = document.querySelector('canvas');
canvas.width = consants.CANVAS_WIDTH;
canvas.height = consants.CANVAS_HEIGHT;
const render = new Render();
const game = new Game();
initPath(enemyPaths.standart);
// Renderings
let passedRenderSeconds = 0;
let lastRenderSeconds = 0;
function renderLoop(timeStamp) {
    return __awaiter(this, void 0, void 0, function* () {
        passedRenderSeconds = (timeStamp - lastRenderSeconds) / 1000;
        if (passedRenderSeconds >= 10 / consants.FPS) {
            yield render.render(canvas);
            lastRenderSeconds = timeStamp;
        }
        window.requestAnimationFrame(renderLoop);
    });
}
window.requestAnimationFrame(renderLoop);
// Game Logic
let passedGameSeconds = 0;
let lastGameSeconds = 0;
function gameLoop(timeStamp) {
    return __awaiter(this, void 0, void 0, function* () {
        passedGameSeconds = (timeStamp - lastGameSeconds) / 1000;
        if (passedGameSeconds >= 10 / consants.TPS) {
            game.update();
            lastGameSeconds = timeStamp;
        }
        window.requestAnimationFrame(gameLoop);
    });
}
window.requestAnimationFrame(gameLoop);
function initPath(enemyPath) {
    render.addEnemyPath(enemyPath);
    game.addEnemyPath(enemyPath);
}
function initTower(tower) {
    render.addTower(tower);
    game.addTower(tower);
}
function initEnemy(enemy) {
    render.addEnemy(enemy);
    game.addEnemy(enemy);
}
