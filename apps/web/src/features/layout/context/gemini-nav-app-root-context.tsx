'use client'

import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
} from 'react'
import { WorkGalahadAppTabID } from '../constants/work-galahad-app-tab-id'
import { usePathname } from 'next/navigation'
import { noop } from 'ui'

type GeminiNavAppRootContextProps = {
  selectedAppTabID: string
  getSelectedAppTab: (key: keyof typeof WorkGalahadAppTabID) => boolean
}

const initial = {
  selectedAppTabID: WorkGalahadAppTabID.HOME,
  getSelectedAppTab: noop,
}

const GeminiNavAppRootContext =
  createContext<GeminiNavAppRootContextProps>(initial)

export const Provider = ({ children }: { children?: ReactNode }) => {
  const pathname = usePathname()

  const value = useMemo(() => {
    return ''
  }, [pathname])

  const getSelectedAppTab = useCallback(
    (key: keyof typeof WorkGalahadAppTabID) => {
      const params = pathname.split('/')

      return params[0] === WorkGalahadAppTabID[key]
    },
    [pathname],
  )

  return (
    <GeminiNavAppRootContext.Provider
      value={{
        selectedAppTabID: value,
        getSelectedAppTab,
      }}
    >
      {children}
    </GeminiNavAppRootContext.Provider>
  )
}

export function useGeminiAppRoot() {
  return useContext(GeminiNavAppRootContext)
}
