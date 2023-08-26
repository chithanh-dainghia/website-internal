import { createContext } from 'react'

type BaseLinkNestedPressableContextProps = boolean

const BaseLinkNestedPressableContext = createContext<
  BaseLinkNestedPressableContextProps | undefined
>(undefined)

export default BaseLinkNestedPressableContext
