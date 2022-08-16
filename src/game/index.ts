import * as consants from './constants.js'
import Render from './render/Render.js'
import Game from './game/Game.js'
import MapClass from './classes/MapClass.js'
import * as Maps from './maps.js'
import * as towers from './towers.js'

const hpSpan = document.getElementById('health') as HTMLSpanElement
const moneySpan = document.getElementById('money') as HTMLSpanElement
const waveSpan = document.getElementById('wave') as HTMLSpanElement

const canvas = document.querySelector('canvas') as HTMLCanvasElement
canvas.width = consants.CANVAS_WIDTH
canvas.height = consants.CANVAS_HEIGHT

const render = new Render(canvas, hpSpan, moneySpan, waveSpan)
const game = new Game(render)

let mapLoaded: boolean = false
const map: MapClass = Maps.loop
initMap(map)

const testTower = new towers.test({x: 100, y: 100})
game.addTower(testTower)

// Renderings
let passedRenderSeconds: number = 0
let lastRenderSeconds: number = 0
async function renderLoop (timeStamp: number) {
  passedRenderSeconds = (timeStamp - lastRenderSeconds) / 1000

  if (passedRenderSeconds >= 1 / consants.FPS && mapLoaded) {
    await render.render()
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

  if (passedGameSeconds >= 1 / consants.TPS && mapLoaded) {
    game.update()
    lastGameSeconds = timeStamp
  }

  window.requestAnimationFrame(gameLoop)
}
window.requestAnimationFrame(gameLoop)

function initMap (map: MapClass) {
  let loadedImages = 0

  map.platforms.forEach(platform => {
    platform.image.onload = () => {
      loadedImages++
      if (loadedImages === map.platforms.length) {
        render.setMap(map)
        game.setMap(map)
        mapLoaded = true
      }
    }
  })
}
