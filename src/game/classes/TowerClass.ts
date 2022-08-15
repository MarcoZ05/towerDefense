import Game from '../game/Game'
import {
  AttackInterface,
  LevelInterface,
  PositionInterface
} from '../interfaces'
import EnemyClass from './EnemyClass'

export default class TowerClass {
  position: PositionInterface
  height: number
  width: number
  attack: AttackInterface
  cost: number
  name: string
  description: string
  leveling: LevelInterface[][]
  image: HTMLImageElement = new Image()
  constructor (
    position: PositionInterface,
    height: number,
    width: number,
    attack: AttackInterface,
    cost: number,
    name: string,
    description: string,
    leveling: LevelInterface[][]
  ) {
    this.position = position
    this.height = height
    this.width = width
    this.attack = attack
    this.cost = cost
    this.name = name
    this.description = description
    this.leveling = leveling
    this.image.src =
      './assets/images/tower/' +
      name +
      '/' +
      leveling[0].filter(e => e.bought) +
      '-' +
      leveling[1].filter(e => e.bought) +
      '-' +
      leveling[2].filter(e => e.bought) +
      '.png'
  }

  shootProjectile (enemies: Array<EnemyClass> = [], game: Game): void {
    // TODO: attack enemy/-ies, check type...
  }

  onclick (): void {}

  enemiesInRange (enemies: Array<EnemyClass> = []): Array<EnemyClass> {
    return enemies.filter(enemy => {
      return (
        Math.sqrt(
          Math.pow(enemy.position.x - this.position.x, 2) +
            Math.pow(enemy.position.y - this.position.y, 2)
        ) <= this.attack.range
      )
    })
  }
}
