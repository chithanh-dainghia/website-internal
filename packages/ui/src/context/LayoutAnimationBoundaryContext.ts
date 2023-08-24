import { createContext } from 'react'

type LayoutAnimationBoundaryContextProps = {
  animationEventTargets?: any
}

const LayoutAnimationBoundaryContext = createContext<
  LayoutAnimationBoundaryContextProps | undefined
>(undefined)

export default LayoutAnimationBoundaryContext
