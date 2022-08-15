import EnemyClass from '../classes/EnemyClass.js'
import MapClass from '../classes/MapClass.js'
import ProjectileClass from '../classes/ProjectileClass.js'
import TowerClass from '../classes/TowerClass.js'
import Render from '../render/Render.js'

export default class Game {
  towers: Array<TowerClass> = []
  enemies: Array<EnemyClass> = []
  projectiles: Array<ProjectileClass> = []
  projectilesId: number = 0
  map: MapClass = {} as MapClass
  coins: number = 0
  wave: number = -1
  hp: number = 100
  renderer: Render = {} as Render
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
  deleteEnemy (enemy: EnemyClass) {
    this.enemies.splice(this.enemies.indexOf(enemy), 1)
    this.renderer.deleteEnemy(enemy)
  }

  addTower (tower: TowerClass) {
    this.towers.push(tower)
    this.renderer.addTower(tower)
  }

  addProjectile (projectile: ProjectileClass) {
    this.projectilesId++
    this.projectiles.push(projectile)
    this.renderer.addProjectile(projectile)
  }
  deleteProjectile (projectile: ProjectileClass) {
    this.projectiles = this.projectiles.filter(p => p.id !== projectile.id)
    console.log(this.projectiles);
    
    this.renderer.deleteProjectile(projectile)
  }

  update () {
    //TODO: game logic
    if (this.hp <= 0) {
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

    this.towers.forEach(tower => {
      tower.shootProjectile(this.enemies, this).forEach(shotDeltaPostion => {
        
        this.addProjectile(
          new ProjectileClass(
            shotDeltaPostion,
            { x: tower.position.x, y: tower.position.y },
            tower.attack,
            this.projectilesId
          )
        )
      })
    })

    console.log("");
    console.log(this.projectiles)
    
    this.projectiles.forEach(projectile => {
      const data = projectile.move(this)
      if (data.destroy) this.deleteProjectile(projectile)
      data.enemies.forEach(enemy => {
        this.coins += enemy.money
        this.deleteEnemy(enemy)
      })
      console.log(projectile.id);
      
    })

    
  }
}
