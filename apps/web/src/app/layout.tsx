import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html id="portal" lang="en" dir="ltr">
      <body className="system-fonts--body segoe">{children}</body>
    </html>
  )
}
