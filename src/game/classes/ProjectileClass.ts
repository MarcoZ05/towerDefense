import Game from '../game/Game'
import { AttackInterface, PositionInterface } from '../interfaces'
import EnemyClass from './EnemyClass'

export default class ProjectileClass {
  deltaPosition: PositionInterface
  position: PositionInterface
  attack: AttackInterface
  id: number
  constructor (
    deltaPosition: PositionInterface,
    position: PositionInterface,
    attack: AttackInterface,
    id: number
  ) {
    this.deltaPosition = deltaPosition
    this.position = position
    this.attack = attack
    this.id = id
  }

  move (game: Game): { enemies: EnemyClass[]; destroy: boolean } {
    const hittedEnemies: EnemyClass[] = []
    const enemies = game.enemies

    for (let i = 0; i < this.attack.speed; i++) {
      this.position.x += this.deltaPosition.x
      this.position.y += this.deltaPosition.y

      for (let j = 0; j < enemies.length; j++) {
        if (
          this.position.x <= enemies[j].position.x + enemies[j].width &&
          this.position.x + this.attack.size >= enemies[j].position.x &&
          this.position.y <= enemies[j].position.y + enemies[j].height &&
          this.position.y + this.attack.size >= enemies[j].position.y
        ) {
          if (this.attack.durability > 0) hittedEnemies.push(enemies[j])
          this.attack.durability--
        }
      }

      if (
        this.attack.durability <= 0 ||
        this.position.x + this.attack.size < 0 ||
        this.position.x > game.renderer.canvas.width ||
        this.position.y + this.attack.size < 0 ||
        this.position.y > game.renderer.canvas.height ||
        game.map.platforms.some(platform => {
          return (
            this.position.x <= platform.position.x + platform.width &&
            this.position.x + this.attack.size >= platform.position.x &&
            this.position.y <= platform.position.y + platform.height &&
            this.position.y + this.attack.size >= platform.position.y &&
            platform.type === 'obstacle'
          )
        })
      ) {
        console.log('destroy');
        
        return { enemies: hittedEnemies, destroy: true }
      }
    }
    return { enemies: hittedEnemies, destroy: false }
  }
}
