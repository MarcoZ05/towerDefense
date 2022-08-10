import EnemyClass from '../classes/EnemyClass.js'
import TowerClass from '../classes/TowerClass.js'
import {
  RenderObjectInterface,
  PositionInterface,
  MapInterface
} from '../interfaces.js'

export default class Render {
  towers: Array<RenderObjectInterface> = []
  enemies: Array<RenderObjectInterface> = []
  enemyPath: Array<PositionInterface> = []

  addEnemyPath (enemyPath: Array<PositionInterface>): void {
    this.enemyPath = enemyPath
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
    renderObject.image = enemy.image
    renderObject.position = enemy.position
    renderObject.width = enemy.width
    renderObject.height = enemy.height

    this.enemies.push(renderObject)
  }

  async render (canvas: HTMLCanvasElement): Promise<void> {
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.imageSmoothingEnabled = false

    this.enemyPath.forEach((position, i) => {
      if (i === 0) {
        ctx.beginPath()
        ctx.lineWidth = 50
        ctx.strokeStyle = 'beige'
        ctx.moveTo(position.x, position.y)
      } else {
        ctx.lineTo(position.x, position.y)
      }
    })

    const renderObjects = [...this.towers, ...this.enemies]
    for (let index = 0; index < renderObjects.length; index++) {
      const renderObject = renderObjects[index]

      this.loadImage(renderObject.image).then(image => {
        ctx.drawImage(
          image,
          renderObject.position.x,
          renderObject.position.y,
          renderObject.width,
          renderObject.height
        )
      })
    }

    ctx.stroke()
  }

  async loadImage (image: HTMLImageElement): Promise<HTMLImageElement> {
    return new Promise(resolve => {
      image.onload = () => {
        resolve(image)
      }
    })
  }
}
