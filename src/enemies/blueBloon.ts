import EnemyClass from '../classes/EnemyClass.js'
import { PositionInterface } from '../interfaces'
import * as enemies from '../enemies.js'

export class blueBloon extends EnemyClass {
  constructor (position: PositionInterface) {
    super(position, 50, 50, 1, 1, 3, 'blueBloon', [
      new enemies.redBloon(position)
    ])
  }
}
