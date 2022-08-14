import { AttackInterface, PositionInterface } from '../interfaces'

export default class ProjectileClass {
  position: PositionInterface
  size: number
  duration: {
    time: number
    enemies: number
  }
  type: string
  damage: number
  deltaPosition: PositionInterface
  constructor (
    towerPosition: PositionInterface,
    enemyPosition: PositionInterface,
    size: number,
    attack: AttackInterface
  ) {
    this.position = towerPosition
    this.size = size
    this.duration = attack.duration
    this.type = attack.type
    this.damage = attack.damage
    this.deltaPosition = {
      x:
        (attack.speed * (enemyPosition.x - towerPosition.x)) /
        Math.sqrt(
          Math.pow(enemyPosition.x - towerPosition.x, 2) +
            Math.pow(enemyPosition.y - towerPosition.y, 2)
        ),
      y:
        (attack.speed * (enemyPosition.y - towerPosition.y)) /
        Math.sqrt(
          Math.pow(enemyPosition.x - towerPosition.x, 2) +
            Math.pow(enemyPosition.y - towerPosition.y, 2)
        )
    }
  }

  move (): void {
    // TODO: move projectile
  }
}
