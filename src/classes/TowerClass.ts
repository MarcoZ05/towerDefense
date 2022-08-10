import { LevelInterface, PositionInterface } from '../interfaces'
import EnemyClass from './EnemyClass'

export default class TowerClass {
  position: PositionInterface
  width: number
  height: number
  image: HTMLImageElement = new Image()

  attackSpeed: number
  attackDelay: number
  attackDamage: number
  attackRange: number
  target: 'first' | 'last' | 'nearest' | 'weakest' | 'strongest' | 'all' =
    'first'
  leveling: Array<Array<LevelInterface>> = [[], [], []]
  name: string

  constructor (
    position: PositionInterface,
    width: number,
    height: number,
    attackDelay: number,
    attackDamage: number,
    attackRange: number,
    attackSpeed: number,
    name: string,
    leveling: Array<Array<LevelInterface>>
  ) {
    this.position = position
    this.image.src =
      './assets/images/towers/' +
      name +
      '/' +
      leveling[0].filter(e => e.bought).length +
      '-' +
      leveling[1].filter(e => e.bought).length +
      '-' +
      leveling[2].filter(e => e.bought).length +
      '.png'
    this.width = width
    this.height = height
    this.attackDelay = attackDelay
    this.attackDamage = attackDamage
    this.attackRange = attackRange
    this.attackSpeed = attackSpeed
    this.name = name
    this.leveling = leveling
  }

  attack (enemies: Array<EnemyClass> = []): number {
    const enemiesInRange = this.enemiesInRange(enemies)
    let profit = 0

    enemiesInRange.forEach(enemy => {
      const returnValue = enemy.hit(this.attackDamage)
      if (returnValue.killed) {
        profit++
      }
    })

    return profit
  }

  onclick (): void {}

  enemiesInRange (enemies: Array<EnemyClass> = []): Array<EnemyClass> {
    return enemies.filter(enemy => {
      const R: number = this.attackRange
      const a: number = enemy.position.x - this.position.x
      const b: number = enemy.position.y - this.position.y
      const r = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
      return r <= R
    })
  }
}
