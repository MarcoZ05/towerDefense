import Game from '../game/Game'
import { HealthInterface, PositionInterface } from '../interfaces'

export default class EnemyClass {
  position: PositionInterface
  height: number
  width: number
  speed: number
  name: string
  description: string
  money: number
  health: HealthInterface
  image: HTMLImageElement = new Image()
  constructor (
    position: PositionInterface,
    height: number,
    width: number,
    speed: number,
    name: string,
    description: string,
    money: number,
    health: HealthInterface
  ) {
    this.position = position
    this.height = height
    this.width = width
    this.speed = speed
    this.name = name
    this.description = description
    this.money = money
    this.health = health
    this.image.src = './assets/images/enemy/' + name + '.png'
  }

  move (enemiesPath: PositionInterface[], game: Game): void {
    const isOnPath = false

    // TODO: check if enemy is on path

    if (isOnPath) {
      //  TODO: moving on path
    } else {
      //  TODO: goes to start position of path
    }
  }
}
