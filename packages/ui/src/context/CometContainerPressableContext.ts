import { createContext } from 'react'

type CometContainerPressableContextProps = {}

const CometContainerPressableContext = createContext<
  CometContainerPressableContextProps | undefined
>(undefined)

export default CometContainerPressableContext
