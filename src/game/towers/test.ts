import TowerClass from '../classes/TowerClass.js'
import { PositionInterface } from '../interfaces'

export class test extends TowerClass {
  constructor (position: PositionInterface) {
    super(
      position,
      100,
      100,
      {
        type: 'first',
        damage: 1,
        speed: 10,
        range: 250,
        delay: 100,
        size: 25,
        projectiles: 1,
        durability: 100,
        special: {
          camouflage: true,
          iron: true
        }
      },
      100,
      'test',
      'test',
      [
        [
          {
            cost: 300,
            bought: false,
            description: 'test',
            name: 'test',
            updateTower: (tower: TowerClass) => {}
          },
          {
            cost: 300,
            bought: false,
            description: 'test',
            name: 'test',
            updateTower: (tower: TowerClass) => {}
          }
        ],
        [
          {
            cost: 300,
            bought: false,
            description: 'test',
            name: 'test',
            updateTower: (tower: TowerClass) => {}
          },
          {
            cost: 300,
            bought: false,
            description: 'test',
            name: 'test',
            updateTower: (tower: TowerClass) => {}
          }
        ],
        [
          {
            cost: 300,
            bought: false,
            description: 'test',
            name: 'test',
            updateTower: (tower: TowerClass) => {}
          },
          {
            cost: 300,
            bought: false,
            description: 'test',
            name: 'test',
            updateTower: (tower: TowerClass) => {}
          }
        ]
      ]
    )
  }
}
