import Game from '../game/Game'
import {
  AttackInterface,
  LevelInterface,
  PositionInterface
} from '../interfaces'
import EnemyClass from './EnemyClass'

export default class TowerClass {
  position: PositionInterface
  height: number
  width: number
  attack: AttackInterface
  cost: number
  name: string
  description: string
  leveling: LevelInterface[][]
  image: HTMLImageElement = new Image()
  delayTicks: number = 0
  constructor (
    position: PositionInterface,
    height: number,
    width: number,
    attack: AttackInterface,
    cost: number,
    name: string,
    description: string,
    leveling: LevelInterface[][]
  ) {
    this.position = position
    this.height = height
    this.width = width
    this.attack = attack
    this.cost = cost
    this.name = name
    this.description = description
    this.leveling = leveling
    this.image.src =
      './assets/images/towers/' +
      name +
      '/' +
      leveling[0].filter(e => e.bought).length +
      '-' +
      leveling[1].filter(e => e.bought).length +
      '-' +
      leveling[2].filter(e => e.bought).length +
      '.jpg'
  }

  shootProjectile (
    enemies: EnemyClass[] = [],
    game: Game
  ): PositionInterface[] {
    // TODO: attack enemy/-ies, check type...
    if (this.delayTicks < this.attack.delay || enemies.length === 0) {
      this.delayTicks++
      return []
    }

    const enemiesInRange = this.enemiesInRange(enemies).filter(enemy => {
      return (
        (enemy.health.special.camouflage === false ||
          this.attack.special.camouflage === true) &&
        (enemy.health.special.iron === false ||
          this.attack.special.iron === true) &&
        enemy.position.x < game.renderer.canvas.width &&
          enemy.position.x > 0 &&
          enemy.position.y < game.renderer.canvas.height &&
          enemy.position.y > 0
      )
    })

    if (enemiesInRange.length === 0) return []
    else this.delayTicks = 0

    let shotDeltaPostions: PositionInterface[] = []

    switch (this.attack.type) {
      case 'set':
        shotDeltaPostions = this.attack.setDeltaPostions
        break
      case 'all':
        shotDeltaPostions = enemiesInRange.map(enemy =>
          this.getDeltaPosition(enemy)
        )
        break
      case 'nearest':
        const nearestEnemies = enemiesInRange.sort((a, b) => {
          const aDistance =
            Math.abs(this.position.x - a.position.x) +
            Math.abs(this.position.y - a.position.y)
          const bDistance =
            Math.abs(this.position.x - b.position.x) +
            Math.abs(this.position.y - b.position.y)
          return aDistance - bDistance
        })
        shotDeltaPostions = [this.getDeltaPosition(nearestEnemies[0])]
        break
      case 'last':
        const furthestEnemies = enemiesInRange
          .sort((a, b) => {
            const aDistance =
              Math.abs(this.position.x - a.position.x) +
              Math.abs(this.position.y - a.position.y)
            const bDistance =
              Math.abs(this.position.x - b.position.x) +
              Math.abs(this.position.y - b.position.y)
            return aDistance - bDistance
          })
          .reverse()
        shotDeltaPostions = [this.getDeltaPosition(furthestEnemies[0])]
        break
      case 'first':
        const firstEnemies = enemiesInRange.sort((a, b) => {
          return a.pathCheckPoint - b.pathCheckPoint
        })
        firstEnemies.filter(enemy => {
          return enemy.pathCheckPoint === firstEnemies[0].pathCheckPoint
        })
        firstEnemies.sort((a, b) => {
          const aDistance =
            Math.abs(game.map.path[a.pathCheckPoint + 1].x - a.position.x) +
            Math.abs(game.map.path[a.pathCheckPoint + 1].y - a.position.y)
          const bDistance =
            Math.abs(game.map.path[b.pathCheckPoint + 1].x - b.position.x) +
            Math.abs(game.map.path[b.pathCheckPoint + 1].y - b.position.y)
          return aDistance - bDistance
        })
        shotDeltaPostions = [this.getDeltaPosition(firstEnemies[0])]
        break
      case 'last':
        const lastEnemies = enemiesInRange
          .sort((a, b) => {
            return a.pathCheckPoint - b.pathCheckPoint
          })
          .reverse()
        lastEnemies.filter(enemy => {
          return enemy.pathCheckPoint === lastEnemies[0].pathCheckPoint
        })
        lastEnemies.sort((a, b) => {
          const aDistance =
            Math.abs(game.map.path[a.pathCheckPoint].x - a.position.x) +
            Math.abs(game.map.path[a.pathCheckPoint].y - a.position.y)
          const bDistance =
            Math.abs(game.map.path[b.pathCheckPoint].x - b.position.x) +
            Math.abs(game.map.path[b.pathCheckPoint].y - b.position.y)
          return aDistance - bDistance
        })
        shotDeltaPostions = [this.getDeltaPosition(lastEnemies[0])]
        break
      case 'strongest':
        const strongestEnemies = enemiesInRange.sort((a, b) => {
          return a.health.current - b.health.current
        })
        shotDeltaPostions = [this.getDeltaPosition(strongestEnemies[0])]
        break
      case 'weakest':
        const weakestEnemies = enemiesInRange.sort((a, b) => {
          return b.health.current - a.health.current
        })
        shotDeltaPostions = [this.getDeltaPosition(weakestEnemies[0])]
        break
      case 'round':
        //TODO: get round angles
        break
    }

    return shotDeltaPostions
  }

  enemiesInRange (enemies: EnemyClass[] = []): EnemyClass[] {
    return enemies.filter(enemy => {
      return (
        Math.sqrt(
          Math.pow(enemy.position.x - this.position.x, 2) +
            Math.pow(enemy.position.y - this.position.y, 2)
        ) <= this.attack.range
      )
    })
  }

  getDeltaPosition (enemy: EnemyClass): PositionInterface {
    const deltaPosition = {
      x: enemy.position.x - this.position.x,
      y: enemy.position.y - this.position.y
    }
    const speed = this.attack.speed
    const speedX =
      (deltaPosition.x /
        Math.sqrt(
          Math.pow(deltaPosition.x, 2) + Math.pow(deltaPosition.y, 2)
        )) *
      speed
    const speedY =
      (deltaPosition.y /
        Math.sqrt(
          Math.pow(deltaPosition.x, 2) + Math.pow(deltaPosition.y, 2)
        )) *
      speed
    return {
      x: speedX,
      y: speedY
    }
  }
}
