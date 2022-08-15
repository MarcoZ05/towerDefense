import EnemyClass from '../classes/EnemyClass.js'
import MapClass from '../classes/MapClass.js'
import ProjectileClass from '../classes/ProjectileClass.js'
import TowerClass from '../classes/TowerClass.js'
import { loop } from '../maps.js'
import Render from '../render/Render.js'

export default class Game {
  towers: Array<TowerClass> = []
  enemies: Array<EnemyClass> = []
  projectiles: Array<ProjectileClass> = []
  map: MapClass = {} as MapClass
  coins: number = 0
  wave: number = -1
  hp: number = 100
  renderer: Render = {} as Render
  tickCounter: number = 0
  constructor (renderer: Render) {
    this.renderer = renderer
  }

  setMap (map: MapClass) {
    this.map = map
    this.renderer.setMap(map)
  }

  addEnemy (enemy: EnemyClass) {
    this.enemies.push(enemy)
    this.renderer.addEnemy(enemy)
  }

  addTower (tower: TowerClass) {
    this.towers.push(tower)
    this.renderer.addTower(tower)
  }

  addProjectile (projectile: ProjectileClass) {
    this.projectiles.push(projectile)
    this.renderer.addProjectile(projectile)
  }

  deleteEnemy (enemy: EnemyClass) {
    this.enemies.splice(this.enemies.indexOf(enemy), 1)
    this.renderer.deleteEnemy(enemy)
  }

  update () {
    //TODO: game logic
    if(this.hp <= 0) {
      //TODO: game over 
    }

    if (this.enemies.length === 0) {
      this.wave++

      if (this.wave >= this.map.waves.length) {
        //TODO: win
        return true
      } else
        this.map.waves[this.wave].forEach(enemy => {
          this.addEnemy(enemy)
        })
    } else
      this.enemies.forEach(enemy => {
        enemy.move(this.map.path, this)
      })
  }
}
