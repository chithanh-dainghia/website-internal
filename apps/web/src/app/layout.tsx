import '../styles/index.css'

import { Space_Grotesk } from 'next/font/google'

import React, { CSSProperties } from 'react'
import AppProvider from '@/utils/registry'

import { Provider as GeminiNavAppRootProvider } from '@/features/layout/context/gemini-nav-app-root-context'
import { RootLayout } from '@/features/layout/components/root-layout'

// If loading a variable font, you don't need to specify the font weight
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
})

export default function RoootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html id="portal" lang="en" dir="ltr">
        <link
          rel="preload"
          href="/assets/icons/sprite.svg"
          as="image"
          type="image/svg+xml"
        />
        <body
          style={{
            fontFamily: `${spaceGrotesk.style.fontFamily} !important`,
          }}
          className={`body-custom system-fonts--body segoe`}
        >
          <GeminiNavAppRootProvider>
            <AppProvider className="app-custom">
              <RootLayout>{children}</RootLayout>
            </AppProvider>
          </GeminiNavAppRootProvider>
        </body>
      </html>
    </>
  )
}
