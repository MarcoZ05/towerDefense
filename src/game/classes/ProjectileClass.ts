import { AttackInterface, PositionInterface } from '../interfaces'

export default class ProjectileClass {
  angle: number
  position: PositionInterface
  attack: AttackInterface
  constructor (
    angle: number,
    position: PositionInterface,
    attack: AttackInterface
  ) {
    this.angle = angle
    this.position = position
    this.attack = attack
  }

  move (): void {
    // TODO: move projectile
  }
}
