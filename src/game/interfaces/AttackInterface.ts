export interface AttackInterface {
  damage: number
  speed: number
  range: number
  type: string
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
