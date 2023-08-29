import '../styles/index.css'

import React from 'react'
import AppProvider from '@/utils/registry'

import {
  AppLayout,
  LayoutNavigationAppList,
  LayoutNavigationAppRoot,
} from '@/features/layout'

import { Provider as GeminiNavAppRootProvider } from '@/features/layout/context/gemini-nav-app-root-context'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html id="portal" lang="en" dir="ltr">
      <link
        rel="preload"
        href="/assets/icons/sprite.svg"
        as="image"
        type="image/svg+xml"
      />
      <body className="body-custom system-fonts--body segoe">
        <GeminiNavAppRootProvider>
          <AppProvider className="app-custom">
            <AppLayout>
              <LayoutNavigationAppRoot>
                <LayoutNavigationAppList />
                {/* <LayoutNavigationAppChannel /> */}
              </LayoutNavigationAppRoot>
              {children}
            </AppLayout>
          </AppProvider>
        </GeminiNavAppRootProvider>
      </body>
    </html>
  )
}
