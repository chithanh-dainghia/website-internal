'use client'

import React, { ReactNode, createContext, useMemo } from 'react'
import { WorkGalahadAppTabID } from '../constants/work-galahad-app-tab-id'
import { usePathname } from 'next/navigation'

type GeminiNavAppRootContextProps = {
  selectedAppTabID: string
}

const initial = {
  selectedAppTabID: WorkGalahadAppTabID.HOME,
}

const GeminiNavAppRootContext =
  createContext<GeminiNavAppRootContextProps>(initial)

export const Provider = ({ children }: { children?: ReactNode }) => {
  const pathname = usePathname()

  const value = useMemo(() => {
    const params = pathname.split('/')

    return {
      selectedAppTabID: '',
    }
  }, [pathname])

  return (
    <GeminiNavAppRootContext.Provider value={value}>
      {children}
    </GeminiNavAppRootContext.Provider>
  )
}
