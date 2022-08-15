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
    y: 250
  },
  {
    x: 250,
    y: 250
  },
  {
    x: 250,
    y: 750
  },
  {
    x: 750,
    y: 750
  },
  {
    x: 750,
    y: 250
  },
  {
    x: 250,
    y: 250
  },
  {
    x: 250,
    y: 750
  },
  {
    x: 1000,
    y: 750
  }
]
const waves: EnemyClass[][] = [[],[]]
for (let i = 0; i < 5; i++) {
  waves[0].push(new enemies.test({ x: path[0].x - 25 * i, y: path[0].y }, i))
}
for (let i = 0; i < 10; i++) {
  waves[1].push(new enemies.test({ x: path[0].x - 10 * i, y: path[0].y }, i+5))
}

export const loop = new MapClass(platforms, path, 'loop', waves)
