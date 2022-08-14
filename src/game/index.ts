import * as consants from './constants.js'
import Render from './render/Render.js'
import Game from './game/Game.js'
import TowerClass from './classes/TowerClass.js'
import EnemyClass from './classes/EnemyClass.js'
import MapClass from './classes/MapClass.js'

const canvas = document.querySelector('canvas') as HTMLCanvasElement
canvas.width = consants.CANVAS_WIDTH
canvas.height = consants.CANVAS_HEIGHT

const render = new Render()
const game = new Game()

// Renderings
let passedRenderSeconds: number = 0
let lastRenderSeconds: number = 0
async function renderLoop (timeStamp: number) {
  passedRenderSeconds = (timeStamp - lastRenderSeconds) / 1000

  if (passedRenderSeconds >= 10 / consants.FPS) {
    await render.render(canvas)
    lastRenderSeconds = timeStamp
  }

  window.requestAnimationFrame(renderLoop)
}
window.requestAnimationFrame(renderLoop)

// Game Logic
let passedGameSeconds: number = 0
let lastGameSeconds: number = 0
async function gameLoop (timeStamp: number) {
  passedGameSeconds = (timeStamp - lastGameSeconds) / 1000

  if (passedGameSeconds >= 10 / consants.TPS) {
    game.update()
    lastGameSeconds = timeStamp
  }

  window.requestAnimationFrame(gameLoop)
}
window.requestAnimationFrame(gameLoop)

function initMap (map: MapClass) {
  render.addMap(map)
  game.addMap(map)
}

function initTower (tower: TowerClass) {
  render.addTower(tower)
  game.addTower(tower)
}

function initEnemy (enemy: EnemyClass) {
  render.addEnemy(enemy)
  game.addEnemy(enemy)
}
