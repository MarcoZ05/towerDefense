import { PositionInterface } from "./PositionInterface"

export type AttackInterface = setAttackInterface | trackingAttackInterface

interface basicAttackInterface {
  damage: number
  speed: number
  range: number
  delay: number
  size: number
  projectiles: number
  durability: number
  special: {
    camouflage: boolean
    iron: boolean
  }
}

interface setAttackInterface extends basicAttackInterface {
  type: 'set'
  setDeltaPostions: PositionInterface[]
}

interface trackingAttackInterface extends basicAttackInterface {
  type:
    | 'round'
    | 'all'
    | 'first'
    | 'last'
    | 'nearest'
    | 'furthest'
    | 'weakest'
    | 'strongest'
}
