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
const waves: EnemyClass[][] = [
  [
    new enemies.test({ x: path[0].x, y: path[0].y }),
    new enemies.test({ x: path[0].x - 25, y: path[0].y }),
    new enemies.test({ x: path[0].x - 50, y: path[0].y }),
    new enemies.test({ x: path[0].x - 75, y: path[0].y }),
    new enemies.test({ x: path[0].x - 100, y: path[0].y }),
  ],
  [
    new enemies.test({ x: path[0].x, y: path[0].y }),
    new enemies.test({ x: path[0].x - 10, y: path[0].y }),
    new enemies.test({ x: path[0].x - 20, y: path[0].y }),
    new enemies.test({ x: path[0].x - 30, y: path[0].y }),
    new enemies.test({ x: path[0].x - 40, y: path[0].y }),
    new enemies.test({ x: path[0].x - 50, y: path[0].y }),
    new enemies.test({ x: path[0].x - 60, y: path[0].y }),
    new enemies.test({ x: path[0].x - 70, y: path[0].y }),
    new enemies.test({ x: path[0].x - 80, y: path[0].y }),
    new enemies.test({ x: path[0].x - 90, y: path[0].y }),
  ]
]

export const loop = new MapClass(platforms, path, 'plains', waves)
