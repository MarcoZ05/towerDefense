import EnemyClass from '../classes/EnemyClass.js'
import { PositionInterface } from '../interfaces'

export class test extends EnemyClass {
  constructor (position: PositionInterface) {
    super(
      position,
      50,
      50,
      10,
      'test',
      'test',
      3,
      {
        current: 1,
        max: 1,
        special: {
          camouflage: false,
          iron: false
        }
      },
      []
    )
  }
}