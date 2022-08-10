import TowerClass from '../classes/TowerClass.js'
import { PositionInterface } from '../interfaces'

export class dartMonkey extends TowerClass {
  constructor (position: PositionInterface) {
    super(position, 50, 50, 2, 1, 100, 5, 'dartMonkey', [[], [], []])
  }
}
