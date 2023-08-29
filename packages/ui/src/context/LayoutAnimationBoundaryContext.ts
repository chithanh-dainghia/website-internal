import { createContext } from 'react'

type LayoutAnimationBoundaryContextProps = {
  animationEventTargets?: any
  getIsAnimating: () => any
}

const LayoutAnimationBoundaryContext = createContext<
  LayoutAnimationBoundaryContextProps | undefined
>(undefined)

export default LayoutAnimationBoundaryContext
