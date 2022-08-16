import EnemyClass from '../classes/EnemyClass.js'
import { PositionInterface } from '../interfaces'

export class test extends EnemyClass {
  constructor (position: PositionInterface, id: number) {
    super(
      position,
      50,
      50,
      5,
      'test',
      'test',
      1,
      {
        current: 1,
        max: 1,
        special: {
          camouflage: false,
          iron: false
        }
      },
      [],
      id
    )
  }
}
