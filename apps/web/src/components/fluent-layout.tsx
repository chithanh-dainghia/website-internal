'use client'

import {
  renderToStyleElements,
  createDOMRenderer,
  RendererProvider,
} from '@griffel/react'
import React from 'react'
import { useServerInsertedHTML } from 'next/navigation'

type AppProviderProps = React.PropsWithChildren

export function FluentAppProvider({ children }: AppProviderProps) {
  const [renderer] = React.useState(() => createDOMRenderer())

  useServerInsertedHTML(() => {
    return <>{renderToStyleElements(renderer)}</>
  })

  return <RendererProvider renderer={renderer}>{children}</RendererProvider>
}
