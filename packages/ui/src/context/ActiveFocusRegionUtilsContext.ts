import { createContext } from 'react'

type ActiveFocusRegionUtilsContextProps = {}

const ActiveFocusRegionUtilsContext = createContext<
  ActiveFocusRegionUtilsContextProps | undefined
>(undefined)

export default ActiveFocusRegionUtilsContext
