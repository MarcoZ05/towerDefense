import EnemyClass from '../classes/EnemyClass.js'
import { PositionInterface } from '../interfaces'
import * as enemies from '../enemies.js'

export class greenBloon extends EnemyClass {
  constructor (position: PositionInterface) {
    super(position, 50, 50, 1, 1, 3, 'greenBloon', [
      new enemies.blueBloon(position)
    ])
  }
}
