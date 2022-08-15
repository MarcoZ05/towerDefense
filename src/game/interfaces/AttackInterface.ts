export interface AttackInterface {
  damage: number
  speed: number
  range: number
  type:
    | 'round'
    | 'set'
    | 'all'
    | 'first'
    | 'last'
    | 'nearest'
    | 'furthest'
    | 'weakest'
    | 'strongest'
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
