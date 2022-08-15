export type AttackInterface = setAttackInterface | trackingAttackInterface

interface basicAttackInterface {
  damage: number
  speed: number
  range: number
  delay: number
  size: number
  projectiles: number
  duration: {
    time: number
    enemies: number
  }
  special: {
    camouflage: boolean
    iron: boolean
  }
}

interface setAttackInterface extends basicAttackInterface {
  type: 'set'
  setAngles: number[]
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
