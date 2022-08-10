import TowerClass from '../classes/TowerClass.js'
import { PositionInterface } from '../interfaces'

export class dartMonkey extends TowerClass {
  constructor (position: PositionInterface) {
    super(position, 50, 50, 2, 1, 100, 5, 'dartMonkey', [[], [], []])
    this.leveling = [
      [
        {
          updateTower (tower: TowerClass): void {
            tower.attackDamage *= 2
          },
          cost: 250,
          bought: false,
          description: 'Attack damage gets doubled'
        },
        {
          updateTower (tower: TowerClass): void {
            tower.attackDamage *= 2
          },
          cost: 500,
          bought: false,
          description: 'Attack damage gets doubled'
        },
        {
          updateTower (tower: TowerClass): void {
            tower.attackDamage *= 3
          },
          cost: 2000,
          bought: false,
          description: 'Attack damage gets tripled'
        }
      ],
      [
        {
          updateTower (tower: TowerClass): void {
            tower.attackDelay * 0.5
          },
          cost: 250,
          bought: false,
          description: 'Attack delay gets halved'
        },
        {
          updateTower (tower: TowerClass): void {
            tower.attackDelay * 0.5
          },
          cost: 500,
          bought: false,
          description: 'Attack delay gets halved'
        },
        {
          updateTower (tower: TowerClass): void {
            tower.attackDelay * 0.5
          },
          cost: 2000,
          bought: false,
          description: 'Attack delay gets halved'
        }
      ],
      [
        {
          updateTower (tower: TowerClass): void {
            tower.attackRange *= 1.25
          },
          cost: 250,
          bought: false,
          description: 'Range gets increased by 25%'
        },
        {
          updateTower (tower: TowerClass): void {
            tower.attackRange *= 1.25
          },
          cost: 500,
          bought: false,
          description: 'Range gets increased by 25%'
        },
        {
          updateTower (tower: TowerClass): void {
            tower.attackRange *= 1.25
          },
          cost: 2000,
          bought: false,
          description: 'Range gets increased by 25%'
        }
      ]
    ]
  }
}
