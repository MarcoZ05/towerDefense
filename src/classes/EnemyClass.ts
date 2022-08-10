import { PositionInterface } from '../interfaces'

export default class EnemyClass {
  position: PositionInterface
  width: number
  height: number
  image: HTMLImageElement = new Image()

  health: number
  maxHealth: number
  speed: number
  name: string
  popBloons: Array<EnemyClass>

  constructor (
    position: PositionInterface,
    width: number,
    height: number,
    health: number,
    maxHealth: number,
    speed: number,
    name: string,
    popBloons: Array<EnemyClass>
  ) {
    this.name = name
    this.position = position
    this.image.src = './assets/images/enemies/' + name + '.png'
    this.width = width
    this.height = height
    this.health = health
    this.speed = speed
    this.maxHealth = maxHealth
    this.popBloons = popBloons
  }

  move (enemiesPath: Array<PositionInterface>): void {
    //TODO
    const isOnPath: boolean = false

    if (isOnPath) {
      //TODO
    } else {
      this.position.x =
        enemiesPath[0].x < this.position.x
          ? this.position.x - 1
          : enemiesPath[0].x > this.position.x
          ? this.position.x + 1
          : this.position.x

      this.position.y =
        enemiesPath[0].y < this.position.y
          ? this.position.y - 1
          : enemiesPath[0].y > this.position.y
          ? this.position.y + 1
          : this.position.y
    }
  }

  hit (damage: number): any {
    this.health -= damage
    if (this.health <= 0) {
      return { popBloons: this.popBloons, poped: true }
    }
    return { popBloons: [], poped: false }
  }
}
