import { createContext } from 'react'

type BaseContextualLayerAnchorRootContextType = {
  current: HTMLElement | null
}

const BaseContextualLayerAnchorRootContext =
  createContext<BaseContextualLayerAnchorRootContextType>({
    current: document.body,
  })

export default BaseContextualLayerAnchorRootContext
