import * as constants from '../constants.js'
import { PlatformInterface, PositionInterface } from '../interfaces.js'
import EnemyClass from './EnemyClass.js'

export default class MapClass {
  width: number
  height: number
  platforms: PlatformInterface[] = []
  path: PositionInterface[] = []
  waves: EnemyClass[][] = []
  name: string

  constructor (
    platforms: PlatformInterface[],
    path: PositionInterface[],
    name: string,
    waves: EnemyClass[][]
  ) {
    this.width = constants.CANVAS_WIDTH
    this.height = constants.CANVAS_HEIGHT
    this.platforms = platforms
    this.path = path
    this.name = name
    this.waves = waves
  }
}
