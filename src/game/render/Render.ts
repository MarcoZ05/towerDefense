import EnemyClass from '../classes/EnemyClass.js'
import MapClass from '../classes/MapClass.js'
import ProjectileClass from '../classes/ProjectileClass.js'
import TowerClass from '../classes/TowerClass.js'
import { RenderObjectInterface, PositionInterface } from '../interfaces.js'

export default class Render {
  towers: RenderObjectInterface[] = []
  enemies: RenderObjectInterface[] = []
  map: MapClass = {} as MapClass
  projectiles: {
    position: PositionInterface
    size: number
  }[] = []

  addMap (map: MapClass): void {
    this.map = map
  }

  addTower (tower: TowerClass): void {
    const renderObject = {} as RenderObjectInterface
    renderObject.image = tower.image
    renderObject.position = tower.position
    renderObject.width = tower.width
    renderObject.height = tower.height

    this.towers.push(renderObject)
  }

  addEnemy (enemy: EnemyClass): void {
    const renderObject = {} as RenderObjectInterface
    renderObject.position = enemy.position
    renderObject.image = enemy.image
    renderObject.width = enemy.width
    renderObject.height = enemy.height

    this.enemies.push(renderObject)
  }

  addProjectile (projectile: ProjectileClass): void {
    this.projectiles.push({
      position: projectile.position,
      size: projectile.size
    })
  }

  async render (canvas: HTMLCanvasElement): Promise<void> {
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.imageSmoothingEnabled = false

    //TODO: render map

    this.towers.forEach(async renderObject => {
      ctx.drawImage(
        renderObject.image,
        renderObject.position.x,
        renderObject.position.y,
        renderObject.width,
        renderObject.height
      )
    })

    this.enemies.forEach(async renderObject => {
      ctx.drawImage(
        renderObject.image,
        renderObject.position.x - renderObject.width / 2,
        renderObject.position.y - renderObject.height / 2,
        renderObject.width,
        renderObject.height
      )
    })

    this.projectiles.forEach(async renderObject => {
      ctx.beginPath()
      ctx.arc(
        renderObject.position.x,
        renderObject.position.y,
        renderObject.size,
        0,
        Math.PI * 2
      )
      ctx.fill()
      ctx.stroke()
    })

    ctx.closePath()
  }
}
