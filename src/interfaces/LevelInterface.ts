import TowerClass from '../classes/TowerClass'

export interface LevelInterface {
  updateTower(tower: TowerClass): void
  cost: number
  bought: boolean
  description: string
}
