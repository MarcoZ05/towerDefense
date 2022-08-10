import * as consants from './constants.js'
import Render from './render/Render.js'
import Game from './game/Game.js'
import * as enemyPaths from './enemyPaths.js'
import * as towers from './towers.js'
import * as enemies from './enemies.js'

const canvas = document.querySelector('canvas') as HTMLCanvasElement
canvas.width = consants.CANVAS_WIDTH
canvas.height = consants.CANVAS_HEIGHT

const render = new Render()
const game = new Game()

const enemyPath = enemyPaths.standart
render.addEnemyPath(enemyPath)
game.addEnemyPath(enemyPath)

const tower = new towers.dartMonkey({ x: 100, y: 200 })
render.addTower(tower)
game.addTower(tower)

const greenBloon = new enemies.greenBloon({ x: 0, y: 250 })
render.addEnemy(greenBloon)
game.addEnemy(greenBloon)

let passedRenderSeconds: number = 0
let lastRenderSeconds: number = 0
async function renderLoop (timeStamp: number) {
  passedRenderSeconds = (timeStamp - lastRenderSeconds) / 1000

  if (passedRenderSeconds >= 10 / consants.FPS) {
    render.render(canvas)
    lastRenderSeconds = timeStamp
  }

  window.requestAnimationFrame(renderLoop)
}
window.requestAnimationFrame(renderLoop)

// let passedGameSeconds: number = 0
// let lastGameSeconds: number = 0
// function gameLoop (timeStamp: number) {
//   passedGameSeconds = (timeStamp - lastGameSeconds) / 1000
//   lastGameSeconds = timeStamp

//   if (passedGameSeconds >= consants.FPS) render.render(canvas)

//   window.requestAnimationFrame(gameLoop)
// }
// window.requestAnimationFrame(gameLoop)
