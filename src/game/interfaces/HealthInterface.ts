export interface HealthInterface {
  max: number
  current: number
  special: {
    camouflage: boolean
    iron: boolean
  }
}
