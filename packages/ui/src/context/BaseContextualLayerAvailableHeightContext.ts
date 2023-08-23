import { createContext } from 'react'

type BaseContextualLayerAvailableHeightContextProps = {}

const BaseContextualLayerAvailableHeightContext = createContext<
  BaseContextualLayerAvailableHeightContextProps | undefined
>(undefined)

export default BaseContextualLayerAvailableHeightContext
