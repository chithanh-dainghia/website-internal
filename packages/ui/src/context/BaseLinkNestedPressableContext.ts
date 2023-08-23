import { createContext } from 'react'

type BaseLinkNestedPressableContextProps = {}

const BaseLinkNestedPressableContext = createContext<
  BaseLinkNestedPressableContextProps | undefined
>(undefined)

export default BaseLinkNestedPressableContext
