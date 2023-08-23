import { createContext } from 'react'

type BaseScrollableAreaContextProps = {}

const BaseScrollableAreaContext = createContext<
  BaseScrollableAreaContextProps | undefined
>(undefined)

export default BaseScrollableAreaContext
