import EnemyClass from '../classes/EnemyClass.js'
import MapClass from '../classes/MapClass.js'
import * as enemies from '../enemies.js'
import { PlatformInterface, PositionInterface } from '../interfaces.js'

const groundImage = new Image()
groundImage.src = './assets/images/map/ground.jpg'
const waterImage = new Image()
waterImage.src = './assets/images/map/water.jpg'
const obstacleImage = new Image()
obstacleImage.src = './assets/images/map/obstacle.jpg'

const platforms: PlatformInterface[] = [
  {
    position: {
      x: 0,
      y: 0
    },
    width: 1000,
    height: 1000,
    type: 'ground',
    image: groundImage
  }
]
const path: PositionInterface[] = [
  {
    x: 0,
    y: 500
  },
  {
    x: 1000,
    y: 500
  }
]
const waves: EnemyClass[][] = [
  [new enemies.test({ x: path[0].x, y: path[0].y })]
]

export const plains = new MapClass(platforms, path, 'plains', waves)
