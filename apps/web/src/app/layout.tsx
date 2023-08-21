import '../styles/index.css'

import React from 'react'
import { FluentAppProvider } from '@/components/fluent-layout'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html id="portal" lang="en" dir="ltr">
      <body className="body-custom system-fonts--body segoe">
        <FluentAppProvider>{children}</FluentAppProvider>
      </body>
    </html>
  )
}
