import '../styles/index.css'

import React from 'react'

import { GeminiLayoutPage } from '@/components'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html id="portal" lang="en" dir="ltr">
      <body className="body-custom system-fonts--body segoe">
        <GeminiLayoutPage>{children}</GeminiLayoutPage>
      </body>
    </html>
  )
}
