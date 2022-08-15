import Game from '../game/Game'
import { HealthInterface, PositionInterface } from '../interfaces'

export default class EnemyClass {
  position: PositionInterface
  pathCheckPoint: number = 0
  height: number
  width: number
  speed: number
  name: string
  description: string
  money: number
  health: HealthInterface
  image: HTMLImageElement = new Image()
  popEnemies: EnemyClass[] = []
  constructor (
    position: PositionInterface,
    height: number,
    width: number,
    speed: number,
    name: string,
    description: string,
    money: number,
    health: HealthInterface,
    popEnemies: EnemyClass[]
  ) {
    this.position = position
    this.height = height
    this.width = width
    this.speed = speed
    this.name = name
    this.description = description
    this.money = money
    this.health = health
    this.image.src = './assets/images/enemies/' + name + '.jpg'
    this.popEnemies = popEnemies
  }

  pop (game: Game): void {}

  move (enemiesPath: PositionInterface[], game: Game): void {
    for (let i = 0; i < this.speed; i++) {
      const thisCheckPoint = enemiesPath[this.pathCheckPoint]
      const nextCheckPoint = enemiesPath[this.pathCheckPoint]

      if (this.pathCheckPoint >= enemiesPath.length) {
        game.hp -= this.health.current
        game.deleteEnemy(this)
        return
      } else if (
        this.position.x === nextCheckPoint.x &&
        this.position.y === nextCheckPoint.y
      ) {
        this.pathCheckPoint++
      }

      const isOnPath =
        (this.position.x === thisCheckPoint.x &&
          this.position.x === nextCheckPoint.x &&
          ((this.position.y <= thisCheckPoint.y &&
            this.position.y >= nextCheckPoint.y) ||
            (this.position.y >= thisCheckPoint.y &&
              this.position.y <= nextCheckPoint.y))) ||
        (this.position.y === thisCheckPoint.y &&
          this.position.y === nextCheckPoint.y &&
          ((this.position.x <= thisCheckPoint.x &&
            this.position.x >= nextCheckPoint.x) ||
            (this.position.x >= thisCheckPoint.x &&
              this.position.x <= nextCheckPoint.x)))

      if (!isOnPath) {
        this.position.x +=
          thisCheckPoint.x < this.position.x
            ? -1
            : thisCheckPoint.x > this.position.x
            ? 1
            : 0
        this.position.y +=
          thisCheckPoint.y < this.position.y
            ? -1
            : thisCheckPoint.y > this.position.y
            ? 1
            : 0
        this.pathCheckPoint = 0
      } else {
        this.position.x +=
          nextCheckPoint.x < this.position.x
            ? -1
            : nextCheckPoint.x > this.position.x
            ? 1
            : 0
        this.position.y +=
          nextCheckPoint.y < this.position.y
            ? -1
            : nextCheckPoint.y > this.position.y
            ? 1
            : 0
      }
    }
  }
}
