import EnemyClass from '../classes/EnemyClass.js'
import MapClass from '../classes/MapClass.js'
import { PlatformInterface, PositionInterface } from '../interfaces.js'

const platforms: PlatformInterface[] = [
  {
    position: {
      x: 0,
      y: 0
    },
    width: 1000,
    height: 1000,
    type: 'ground'
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
const waves: EnemyClass[][] = [[]]

export const plains = new MapClass(platforms, path, 'plains', waves)
