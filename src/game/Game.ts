import EnemyClass from '../classes/EnemyClass'
import TowerClass from '../classes/TowerClass'
import { PositionInterface } from '../interfaces'

export default class Game {
  towers: Array<TowerClass> = []
  enemies: Array<EnemyClass> = []
  enemyPath: Array<PositionInterface> = []
  coins: number = 0

  addEnemyPath (enemyPath: Array<PositionInterface>) {
    this.enemyPath = enemyPath
  }

  addEnemy (enemy: EnemyClass) {
    this.enemies.push(enemy)
  }

  addTower (tower: TowerClass) {
    this.towers.push(tower)
  }

  update () {
    this.enemies.forEach(enemy => enemy.move(this.enemyPath))

    this.towers.forEach(tower => {
      const profit = tower.attack(this.enemies)
      this.coins += profit
    })
  }
}
