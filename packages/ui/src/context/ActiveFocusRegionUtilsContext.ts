import { createContext } from 'react'

type ActiveFocusRegionUtilsContextProps = {
  getActiveFocusRegion: (...param: any) => any
  setActiveFocusRegion: (...param: any) => any
}

const ActiveFocusRegionUtilsContext = createContext<
  ActiveFocusRegionUtilsContextProps | undefined
>(undefined)

export default ActiveFocusRegionUtilsContext
