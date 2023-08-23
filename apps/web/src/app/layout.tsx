import '../styles/index.css'

import React from 'react'
import { GriffelJSRegistry } from '@/components/registry'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html id="portal" lang="en" dir="ltr">
      <body className="body-custom system-fonts--body segoe">
        <GriffelJSRegistry>{children}</GriffelJSRegistry>
      </body>
    </html>
  )
}
