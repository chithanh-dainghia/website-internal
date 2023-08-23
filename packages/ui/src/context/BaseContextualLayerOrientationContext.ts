import { createContext } from 'react'

type BaseContextualLayerOrientationContextProps = {
  align?: string
  position?: string
}

const iniial: BaseContextualLayerOrientationContextProps = {
  align: 'start',
  position: 'below',
}

const BaseContextualLayerOrientationContext = createContext<
  BaseContextualLayerOrientationContextProps | undefined
>(iniial)

export default BaseContextualLayerOrientationContext
