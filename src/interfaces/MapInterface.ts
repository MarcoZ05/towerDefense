import { PositionInterface } from '../interfaces'
import PlatformClass from '../classes/PlatformClass'

export interface MapInterface {
  enemiesPath(enemiesPath: any): any
  enemyWay: Array<PositionInterface>
  platforms: Array<PlatformClass>
}
