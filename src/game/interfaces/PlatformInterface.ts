import { PositionInterface } from './PositionInterface'

export interface PlatformInterface {
  position: PositionInterface
  width: number
  height: number
  type: 'ground' | 'water' | 'obstacle'
  image: HTMLImageElement
}
