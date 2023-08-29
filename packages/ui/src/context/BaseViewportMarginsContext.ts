import { createContext } from 'react'

type BaseViewportMarginsContextProps = {
  bottom: number
  left: number
  right: number
  top: number
}

const inital: BaseViewportMarginsContextProps = {
  bottom: 0,
  left: 0,
  right: 0,
  top: 0,
}

const BaseViewportMarginsContext = createContext<
  BaseViewportMarginsContextProps | undefined
>(inital)

export default BaseViewportMarginsContext
