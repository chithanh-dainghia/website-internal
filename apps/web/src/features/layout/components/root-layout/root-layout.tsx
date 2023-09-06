'use client'

import React, { ReactNode, createElement, useMemo } from 'react'
import { usePathname } from 'next/navigation'

import { LoginLayout } from '../login-layout'
import { AppLayout } from '../app-layout'

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname()

  const Layout = useMemo(
    () =>
      pathName.includes('/signin') || pathName.includes('/register')
        ? LoginLayout
        : AppLayout,
    [pathName],
  )

  return <Layout>{children}</Layout>
}
