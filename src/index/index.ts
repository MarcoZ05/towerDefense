import { CANVAS_WIDTH, CANVAS_HEIGHT } from '../game/constants.js'
import * as Maps from '../game/maps.js'
import Render from '../game/render/Render.js'

const mapsContainer = document.getElementById(
  'maps-container'
) as HTMLDivElement
const mapNameSpan = document.getElementById('title') as HTMLSpanElement
const roundsDiv = document.getElementById('rounds') as HTMLDivElement

//TODO: array with mapAmount * 0
let mapStats =
  localStorage.getItem('mapStats') === null
    ? []
    : localStorage.getItem('mapStats')

// @ts-ignore
for (const [key, value] of Object.entries(Maps)) {
  const mapContainer = document.createElement('div')
  mapContainer.className = 'map-container'
  mapContainer.id = key

  const mapCanvas = document.createElement('canvas')
  mapCanvas.className = 'map-canvas'
  mapCanvas.id = key + '-canvas'
  mapCanvas.width = CANVAS_WIDTH
  mapCanvas.height = CANVAS_HEIGHT
  //TODO: Rendering MapSelection
  const render = new Render(mapCanvas)
  render.setMap(value)
  render.render()

  mapContainer.appendChild(mapCanvas)
  mapsContainer.appendChild(mapContainer)
}
