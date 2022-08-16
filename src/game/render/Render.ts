import EnemyClass from '../classes/EnemyClass.js'
import MapClass from '../classes/MapClass.js'
import ProjectileClass from '../classes/ProjectileClass.js'
import TowerClass from '../classes/TowerClass.js'
import { RenderObjectInterface, PositionInterface } from '../interfaces.js'

export default class Render {
  canvas: HTMLCanvasElement
  hpSpan: HTMLSpanElement
  wavesSpan: HTMLSpanElement
  moneySpan: HTMLSpanElement
  towers: RenderObjectInterface[] = []
  enemies: RenderObjectInterface[] = []
  map: MapClass = {} as MapClass
  projectiles: {
    position: PositionInterface
    size: number
  }[] = []
  constructor (
    canvas: HTMLCanvasElement,
    hpSpan: HTMLSpanElement = document.createElement('span'),
    wavesSpan: HTMLSpanElement = document.createElement('span'),
    moneySpan: HTMLSpanElement = document.createElement('span')
  ) {
    this.canvas = canvas
    this.hpSpan = hpSpan
    this.wavesSpan = wavesSpan
    this.moneySpan = moneySpan
  }

  setMap (map: MapClass): void {
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
    renderObject.id = enemy.id

    this.enemies.push(renderObject)
  }
  deleteEnemy (enemy: EnemyClass): void {
    // delete enemy with same id
    this.enemies.splice(
      this.enemies.findIndex(e => e.id === enemy.id),
      1
    )
    //TODO: enemy pop effect
  }

  addProjectile (projectile: ProjectileClass): void {
    this.projectiles.push({
      position: projectile.position,
      size: projectile.attack.size
    })
  }
  deleteProjectile (projectile: ProjectileClass): void {
    this.projectiles.splice(
      this.projectiles.indexOf({
        position: projectile.position,
        size: projectile.attack.size
      }),
      1
    )
  }

  async render (): Promise<void> {
    const ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    ctx.imageSmoothingEnabled = false

    this.map.platforms.forEach(platform => {
      ctx.fillStyle = ctx.createPattern(
        platform.image,
        'repeat'
      ) as CanvasPattern
      ctx.fillRect(
        platform.position.x,
        platform.position.y,
        platform.width,
        platform.height
      )
    })

    this.map.path.forEach((point, i) => {
      if (i === 0) {
        ctx.beginPath()
        ctx.lineWidth = 50
        ctx.moveTo(point.x, point.y)
      } else {
        ctx.lineTo(point.x, point.y)
      }
    })
    ctx.stroke()

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
      ctx.fillStyle = 'red'
      ctx.fillRect(
        renderObject.position.x,
        renderObject.position.y,
        renderObject.size,
        renderObject.size
      )
      ctx.stroke()
    })

    ctx.closePath()
  }

  updateStats (
    hp: number,
    waves: { current: number; max: number },
    money: number
  ): void {
    this.hpSpan.innerHTML = `HP: ${hp}`
    this.wavesSpan.innerHTML = `Waves: ${waves.current} / ${waves.max}`
    this.moneySpan.innerHTML = `Money: ${money}`
  }
}
