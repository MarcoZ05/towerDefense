import EnemyClass from '../classes/EnemyClass.js'
import MapClass from '../classes/MapClass.js'
import ProjectileClass from '../classes/ProjectileClass.js'
import TowerClass from '../classes/TowerClass.js'

export default class Game {
  towers: Array<TowerClass> = []
  enemies: Array<EnemyClass> = []
  projectiles: Array<ProjectileClass> = []
  map: MapClass = {} as MapClass
  coins: number = 0

  addMap (map: MapClass) {
    this.map = map
  }

  addEnemy (enemy: EnemyClass) {
    this.enemies.push(enemy)
  }

  addTower (tower: TowerClass) {
    this.towers.push(tower)
  }

  addProjectile (projectile: ProjectileClass) {
    this.projectiles.push(projectile)
  }

  deleteEnemy (enemy: EnemyClass) {
    this.enemies.splice(this.enemies.indexOf(enemy), 1)
  }

  update () {
    //TODO: game logic
  }
}
