import { PositionInterface } from './PositionInterface'

export interface RenderObjectInterface {
  position: PositionInterface
  width: number
  height: number
  image: HTMLImageElement
  radius?: number
  id?: number
}
