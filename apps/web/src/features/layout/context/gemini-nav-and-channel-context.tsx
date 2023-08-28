// __d("GeminiNavAndChannelContext", ["WorkGalahadHoverHelper", "emptyFunction", "gkx", "react"], (function(a, b, c, d, e, f, g) {

import { ReactNode, createContext, useContext, useMemo, useState } from 'react'
import { emptyFunction, noop } from 'ui'
import { useHover } from '../helpers'

type GeminiNavAndChannelContextProps = {
  isNavHovered: boolean
  isChannelVisible: boolean
  isAutoHideEnabled: boolean
  setIsAutoHideEnabled: typeof noop
  onMouseEnter: typeof noop
  onMouseLeave: typeof noop
}

const initial = {
  isNavHovered: false,
  isChannelVisible: true,
  isAutoHideEnabled: false,
  setIsAutoHideEnabled: emptyFunction,
  onMouseEnter: emptyFunction,
  onMouseLeave: emptyFunction,
}

const GeminiNavAndChannelContext =
  createContext<GeminiNavAndChannelContextProps>(initial)

GeminiNavAndChannelContext.displayName = 'GeminiLayoutNavStateContext'

export function Provider({ children }: { children?: ReactNode }) {
  const [isNavHovered, { onMouseEnter, onMouseLeave }] = useHover()
  const [isAutoHideEnabled, setIsAutoHideEnabled] = useState(false)

  const isChannelVisible = isNavHovered || !isAutoHideEnabled

  const value = useMemo(() => {
    return {
      isNavHovered,
      isChannelVisible,
      isAutoHideEnabled,
      setIsAutoHideEnabled,
      onMouseEnter,
      onMouseLeave,
    }
  }, [
    isNavHovered,
    isChannelVisible,
    isAutoHideEnabled,
    setIsAutoHideEnabled,
    onMouseEnter,
    onMouseLeave,
  ])

  return (
    <GeminiNavAndChannelContext.Provider value={value}>
      {children}
    </GeminiNavAndChannelContext.Provider>
  )
}

export function useNavUIState() {
  return useContext(GeminiNavAndChannelContext)
}
